// netlify/functions/generate-question.js
// Calls Gemini API server-side — the GEMINI_API_KEY env var is NEVER sent to the browser.
// Free tier: 15 req/min, 1500 req/day — plenty for personal study use.

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Gemini API key not configured' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  const { type, difficulty, vocabWords, count = 1 } = body;

  // Validate
  const validTypes = ['tc', 'se', 'rc'];
  const validDiffs = ['easy', 'medium', 'hard'];
  if (!validTypes.includes(type))  return { statusCode: 400, body: JSON.stringify({ error: 'Invalid type' }) };
  if (!validDiffs.includes(difficulty)) return { statusCode: 400, body: JSON.stringify({ error: 'Invalid difficulty' }) };
  const safeCount = Math.min(Math.max(1, parseInt(count) || 1), 5); // clamp 1–5

  const prompt = buildPrompt(type, difficulty, vocabWords || [], safeCount);

  try {
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.85,
            maxOutputTokens: 8192,
          },
        }),
      }
    );

    if (!geminiRes.ok) {
      const err = await geminiRes.text();
      console.error('Gemini error:', err);
      // Pass 429 through so the frontend knows to back off
      if (geminiRes.status === 429) {
        return { statusCode: 429, body: JSON.stringify({ error: 'Rate limit hit — using fallback questions', rateLimited: true }) };
      }
      return { statusCode: 502, body: JSON.stringify({ error: 'Gemini API error', detail: err }) };
    }

    const geminiData = await geminiRes.json();
    const text = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) return { statusCode: 502, body: JSON.stringify({ error: 'Empty response from Gemini' }) };

    // Parse and validate the JSON
    let questions;
    try {
      const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
      questions = JSON.parse(cleaned);
      if (!Array.isArray(questions)) questions = [questions];
    } catch (e) {
      console.error('JSON parse error:', e, 'Raw text:', text);
      return { statusCode: 502, body: JSON.stringify({ error: 'Failed to parse Gemini response' }) };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questions }),
    };

  } catch (err) {
    console.error('Function error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};

// ── PROMPT BUILDERS ────────────────────────────────────────────────────────────

function buildPrompt(type, difficulty, vocabWords, count) {
  const diffDesc = {
    easy:   'appropriate for someone just starting GRE prep, clear context clues',
    medium: 'typical GRE difficulty, moderate ambiguity, requires vocabulary knowledge',
    hard:   'high GRE difficulty, subtle context, advanced vocabulary, tricky distractors',
  }[difficulty];

  const wordHint = vocabWords.length > 0
    ? `When possible, use these specific vocabulary words as answer choices or in the passage (they are from the student's study list): ${vocabWords.slice(0, 40).join(', ')}.`
    : '';

  if (type === 'tc') return buildTCPrompt(difficulty, diffDesc, wordHint, count);
  if (type === 'se') return buildSEPrompt(difficulty, diffDesc, wordHint, count);
  if (type === 'rc') return buildRCPrompt(difficulty, diffDesc, wordHint, count);
}

function buildTCPrompt(difficulty, diffDesc, wordHint, count) {
  return `You are a GRE test preparation expert. Generate ${count} Text Completion question(s) at ${difficulty} difficulty (${diffDesc}).
  You MUST return valid JSON only. Do not include markdown, code fences, or explanations outside JSON. Ensure the response is strictly parseable using JSON.parse().

${wordHint}

STRICT GRE TEXT COMPLETION RULES:
- 1-blank questions: provide exactly 5 answer choices labeled A-E
- 2-blank questions: provide exactly 3 choices per blank (Blank i and Blank ii)
- 3-blank questions: provide exactly 3 choices per blank (Blank i, Blank ii, Blank iii)
- Mix of 1, 2, and 3 blank questions
- Blanks in the text are marked as (i)__________, (ii)__________, (iii)__________
- Only one combination is correct; wrong answers must be plausible but clearly incorrect in context
- Write sentences that are sophisticated and GRE-like in style
- Include a brief explanation of why the correct answer(s) are right

Return ONLY a JSON array with no markdown, exactly this structure:
[
  {
    "id": "tc_001",
    "type": "tc",
    "difficulty": "${difficulty}",
    "numBlanks": 2,
    "passage": "Given how (i)__________ the shortcomings of the model are, the failure to respond is astonishing.",
    "blanks": [
      {
        "label": "Blank (i)",
        "choices": [
          { "label": "A", "text": "overlooked" },
          { "label": "B", "text": "occasional" },
          { "label": "C", "text": "patent" }
        ],
        "correct": "C"
      }
    ],
    "explanation": "Patent means obvious/evident. The sentence contrasts the obviousness of shortcomings with the failure to respond, making patent the logical choice."
  }
]`;
}

function buildSEPrompt(difficulty, diffDesc, wordHint, count) {
  return `You are a GRE test preparation expert. Generate ${count} Sentence Equivalence question(s) at ${difficulty} difficulty (${diffDesc}).

${wordHint}
You MUST return valid JSON only. Do not include markdown, code fences, or explanations outside JSON. Ensure the response is strictly parseable using JSON.parse().

STRICT GRE SENTENCE EQUIVALENCE RULES:
- Exactly ONE blank per question
- Exactly 6 answer choices labeled A-F
- Exactly TWO correct answers that are near-synonyms and both produce a coherent, equivalent sentence
- The other 4 choices must be plausible but not both correct — some may fit the blank but don't form an equivalent pair
- The correct pair must be genuine synonyms or near-synonyms in the context
- Write GRE-level sentences — sophisticated, content-rich

Return ONLY a JSON array with no markdown, exactly this structure:
[
  {
    "id": "se_001",
    "type": "se",
    "difficulty": "${difficulty}",
    "passage": "Despite being cited as one of the most __________ philosophers, today he is remembered only as a poet.",
    "choices": [
      { "label": "A", "text": "preeminent" },
      { "label": "B", "text": "ignored" },
      { "label": "C", "text": "obscure" },
      { "label": "D", "text": "overlooked" },
      { "label": "E", "text": "renowned" },
      { "label": "F", "text": "mischaracterized" }
    ],
    "correct": ["A", "E"],
    "explanation": "Preeminent and renowned are synonyms meaning distinguished/highly regarded. The sentence contrasts past fame as a philosopher with being remembered only as a poet."
  }
]`;
}

function buildRCPrompt(difficulty, diffDesc, wordHint, count) {
  const passageLength = difficulty === 'easy' ? '1-2 short paragraphs (100-150 words)'
    : difficulty === 'medium' ? '2-3 paragraphs (150-250 words)'
    : '3-4 paragraphs (250-350 words)';

  return `You are a GRE test preparation expert. Generate ${count} Reading Comprehension passage(s) with questions at ${difficulty} difficulty (${diffDesc}).
  You MUST return valid JSON only. Do not include markdown, code fences, or explanations outside JSON. Ensure the response is strictly parseable using JSON.parse().

Passage length: ${passageLength}
Topics: academic subjects — science, history, arts, social sciences, philosophy (avoid politics/religion)
Questions per passage: ${difficulty === 'easy' ? 2 : difficulty === 'medium' ? 3 : 4}
Question types to include (mix these): main idea, author's purpose, inference, specific detail, vocabulary in context, strengthen/weaken argument, author's tone

Return ONLY a JSON array with no markdown, exactly this structure:
[
  {
    "id": "rc_001",
    "type": "rc",
    "difficulty": "${difficulty}",
    "passage": "The full passage text here...",
    "questions": [
      {
        "qid": "rc_001_q1",
        "qtype": "main idea",
        "text": "The primary purpose of the passage is to...",
        "choices": [
          { "label": "A", "text": "argue that..." },
          { "label": "B", "text": "describe..." },
          { "label": "C", "text": "compare..." },
          { "label": "D", "text": "question..." },
          { "label": "E", "text": "illustrate..." }
        ],
        "correct": "B",
        "explanation": "The passage primarily describes... because..."
      }
    ]
  }
]`;
}