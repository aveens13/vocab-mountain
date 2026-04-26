// ── VOCAB DATA ────────────────────────────────────────────────────────────────
const RAW_GROUPS = [
  {name:"Group 1",words:[
    {w:"abound",m:"be present in large quantities"},{w:"amorphous",m:"lacking structure; unclear"},{w:"austere",m:"1. (of a person) strict and stern in character\n2. (of living conditions) lacking luxury; extremely harsh"},{w:"belie",m:"give a false impression of; mask"},{w:"capricious",m:"having varying moods; fickle"},{w:"cerebral",m:"1. related to the brain\n2. intellectual; focused on learning rather than emotion"},{w:"congenial",m:"1. (of a person) likable and friendly\n2. (of a thing) enjoyable because it aligns with one's tendencies"},{w:"conspicuous",m:"easily noticed; obvious"},{w:"cursory",m:"lacking effort; without care"},{w:"daunting",m:"scary or frightening; (of a task) seeming impossible"},{w:"deify",m:"look up to someone or something as a god"},{w:"didactic",m:"meant for teaching; educational, sometimes in a condescending manner"},{w:"disseminate",m:"distribute or circulate broadly"},{w:"feasible",m:"likely to be achieved; practical"},{w:"flout",m:"break a rule without guilt"},{w:"homogeneous",m:"composed of similar parts; alike"},{w:"humdrum",m:"boring; unlikely to excite"},{w:"insipid",m:"without flavor; lacking energy"},{w:"loquacious",m:"likely to talk a lot; wordy"},{w:"misanthropic",m:"having a distaste for humans and society"},{w:"misnomer",m:"a misleading or inaccurate name"},{w:"negligent",m:"lacking care or attention"},{w:"obsequious",m:"excessively submissive to authority"},{w:"placate",m:"decrease someone's anger or other negative emotion"},{w:"proclivity",m:"a fondness or liking for something"},{w:"puerile",m:"immature and childish"},{w:"quixotic",m:"excessively visionary; unfeasible"},{w:"spendthrift",m:"someone who spends money recklessly"},{w:"taciturn",m:"of few words; speaking little"},{w:"wary",m:"exercising caution; careful"},
  ]},
  {name:"Group 2",words:[
    {w:"adulterate",m:"damage the quality of; corrupt"},{w:"advocate",m:"support; be in favor of / someone who supports a cause"},{w:"aggrandize",m:"enhance one's power or standing"},{w:"alacrity",m:"eagerness to do something"},{w:"ambivalent",m:"having conflicting emotions; unsure"},{w:"ameliorate",m:"improve a bad feeling or bad situation"},{w:"amenable",m:"(of a person) receptive to change; open"},{w:"anachronistic",m:"of the wrong time or era"},{w:"audacious",m:"1. bold; unafraid of risks\n2. rude; exhibiting disrespect"},{w:"avaricious",m:"greedy; always wanting more"},{w:"banal",m:"unoriginal and dull; lacking creativity"},{w:"benign",m:"1. harmless; having little effect\n2. (of a person's character) kind hearted; nice"},{w:"brazen",m:"shameless and excessively forward"},{w:"calumny",m:"slander and defamation"},{w:"candid",m:"honest; without deception"},{w:"castigate",m:"scold someone harshly"},{w:"caustic",m:"1. (of speech) hostile and bitter\n2. (of a chemical) corrosive; acidic"},{w:"construe",m:"understand something subjectively"},{w:"contrite",m:"feeling regretful or guilty"},{w:"convoluted",m:"difficult to understand or follow"},{w:"covet",m:"strongly desire; yearn for"},{w:"craven",m:"lacking bravery; weak-kneed"},{w:"decorum",m:"politeness and proper behavior"},{w:"deft",m:"highly proficient; skilled"},{w:"demur",m:"1. hesitate or object; express doubt\n2. hesitation"},{w:"derivative",m:"based on someone else's work (often used in a negative sense)"},{w:"desiccate",m:"dry out; remove all moisture"},{w:"diatribe",m:"an angry rant; verbal abuse"},{w:"incredulous",m:"doubtful and disbelieving"},{w:"ingenuous",m:"naive and lacking experience"},
  ]},
  {name:"Group 3",words:[
    {w:"abate",m:"decrease in intensity; lessen"},{w:"abjure",m:"strongly reject (an idea); forgo"},{w:"anomalous",m:"differing from what is normal; atypical"},{w:"antipathy",m:"profound hostility or hatred"},{w:"arcane",m:"comprehended by very few people; secret"},{w:"arduous",m:"very challenging; needing great effort"},{w:"artless",m:"1. naive; inexperienced\n2. plain and simple\n3. lacking skill"},{w:"ascetic",m:"1. (of a lifestyle) very strict and lacking luxury\n2. someone who adopts an ascetic lifestyle"},{w:"assuage",m:"1. decrease a negative feeling\n2. fulfill a certain desire"},{w:"betray",m:"unknowingly disclose or reveal"},{w:"bucolic",m:"associated with tranquil rural life"},{w:"burgeon",m:"quickly increase or grow; skyrocket"},{w:"cacophonous",m:"extremely noisy; grating"},{w:"canonize",m:"treat like a god; deeply venerate"},{w:"censure",m:"strongly criticize or disapprove"},{w:"chicanery",m:"using deception to attain a certain goal"},{w:"coalesce",m:"bring elements together; unite"},{w:"cogent",m:"persuasive and clear; compelling"},{w:"compelling",m:"1. persuasive and clear\n2. attracting interest; fascinating"},{w:"contend",m:"1. argue a certain point of view\n2. compete\n3. struggle or attempt to overcome"},{w:"copious",m:"existing in great supply; abundant"},{w:"cosmopolitan",m:"1. (of a city) highly diverse\n2. (of a person) sophisticated and urbane"},{w:"deference",m:"high regard and respect; esteem"},{w:"desultory",m:"unplanned; without enthusiasm"},{w:"diffident",m:"reserved or shy; without confidence"},{w:"dilatory",m:"slow and unhurried; meant to stall"},{w:"equivocate",m:"speak evasively; avoid taking a stance"},{w:"polarize",m:"separate into two opposing groups"},{w:"prodigal",m:"1. carelessly wasteful; extravagant\n2. a person who is excessively wasteful"},{w:"verbose",m:"excessively talkative; wordy"},
  ]},
  {name:"Group 4",words:[
    {w:"abstain",m:"avoid taking part in something"},{w:"approbation",m:"appreciation toward someone"},{w:"cherish",m:"greatly love or protect something"},{w:"corroborate",m:"lend support to; bolster"},{w:"disparate",m:"different or contrasting"},{w:"emulate",m:"imitate someone or something"},{w:"enervate",m:"sap the energy out of someone; fatigue"},{w:"ephemeral",m:"extremely short lasting"},{w:"fervid",m:"excessively energetic or eager"},{w:"garrulous",m:"tending to talk too much; wordy"},{w:"incendiary",m:"provocative; causing conflict"},{w:"inimical",m:"damaging; hostile in manner or tone"},{w:"intimate",m:"subtly suggest or imply"},{w:"invigorate",m:"provide energy or vitality to"},{w:"mitigate",m:"diminish negative feelings or situation"},{w:"obsolete",m:"no longer useful; outmoded"},{w:"opaque",m:"1. unclear; hard to comprehend\n2. not able to be seen through"},{w:"paradigmatic",m:"representing the standard example"},{w:"pedantic",m:"overly concerned with (minor) details"},{w:"placid",m:"calm; free from activity or irritation"},{w:"polemical",m:"giving a strong, controversial opinion"},{w:"precipitate",m:"1. cause to happen\n2. done quickly or suddenly"},{w:"profundity",m:"great wisdom or intelligence"},{w:"prophetic",m:"able to correctly predict the future"},{w:"prudent",m:"wise in decision-making"},{w:"punctilious",m:"highly concerned with details or manners"},{w:"recondite",m:"obscure and difficult to understand"},{w:"scrupulous",m:"1. careful with details\n2. possessing moral integrity"},{w:"tranquil",m:"peaceful; free from activity"},{w:"vacillate",m:"go back and forth with one's view"},
  ]},
  {name:"Group 5",words:[
    {w:"aloof",m:"not warm or friendly; impersonal"},{w:"clangor",m:"a disturbingly loud noise"},{w:"conventional",m:"adhering to established practices or accepted standards"},{w:"debunk",m:"prove a belief or idea false"},{w:"diminutive",m:"exceptionally small in size or stature"},{w:"discernible",m:"able to be recognized or understood"},{w:"enigmatic",m:"hard to understand; mysterious"},{w:"estranged",m:"emotionally distanced from someone"},{w:"extravagant",m:"excessive, especially in terms of cost"},{w:"fanciful",m:"highly imaginative; unrealistic"},{w:"frivolous",m:"1. lacking in seriousness or importance\n2. (of a person) not taking things seriously"},{w:"heterogeneous",m:"composed of varying, diverse elements"},{w:"imperious",m:"having an arrogant or domineering manner"},{w:"impertinent",m:"1. disrespectful or inappropriate\n2. irrelevant or unrelated to something"},{w:"invasive",m:"1. infringing on others privacy\n2. spreading rapidly and causing harm"},{w:"irresolute",m:"uncertain or lacking determination"},{w:"laudable",m:"worthy of admiration or praise"},{w:"lax",m:"not diligent or careful; casual"},{w:"marginalize",m:"treat someone or something as insignificant"},{w:"panache",m:"a stylish and confident manner"},{w:"plodding",m:"moving slowly or laboriously"},{w:"prosaic",m:"1. Straightforward \n2. Unoriginal\n3. Unimaginative"},{w:"remedial",m:"serving to correct or cure something"},{w:"restive",m:"demonstrating difficulty in staying still"},{w:"sporadic",m:"happening occasionally and irregularly"},{w:"stigmative",m:"label or mark as disgraceful"},{w:"undermine",m:"weaken or sabotage, often subtly"},{w:"utterly",m:"wholly or completely or to the fullest extent"},{w:"weary",m:"feeling tired and exhausted"},{w:"zealous",m:"intensely passionate"},
  ]},
  {name:"Group 6",words:[
    {w:"admonish",m:"1. scold someone seriously\n2. give someone urgent advice"},{w:"aesthetic",m:"pertaining to beauty or the appreciation thereof"},{w:"affectation",m:"a pretense or show meant to impress others"},{w:"alleviate",m:"lessen the intensity or severity of something negative"},{w:"analogous",m:"comparable or similar to"},{w:"bolster",m:"lend support or boost"},{w:"chauvinistic",m:"excessively patriotic or biased in favor of a group or cause"},{w:"connoisseur",m:"a discerning expert in matters of taste"},{w:"dissemble",m:"hide or misrepresent one's true feelings or beliefs"},{w:"dogged",m:"demonstrating tenacity and an unwillingness to give up"},{w:"dupe",m:"trick or fool someone"},{w:"empirical",m:"based on observation or experience rather than conjecture"},{w:"engender",m:"produce or stimulate the development of something"},{w:"entitled",m:"assuming oneself to be deserving of special rights or privileges"},{w:"pertinacious",m:"stubbornly holding onto a belief or course of action"},{w:"presumptuous",m:"overstepping boundaries, often in an overconfident way"},{w:"probity",m:"the characteristic of having strong ethical standards"},{w:"proliferate",m:"rapidly increase or multiply in number"},{w:"specious",m:"seemingly reasonable but actually wrong"},{w:"spurious",m:"not genuine; bogus"},{w:"subjective",m:"pertaining to personal feelings rather than objective reality"},{w:"subvert",m:"undermine or weaken, typically an authority of some sort"},{w:"timorous",m:"displaying nervousness; lacking confidence"},{w:"tortuous",m:"1. marked by numerous twists or turns\n2. overly complicated and long"},{w:"tractable",m:"1. easily managed or controlled\n2. (of a situation) easy to solve or handle"},{w:"transient",m:"not lasting, enduring, or permanent; transitory"},{w:"ubiquitous",m:"being everywhere at once"},{w:"underscore",m:"emphasize or show the importance of something"},{w:"venal",m:"open to bribery or corruption"},{w:"venerate",m:"regard with deep respect or reverence"},
  ]},
  {name:"Group 7",words:[
    {w:"appease",m:"1. calm someone down\n2. satisfy a demand or desire"},{w:"arbitrary",m:"determined by chance, not reason"},{w:"archaic",m:"ancient or outmoded; out of date"},{w:"clamorous",m:"characterized by extremely loud noise"},{w:"dearth",m:"lack of something in a particular area"},{w:"explicable",m:"able to be explained or understood"},{w:"hyperbole",m:"exaggeration to make a point or be funny"},{w:"immutable",m:"not capable of being changed"},{w:"indefatigable",m:"highly determined; resistant to tiring out"},{w:"indolent",m:"habitually lazy; averse to activity"},{w:"insular",m:"limited in outlook or experience; narrow"},{w:"intransigent",m:"refusing to compromise; stubborn"},{w:"intrepid",m:"resolutely fearless; brave"},{w:"irreverent",m:"lacking proper respect or seriousness"},{w:"loathe",m:"dislike greatly, often with disgust"},{w:"malign",m:"1. evil and harmful\n2. speak about someone in a bitter and critical manner"},{w:"malleable",m:"changeable or flexible; capable of being influenced"},{w:"neophyte",m:"an amateur or novice in a field"},{w:"plastic",m:"1. capable of being molded; flexible\n2. artificial; unnatural"},{w:"platitude",m:"a trite or banal remark or statement"},{w:"prescient",m:"possessing foresight of upcoming events"},{w:"pristine",m:"in its original, unspoiled state"},{w:"reproach",m:"express criticism towards; reprimand"},{w:"robust",m:"1. capable of surviving despite adverse conditions\n2. strong and powerful"},{w:"salubrious",m:"1. promoting health or well-being\n2. (of a place) pleasant"},{w:"sanction",m:"1. authorize; permit\n2. penalize; punish"},{w:"sedulous",m:"paying attention to details; diligent"},{w:"soporific",m:"causing sleep or lethargy"},{w:"stern",m:"hard, harsh, or severe in manner"},{w:"tendentious",m:"biased toward a particular view, often a provocative one"},
  ]},
  {name:"Group 8",words:[
    {w:"accentuate",m:"give emphasis or draw attention to something"},{w:"conjectural",m:"pertaining to a guess or inference made with limited data"},{w:"convivial",m:"demonstrating a jovial nature or a fondness for festivities"},{w:"decadent",m:"displaying excessive indulgence, sometimes to a morally degenerate extent"},{w:"egregious",m:"remarkably bad or shocking, to a conspicuous degree"},{w:"evanescent",m:"vanishing or fading away quickly, like mist or a phantom"},{w:"flamboyant",m:"characterized by a showy, confident, or audacious display"},{w:"forestall",m:"prevent something by taking strategic action in advance"},{w:"gainsay",m:"deny or refute an assertion or argument"},{w:"galvanize",m:"inspire or stir up to action or heightened activity"},{w:"indiscriminate",m:"lacking selectivity or judgment, often with potentially harmful effects"},{w:"innocuous",m:"harmless, having no ill effect"},{w:"momentary",m:"lasting for a brief moment or interval"},{w:"mundane",m:"commonplace or ordinary, lacking excitement"},{w:"nettlesome",m:"causing irritation or annoyance"},{w:"nullify",m:"to render ineffective, cancel out or invalidate"},{w:"obviate",m:"sidestep or bypass a potential problem or difficulty"},{w:"omnipresent",m:"existing or seeming to exist everywhere at once"},{w:"oust",m:"displace or eject from a position or place"},{w:"palpable",m:"easily perceived or obvious"},{w:"perfidy",m:"act of betrayal or unfaithfulness"},{w:"profuse",m:"abundant, plentiful, or occurring in large amounts"},{w:"pugnacious",m:"quick to engage in a conflict or argument; combative"},{w:"sagacious",m:"demonstrating wisdom or sound judgment"},{w:"sanguine",m:"cheerfully optimistic, particularly in a difficult situation"},{w:"scant",m:"hardly sufficient, meager, or minimal"},{w:"skullduggery",m:"sneaky or dishonest actions"},{w:"trivial",m:"of minor significance or value"},{w:"utilitarian",m:"emphasizing practicality and functionality over aesthetics"},{w:"vapid",m:"uninteresting, lacking flavor or spark"},
  ]},
  {name:"Group 9",words:[
    {w:"boorish",m:"rude or unrefined in manners or behavior"},{w:"brook",m:"to tolerate or endure something, especially an annoyance"},{w:"circumspect",m:"cautious or wary, especially when considering potential consequences"},{w:"comity",m:"a courteous harmony or mutual respect toward others"},{w:"commensurate",m:"comparable in size, extent, or degree; proportionate"},{w:"cordial",m:"characterized by warmth and sincerity"},{w:"deleterious",m:"having a harmful effect"},{w:"dichotomy",m:"a split into two contrasting or opposite parts"},{w:"edify",m:"enlighten or uplift through knowledge; teach"},{w:"elicit",m:"extract a reply or action; provoke"},{w:"erudite",m:"possessing great knowledge, typically from study or research"},{w:"fecund",m:"fertile or highly productive"},{w:"feeble",m:"weak; deficient in strength"},{w:"felicitous",m:"1. well-suited or apt\n2. causing delight or satisfaction"},{w:"forbear",m:"refrain or abstain from doing something"},{w:"haphazard",m:"lacking clear planning, order, or direction"},{w:"hodgepodge",m:"a mixture or assortment of different things"},{w:"impede",m:"obstruct or hinder progress"},{w:"impetuous",m:"rash or hasty in action or decision"},{w:"irascible",m:"easily angered or irritated"},{w:"mercenary",m:"motivated primarily by a desire for monetary or material gain"},{w:"meticulous",m:"exhibiting great care to detail"},{w:"mordant",m:"biting or sharply critical in thought or expression"},{w:"outstrip",m:"surpass or do better than"},{w:"precarious",m:"uncertain and likely to cause danger"},{w:"quirky",m:"unusual in an endearing or peculiar way"},{w:"repudiate",m:"reject or refute"},{w:"tact",m:"skill in handling difficult situations without causing offense"},{w:"trifling",m:"lacking significance or importance"},{w:"turbulent",m:"full of conflict or chaos"},
  ]},
  {name:"Group 10",words:[
    {w:"acumen",m:"quickness and keenness in understanding and judgment"},{w:"antithesis",m:"the direct opposite or contrast"},{w:"ascribe",m:"attribute or credit something to a particular cause or source"},{w:"befuddled",m:"confused, bewildered, or perplexed"},{w:"eschew",m:"intentionally avoid or abstain from"},{w:"esoteric",m:"understood by few or a small group of people"},{w:"evasive",m:"indirect or not straightforward; avoiding confrontation"},{w:"exculpate",m:"clear from blame or guilt"},{w:"expedite",m:"accelerate or speed up a process or action"},{w:"fastidious",m:"showing great care and attention to detail; hard to please"},{w:"feign",m:"pretend or simulate"},{w:"furtive",m:"sneaky or secretive, especially due to guilt"},{w:"hamper",m:"obstruct or hinder progress"},{w:"indispensable",m:"completely necessary; essential"},{w:"lament",m:"express deep sorrow or regret"},{w:"myopic",m:"short-sighted; lacking creativity"},{w:"nonchalant",m:"appearing casually calm or indifferent"},{w:"partial",m:"prejudiced or biased toward one side"},{w:"pensive",m:"deep in thought"},{w:"portend",m:"indicate or warn that something, often unpleasant, is going to happen"},{w:"provincial",m:"narrow in perspective; not sophisticated"},{w:"rudimentary",m:"basic or elementary; in the earliest stages of development"},{w:"salutary",m:"beneficial, especially in promoting health or well-being"},{w:"sever",m:"cut off or put an end to"},{w:"slight",m:"treat with disrespect or neglect; insult"},{w:"somnolent",m:"sleepy or drowsy"},{w:"stoic",m:"unaffected by pain or distress; showing no emotion"},{w:"supersede",m:"replace or take the place of"},{w:"tout",m:"promote or praise energetically"},{w:"wane",m:"decrease in power, size, or intensity"},
  ]},
  {name:"Group 11",words:[
    {w:"abhor",m:"detest or regard with deep hatred"},{w:"boisterous",m:"energetic, noisy, and lively"},{w:"chivalrous",m:"honorable and polite"},{w:"churlish",m:"rude or lacking good manners"},{w:"clandestine",m:"secretive; avoiding attention"},{w:"complacent",m:"smugly self-satisfied, often without awareness of potential dangers"},{w:"cumbersome",m:"large, heavy, slow or complicated"},{w:"debilitating",m:"weakening or impairing strength"},{w:"deliberate",m:"1. think over or discuss carefully\n2. intentional"},{w:"droll",m:"amusing in a quirky or unusual way"},{w:"eccentric",m:"deviating from conventional behavior; quirky"},{w:"fractious",m:"quarrelsome and irritable; unruly"},{w:"limpid",m:"clear, transparent, or easy to understand"},{w:"mawkish",m:"overly sentimental in a way that seems exaggerated or insincere"},{w:"obeisance",m:"reverence for an individual"},{w:"ostentatious",m:"showy or designed to impress"},{w:"panacea",m:"a perfect cure for something"},{w:"perfunctory",m:"done without enthusiasm or effort"},{w:"perilous",m:"risky and hazardous"},{w:"pervasive",m:"spreading quickly and in great numbers"},{w:"preclude",m:"prevent something from occurring"},{w:"predilection",m:"preference or bias towards something"},{w:"rapacious",m:"very greedy"},{w:"relish",m:"take great pleasure or delight in"},{w:"satirical",m:"using humor or irony to criticize or mock"},{w:"sham",m:"fake; not genuine"},{w:"skirt",m:"go around or avoid something, especially an issue or obstacle"},{w:"sluggish",m:"lacking energy; slow and listless"},{w:"spartan",m:"marked by simplicity, frugality, and avoidance of luxury"},{w:"truculent",m:"aggressively combative or confrontational"},
  ]},
  {name:"Group 12",words:[
    {w:"acrimonious",m:"bitter and sharp in language or tone"},{w:"belligerent",m:"argumentative, threatening, or aggressive"},{w:"beneficent",m:"kind and charitable, producing good results or benefits"},{w:"canny",m:"shrewd and cautious"},{w:"cavalier",m:"exhibiting an overly casual attitude; unconcerned"},{w:"distressed",m:"experiencing nervousness, irritation, or sadness"},{w:"dwindling",m:"decreasing steadily in size or quantity"},{w:"eclipse",m:"overshadow or surpass"},{w:"encyclopedic",m:"thorough; comprehensive in scope"},{w:"exacerbate",m:"make a situation or condition worse"},{w:"exasperated",m:"severely irritated or angry"},{w:"fungible",m:"interchangeable for another item of a similar type"},{w:"hackneyed",m:"lacking creativity; derivative and overused"},{w:"incongruous",m:"out of place; lacking harmony"},{w:"interchangeable",m:"capable of being used in place of each other"},{w:"laconic",m:"economical with words; quiet and reserved"},{w:"lucrative",m:"producing a significant amount of money"},{w:"magisterial",m:"1. possessing great authority\n2. exercising authority in an excessive manner"},{w:"onerous",m:"involving a heavy burden; challenging or difficult"},{w:"opprobrium",m:"severe criticism or public shame"},{w:"parsimonious",m:"extremely frugal or stingy"},{w:"peripheral",m:"of marginal importance; minor"},{w:"provocative",m:"causing outrage or irritation, often intentionally"},{w:"renounce",m:"reject or give up"},{w:"tempestuous",m:"1. (of emotions or actions) unrestrained and turbulent\n2. (of weather) extremely stormy"},{w:"tenable",m:"(of an idea or method) justifiable and rational"},{w:"transgression",m:"a violation of a law, rule, or social norm"},{w:"urbane",m:"refined, sophisticated, and courteous"},{w:"verisimilitude",m:"appearance or semblance of truth or reality; believability"},{w:"vitiate",m:"impair or corrupt the quality of something"},
  ]},
  {name:"Group 13",words:[
    {w:"affinity",m:"1. a natural liking or connection to a person, thing, or idea\n2. a similarity between two things"},{w:"altruistic",m:"showing generosity and concern for the welfare of others"},{w:"baroque",m:"overly detailed or ornamental"},{w:"byzantine",m:"overly complex or intricate"},{w:"compromise",m:"weaken or diminish in quality, character, or value"},{w:"conciliatory",m:"intended to appease or calm someone down"},{w:"countenance",m:"1. accept or permit\n2. the look of a person's face or expression"},{w:"covert",m:"hidden or concealed; not openly practiced"},{w:"credible",m:"able to be trusted; persuasive"},{w:"diffuse",m:"1. spread or disperse widely\n2. scattered over a large area"},{w:"documentary",m:"based on or reproducing real events or facts"},{w:"exhaustive",m:"thorough and comprehensive"},{w:"exhilarating",m:"intensely exciting"},{w:"extraneous",m:"lacking relevance; unnecessary"},{w:"fervor",m:"intense enthusiasm toward something"},{w:"futile",m:"incapable of resulting in anything worthwhile"},{w:"illusory",m:"unreal or based on illusion"},{w:"invidious",m:"1. likely to cause resentment or envy\n2. unfair; prejudiced against someone or something"},{w:"lethargic",m:"sluggish; tired"},{w:"metaphorical",m:"symbolic rather than literal"},{w:"mimic",m:"to imitate or copy someone or something"},{w:"numinous",m:"having a spiritual or divine quality"},{w:"obscure",m:"1. not clearly expressed or understood\n2. making something unclear and vague"},{w:"overt",m:"open and observable; not hidden or secret"},{w:"pellucid",m:"1. transparently clear in meaning or style\n2. (of a body of water) transparent and clear"},{w:"perpetuate",m:"make (something) continue for an indefinite time"},{w:"rational",m:"based on clear thought or reason"},{w:"scathing",m:"harshly or bitterly critical; vitriolic"},{w:"subtle",m:"delicate or slight; not obvious"},{w:"superficial",m:"1. existing, occurring, or located on the surface\n2. not profound or thorough"},
  ]},
  {name:"Group 14",words:[
    {w:"acquiesce",m:"agree or consent quietly without objection"},{w:"adroit",m:"deft, dexterous, or skillful"},{w:"amend",m:"make changes to a document, law, or statement, usually to improve it"},{w:"animus",m:"strong dislike or enmity; hostile attitude"},{w:"apologist",m:"a person who defends or supports something that is being criticized"},{w:"astringent",m:"sharp or harsh in demeanor or style"},{w:"collaborate",m:"1. work together on a project\n2. cooperate deviously with an enemy"},{w:"competent",m:"having sufficient skill, knowledge, ability, or qualifications"},{w:"correlate",m:"show a mutual relationship or connection between two or more things"},{w:"deride",m:"ridicule or mock"},{w:"dictate",m:"give orders or commands"},{w:"discreet",m:"respectful of privacy or secrecy; inconspicuous"},{w:"divorced",m:"separate from something that was previously connected"},{w:"elitist",m:"1. a person who believes in the rule of an elite or privileged group\n2. believing oneself or a group to be superior to others"},{w:"exacting",m:"requiring a lot of care, effort, or attention"},{w:"flummoxed",m:"completely unable to understand; bewildered"},{w:"fruitful",m:"producing good or abundant results"},{w:"inborn",m:"present from birth; innate"},{w:"polymath",m:"a person with extraordinarily broad and comprehensive knowledge"},{w:"reticent",m:"keeping one's thoughts and opinions to oneself; reserved or restrained"},{w:"stringent",m:"strict or severe; tight"},{w:"subservient",m:"1. obedient to an authority or other people\n2. less important; inferior to"},{w:"surreptitious",m:"done secretly or stealthily"},{w:"tantalizing",m:"arousing desire or interest without fulfillment"},{w:"tantamount",m:"equivalent in effect or value"},{w:"torpor",m:"a state of apathy or lethargy"},{w:"trenchant",m:"keen and biting; vigorously articulate"},{w:"umbrage",m:"a feeling of anger or annoyance caused by something offensive"},{w:"versatile",m:"having varied uses or many functions; capable of doing many things"},{w:"wayward",m:"obstinate, contrary and unpredictable"},
  ]},
  {name:"Group 15",words:[
    {w:"alienate",m:"make someone feel isolated and estranged"},{w:"apathy",m:"lack of interest or enthusiasm towards something"},{w:"apropos",m:"appropriate or relevant to the situation"},{w:"apt",m:"1. suitable or appropriate\n2. having a tendency toward something\n3. quick to learn"},{w:"cloak",m:"conceal or disguise"},{w:"consensus",m:"general agreement among the members of a group"},{w:"distort",m:"give a false or misleading account of"},{w:"divergent",m:"growing further apart; disagreeing"},{w:"elated",m:"very happy or proud"},{w:"enchant",m:"capture the attention or to charm"},{w:"entrenched",m:"firmly ingrained and unlikely to change"},{w:"exotic",m:"foreign, especially in an exciting way"},{w:"exploitative",m:"taking unfair advantage of a person, group, or situation"},{w:"foreseeable",m:"able to be predicted or expected"},{w:"forsake",m:"abandon or give up"},{w:"gratify",m:"please or satisfy; make content"},{w:"heed",m:"mind or regard with care; pay attention"},{w:"judicious",m:"having, characterized by, or done with good judgment or sound thinking"},{w:"lucid",m:"clear and easy to understand"},{w:"pertinent",m:"important with regard to (a subject or matter); relevant"},{w:"propriety",m:"conformity to established standards of good or proper behavior"},{w:"scintillating",m:"brilliantly or impressively clever, exciting, amusing or witty"},{w:"sensational",m:"exaggerated for effect, often sacrificing accuracy"},{w:"sophisticated",m:"1. experienced, worldly, or cultured\n2. advanced or intricate, often in tech"},{w:"strife",m:"conflict or struggle"},{w:"understated",m:"expressed in a subtle, restrained, or low-key manner"},{w:"unscrupulous",m:"without moral principles"},{w:"veracity",m:"conformity to truth or accuracy"},{w:"virulent",m:"extremely hostile or malicious; intensely acrimonious"},{w:"volatile",m:"likely to change unpredictably and quickly (usually for the worse)"},
  ]},
  {name:"Group 16",words:[
    {w:"antedate",m:"occur before (something) in time"},{w:"banish",m:"expel from a place, especially as punishment; get rid of"},{w:"bridle",m:"control or restrain"},{w:"comply",m:"obey someone's rules or wishes; meet certain standards"},{w:"crestfallen",m:"disappointed, dispirited, or depressed"},{w:"curtail",m:"restrict or limit; decrease in quantity"},{w:"elucidate",m:"make clear; clarify or shed light on"},{w:"evade",m:"1. avoid or escape from, typically in a cunning way\n2. deflect from giving a clear answer"},{w:"feckless",m:"without skill, ineffective, incompetent"},{w:"fester",m:"(of a negative feeling or a problem) worsen, especially due to lack of attention"},{w:"iconoclastic",m:"challenging or overthrowing tradition or established beliefs"},{w:"immure",m:"imprison or isolate"},{w:"improvise",m:"create something spontaneously without preparation"},{w:"inhibit",m:"make difficult to accomplish; act as an obstacle"},{w:"inscrutable",m:"not easily understood; mysterious"},{w:"lionize",m:"treat someone as a celebrity or hero"},{w:"monotonous",m:"lacking in variety, repetitively dull"},{w:"peculiar",m:"strange or unusual; specific to a particular place or group"},{w:"premeditate",m:"consider or plan beforehand"},{w:"profligate",m:"inclined to waste resources or behave extravagantly"},{w:"reconcile",m:"bring back or return to harmony; restore a relationship"},{w:"refine",m:"1. purify; bring to a pure state\n2. improve in accuracy or excellence"},{w:"relinquish",m:"give up or release a claim, right, or possession"},{w:"ruminate",m:"meditate or reflect; ponder over"},{w:"skittish",m:"easily scared or startled; timid; difficult to control"},{w:"superfluous",m:"more than is necessary; excessive"},{w:"synoptic",m:"providing a general overview or summary"},{w:"thorough",m:"careful and complete concerning every detail"},{w:"visionary",m:"showing foresight or imagination"},{w:"vociferous",m:"expressing opinions or feelings loudly and forcefully"},
  ]},
  {name:"Group 17",words:[
    {w:"acclaim",m:"1. praise with great approval\n2. enthusiastic approval"},{w:"ascertain",m:"find out or learn with certainty"},{w:"assertive",m:"confident and direct in claiming one's rights or expressing ideas"},{w:"bogus",m:"fake or fraudulent"},{w:"cataclysmic",m:"causing great disruption or upheaval"},{w:"circumscribe",m:"limit or restrict something narrowly"},{w:"complementary",m:"enhancing or perfecting when combined with something else"},{w:"contentious",m:"causing or likely to provoke disagreement"},{w:"disingenuous",m:"pretending to be sincere or straightforward"},{w:"divulge",m:"disclose or reveal information"},{w:"dogmatic",m:"insisting on one's ideas without being open to others'"},{w:"fallacious",m:"false or mistaken"},{w:"foolhardy",m:"recklessly daring; careless"},{w:"hinder",m:"obstruct or delay progress"},{w:"impair",m:"weaken or affect negatively"},{w:"impugn",m:"challenge the truth or honesty of something"},{w:"incessant",m:"constant or unending (of something bad or unpleasant)"},{w:"inclined",m:"feeling a tendency or preference towards"},{w:"inveterate",m:"deep-rooted or long-established"},{w:"miserly",m:"reluctant to spend or share; greedy"},{w:"patent",m:"clear or obvious"},{w:"petulant",m:"irritable or impatient, especially over minor issues"},{w:"pithy",m:"expressing ideas in a concise, meaningful manner"},{w:"pliant",m:"flexible or easily influenced"},{w:"sanctimonious",m:"giving the impression that one is morally superior"},{w:"sound",m:"based on reason, sense, or judgment"},{w:"tarnish",m:"compromise, damage, or sully"},{w:"tepid",m:"exhibiting little passion or eagerness; lukewarm"},{w:"upbraid",m:"criticize or scold severely"},{w:"vexation",m:"the state of being irritated or incensed"},
  ]},
  {name:"Group 18",words:[
    {w:"abet",m:"assist or encourage, usually in wrongdoing"},{w:"accessible",m:"clear; capable of being understood"},{w:"acquisitive",m:"eager to acquire and possess things"},{w:"amalgamate",m:"merge or combine two or more things"},{w:"attenuate",m:"weaken or lessen in force or thickness"},{w:"augment",m:"increase or make larger"},{w:"aversion",m:"an intense or definite dislike"},{w:"blithe",m:"showing indifference"},{w:"contempt",m:"the feeling or attitude of regarding someone or something as inferior"},{w:"dawdle",m:"move slowly and without purpose"},{w:"deflect",m:"change the direction or course of something; make someone deviate"},{w:"discount",m:"regard something as being unimportant or incorrect"},{w:"dissident",m:"one who disagrees or opposes authority"},{w:"efficacious",m:"producing the desired effect; successful"},{w:"equitable",m:"characterized by fairness and justice"},{w:"erratic",m:"unpredictable and inconsistent"},{w:"industrious",m:"hard-working and persistent"},{w:"inform",m:"give form or character to something or someone"},{w:"irksome",m:"causing annoyance or irritation"},{w:"manacle",m:"(used figuratively) restrain, limit, or secure something"},{w:"modest",m:"1. unassuming about one's abilities or not boastful\n2. limited in quantity or amount"},{w:"noxious",m:"harmful; injurious"},{w:"pernicious",m:"causing harm in a subtle way; deadly"},{w:"predicament",m:"a challenging or awkward situation"},{w:"proficient",m:"good at something; skilled"},{w:"prolix",m:"using an excessive amount of words; long-winded"},{w:"scorn",m:"1. express strong disapproval or contempt for\n2. a feeling or display of contempt or disdain"},{w:"subordinate",m:"1. having a lower rank; less important\n2. treat as of less value or importance"},{w:"unseemly",m:"not proper or in good taste"},{w:"veritable",m:"(used to emphasize something) true; genuine"},
  ]},
  {name:"Group 19",words:[
    {w:"acolyte",m:"a person who assists or follows another person or cause"},{w:"anoint",m:"appoint or designate for a particular role or purpose"},{w:"base",m:"lacking principles; morally wrong"},{w:"coercion",m:"the act of persuading or forcing someone to do something using threats or violence"},{w:"coin",m:"invent or devise a new word or phrase"},{w:"cunning",m:"showing skill in achieving one's ends through deceit or evasion"},{w:"discomfit",m:"make someone feel uneasy or embarrassed"},{w:"dissent",m:"1. hold or express an opinion that varies from a prevailing or official position\n2. difference of opinion or disagreement"},{w:"distill",m:"extract the most important information from something"},{w:"dubious",m:"1. (of a person's feeling) suspicious of\n2. (of a thing or concept) not to be relied upon"},{w:"ebullient",m:"cheerful and joyful"},{w:"facetious",m:"treating serious issues with inappropriate humor"},{w:"fallible",m:"capable of making an error"},{w:"florid",m:"excessively complicated; including too many details"},{w:"gawky",m:"awkward or clumsy"},{w:"inveigle",m:"persuade someone to do something using flattery or deception"},{w:"jettison",m:"abandon or discard (something that is no longer needed)"},{w:"mendacity",m:"dishonesty"},{w:"munificent",m:"more generous than is usual or necessary"},{w:"naive",m:"showing a lack of experience or judgment"},{w:"noble",m:"having high moral qualities or principles"},{w:"parochial",m:"having a limited perspective; narrow-minded"},{w:"pedestrian",m:"lacking imagination or excitement; ordinary"},{w:"prevaricate",m:"evade or dodge the truth by being evasive"},{w:"prime",m:"1. prepare something for use or action\n2. of primary importance; major"},{w:"radical",m:"1. far-reaching; major\n2. a person advocating thorough or complete social or political reform"},{w:"recrudescent",m:"breaking out again; reviving"},{w:"temporal",m:"1. relating to time\n2. relating to worldly rather than spiritual matters"},{w:"transitory",m:"not permanent; temporary"},{w:"viable",m:"capable of working or succeeding; feasible"},
  ]},
  {name:"Group 20",words:[
    {w:"abreast",m:"informed or familiar about a particular topic"},{w:"confound",m:"perplex or puzzle someone"},{w:"digression",m:"an aside that strays from the main subject"},{w:"discrepancy",m:"a difference between two or more things that should be the same"},{w:"duplicitous",m:"deceptive in speech or action"},{w:"expedient",m:"affording short-term benefits, often at the expense of the long-term"},{w:"fabricate",m:"invent in order to deceive"},{w:"glum",m:"appearing or feeling sad or despondent"},{w:"harbinger",m:"a person or thing that foreshadows or foretells the coming of someone or something"},{w:"intrinsic",m:"belonging to the essential nature of a thing"},{w:"largesse",m:"the trait of being willing to donate money or resources; generosity"},{w:"libertine",m:"someone loose in morals; a pleasure-seeker"},{w:"malfeasance",m:"wrongdoing or misconduct, especially by a public official"},{w:"manifest",m:"1. be revealed; show plainly\n2. obvious; not obscure or hidden"},{w:"minute",m:"very small"},{w:"modish",m:"in the current fashion or style"},{w:"nascent",m:"in the process of emerging, being born, or starting to develop"},{w:"perennial",m:"lasting or remaining active throughout the year, or all the time"},{w:"pious",m:"1. deeply devout; exhibiting religious devotion\n2. making a show of one's own virtue"},{w:"providential",m:"happening at a fortunate or opportune time"},{w:"prowess",m:"skillfulness and dexterity"},{w:"schism",m:"a split or separation within a group or organization"},{w:"slander",m:"baselessly speak ill of someone or something"},{w:"stalwart",m:"determined; staunch"},{w:"supplicate",m:"make a humble request; beg or beseech"},{w:"terse",m:"brief and to the point"},{w:"tirade",m:"a prolonged, vehement speech or criticism"},{w:"universal",m:"applicable or common to all purposes, conditions, or situations"},{w:"vanquish",m:"defeat completely"},{w:"woeful",m:"1. very sad\n2. very bad; awful"},
  ]},
  {name:"Group 21",words:[
    {w:"abject",m:"most unfortunate or miserable"},
    {w:"amicable",m:"characterized by goodwill and friendliness"},
    {w:"animosity",m:"strong hostility or resentment"},
    {w:"aver",m:"assert with confidence"},
    {w:"barrage",m:"an overwhelming concentration of something, typically hostile words"},
    {w:"cathartic",m:"that which releases emotional tension"},
    {w:"decipher",m:"decode or determine the meaning of something that is difficult to understand"},
    {w:"delusion",m:"a belief that is not true or is founded on false premises"},
    {w:"dispense",m:"1. issue, distribute, or give out\n2. do without or get rid of"},
    {w:"eloquent",m:"fluently persuasive and articulate"},
    {w:"enthrall",m:"captivate or charm"},
    {w:"eradicate",m:"eliminate or destroy completely"},
    {w:"fledgling",m:"untried or inexperienced; emergent or rising"},
    {w:"fortitude",m:"mental strength and courage that allows one to face challenges"},
    {w:"fortuitous",m:"happening by chance, especially a lucky chance"},
    {w:"goad",m:"incite or provoke"},
    {w:"imminent",m:"about to happen soon"},
    {w:"incontrovertible",m:"undeniable; impossible to dispute"},
    {w:"itinerant",m:"habitually traveling from place to place"},
    {w:"magnanimous",m:"noble and generous in spirit"},
    {w:"meritorious",m:"deserving of merit or commendation; deserving reward"},
    {w:"mutiny",m:"a rebellion against authority; violent strife"},
    {w:"paradoxical",m:"seemingly contradictory but nonetheless possibly true"},
    {w:"perseverance",m:"persistence in an action or belief despite difficulties or opposition"},
    {w:"render",m:"make or provide"},
    {w:"repertoire",m:"the collection of skills, methods, or performances that one is ready to use"},
    {w:"resilient",m:"able to recover quickly from difficult situations"},
    {w:"resolute",m:"firmly determined or unwavering"},
    {w:"supple",m:"pliant, flexible, or easy to bend"},
    {w:"valor",m:"strength of mind in the face of danger; bravery"},
  ]},
  // Group 22
  {name:"Group 22",words:[
    {w:"arresting",m:"attracting attention or striking"},
    {w:"chastise",m:"criticize harshly"},
    {w:"cumbersome",m:"large, heavy, slow or complicated"},
    {w:"economy",m:"frugal or effective use of resources or words"},
    {w:"elementary",m:"basic and fundamental"},
    {w:"embellish",m:"1. make more beautiful or attractive by adding ornamentation\n2. making something sound or look better than it is in reality"},
    {w:"euphoric",m:"intensely happy or excited"},
    {w:"exonerate",m:"clear from accusation or blame"},
    {w:"extrapolate",m:"predict by projecting past experience or data"},
    {w:"falter",m:"weaken or waver, especially in the face of difficulty; hesitate"},
    {w:"fervent",m:"exhibiting enthusiasm and zeal"},
    {w:"foment",m:"incite or cause troublesome acts; encourage"},
    {w:"gaffe",m:"a foolish and embarrassing error, especially a public one"},
    {w:"heterodox",m:"deviating from what is acceptable or commonly believed"},
    {w:"histrionic",m:"overly dramatic or emotional"},
    {w:"implicit",m:"suggested though not directly expressed"},
    {w:"inviolate",m:"not violated; free from hurt of any kind"},
    {w:"liability",m:"something or someone that creates a risk or disadvantage"},
    {w:"obstinate",m:"stubbornly adhering to an opinion, purpose, or cause"},
    {w:"painstaking",m:"done with careful attention to detail"},
    {w:"phlegmatic",m:"calm and unemotional disposition"},
    {w:"prodigious",m:"impressively large in size or extent"},
    {w:"propensity",m:"an inclination or tendency to behave or think in a certain way"},
    {w:"qualm",m:"a feeling of apprehension or doubt"},
    {w:"renege",m:"fail to fulfill a promise or obligation"},
    {w:"stint",m:"supply an insufficient amount of something"},
    {w:"temper",m:"to moderate or neutralize something"},
    {w:"tentative",m:"uncertain; subject to future change"},
    {w:"unprecedented",m:"never before seen, done or experienced"},
    {w:"vivacious",m:"lively and animated in spirit"},
  ]},
  // Group 23
  {name:"Group 23",words:[
    {w:"allusive",m:"making indirect references or hints"},
    {w:"astute",m:"having the ability to notice and understand things clearly"},
    {w:"commence",m:"begin or start"},
    {w:"convalescent",m:"recovering from illness or treatment"},
    {w:"curb",m:"restrict or control"},
    {w:"decry",m:"publicly criticize or condemn"},
    {w:"duress",m:"compulsion by threat or force"},
    {w:"evoke",m:"bring to mind or produce a reaction"},
    {w:"fawn",m:"display exaggerated affection or flattery, usually to gain favor"},
    {w:"fret",m:"be constantly or visibly worried or anxious"},
    {w:"glib",m:"fluent but insincere and shallow"},
    {w:"headstrong",m:"determined to have one's own way; stubborn"},
    {w:"intermittent",m:"occurring at irregular intervals; not continuous"},
    {w:"ire",m:"anger or wrath"},
    {w:"languid",m:"1. casual and relaxed; slow\n2. weak from disease or weariness"},
    {w:"lull",m:"1. weak from disease or weariness\n2. a brief pause or delay in activity"},
    {w:"mettlesome",m:"spirited and brave"},
    {w:"mollify",m:"calm or reduce the anger or anxiety of someone"},
    {w:"neutralize",m:"counteract or cancel the effect of something"},
    {w:"nonplussed",m:"unsure about what to say or do; confused"},
    {w:"precipitous",m:"1. extremely steep\n2. (of an action) done quickly and without care"},
    {w:"pretentious",m:"attempting to impress by affecting greater importance than is actually possessed"},
    {w:"profound",m:"(of a person or idea) having deep insight or knowledge"},
    {w:"propagate",m:"spread or promote widely"},
    {w:"recourse",m:"a source of help or strategies used in a difficult situation"},
    {w:"refute",m:"prove to be wrong or false"},
    {w:"regress",m:"prove to be wrong or false"},
    {w:"repercussion",m:"an unintended consequence of an event or action"},
    {w:"replenish",m:"fill something up again"},
    {w:"vigilant",m:"keeping careful watch for dangers or difficulties"},
  ]},
  // Group 24
  {name:"Group 24",words:[
    {w:"assail",m:"attack physically or verbally"},
    {w:"benevolent",m:"showing kindness or goodwill"},
    {w:"berate",m:"scold or criticize harshly"},
    {w:"buoyant",m:"lighthearted and lively; having a cheerful attitude"},
    {w:"buttress",m:"support or reinforce"},
    {w:"condone",m:"forgive, excuse, or overlook"},
    {w:"contravene",m:"go against or violate a rule, law, or convention"},
    {w:"denounce",m:"criticize or speak out against"},
    {w:"despotic",m:"of a ruler with absolute power; tyrannical"},
    {w:"deviate",m:"go off course from; stray from some norm"},
    {w:"disinterested",m:"unbiased"},
    {w:"escalate",m:"increase or intensify"},
    {w:"exorcize",m:"drive out (such as an evil spirit or some other thing) from a person, place, or thing"},
    {w:"finicky",m:"fussy or hard to please"},
    {w:"foil",m:"prevent (something) from being accomplished"},
    {w:"intertwined",m:"twisted or linked closely together"},
    {w:"inundate",m:"flood or overwhelm"},
    {w:"ironclad",m:"unbreakable or extremely strong"},
    {w:"jeopardize",m:"put in danger; threaten"},
    {w:"mercurial",m:"having a volatile character; fickle"},
    {w:"oblivious",m:"not aware of or not noticing something"},
    {w:"perpetrate",m:"commit something (often a crime); carry out"},
    {w:"plaintive",m:"expressing sorrow or melancholy"},
    {w:"poignant",m:"emotionally moving"},
    {w:"quiescent",m:"being at rest; inactive or quiet"},
    {w:"reiterate",m:"say or do again, multiple times"},
    {w:"subside",m:"become lower; decrease; become less intense"},
    {w:"subsume",m:"include or contain something else"},
    {w:"surmount",m:"overcome something, typically a challenge"},
    {w:"tangential",m:"only superficially relevant"},
  ]},
  // Group 25
  {name:"Group 25",words:[
    {w:"adept",m:"well skilled; completely versed"},
    {w:"adverse",m:"unfavorable or opposed to one's interests or desire"},
    {w:"appropriate",m:"1. take something forcefully, usually without the owner's agreement\n2. suitable or fit for a situation"},
    {w:"archetype",m:"a typical example of something"},
    {w:"articulate",m:"able to express ideas or feelings fluently and clearly"},
    {w:"auspicious",m:"favorable and indicative of good luck"},
    {w:"bereft",m:"lacking or mourning something or someone"},
    {w:"captious",m:"fault-finding (especially petty ones)"},
    {w:"conclusive",m:"without doubt"},
    {w:"conspire",m:"secretly work together for something bad"},
    {w:"delineate",m:"describe or depict precisely; outline"},
    {w:"disentangle",m:"free from entanglement or confusion; make clear"},
    {w:"exhort",m:"strongly persuade, encourage, or urge"},
    {w:"frailty",m:"quality or state of being weak; weakness"},
    {w:"grievance",m:"an issue or problem"},
    {w:"harangue",m:"a long angry rant"},
    {w:"ploy",m:"a strategy or tactic used to gain an advantage"},
    {w:"poise",m:"a state of balance, equilibrium or stability"},
    {w:"pomposity",m:"the quality of being pompous; self-importance"},
    {w:"proxy",m:"a substitute (usually for a person) that is compatible"},
    {w:"relent",m:"1. abandon a harsh intention or attitude by giving in\n2. reduce in intensity"},
    {w:"rhetoric",m:"persuasive speech or writing"},
    {w:"rigor",m:"thoroughness and strictness"},
    {w:"sparse",m:"not dense and meager; having widely spaced intervals"},
    {w:"steadfast",m:"fixed or unchanging; steady"},
    {w:"suspect",m:"viewed with suspicion"},
    {w:"tedious",m:"boring and slow, without variety"},
    {w:"vitality",m:"strength and energy"},
    {w:"whimsical",m:"1. playful or silly\n2. unpredictable"},
    {w:"yield",m:"1. produce or generate a result, product, or amount\n2. give up or surrender"},
  ]},
  // Group 26
  {name:"Group 26",words:[
    {w:"apprehension",m:"fearful anticipation or worry"},
    {w:"ardent",m:"full of passion and enthusiasm"},
    {w:"axiomatic",m:"evident without proof or argument; self-evident"},
    {w:"cease",m:"to stop happening or continuing"},
    {w:"conducive",m:"helping to bring about or promote a particular outcome"},
    {w:"corporeal",m:"associated with the physical body, not the spirit or soul"},
    {w:"doctrinaire",m:"rigidly sticking to theoretical ideas, rather than being practical"},
    {w:"eclectic",m:"derived from a diverse range of sources or styles"},
    {w:"equanimity",m:"evenness of mind, especially under stress"},
    {w:"exorbitant",m:"going far beyond what is fair, reasonable, or expected"},
    {w:"fickle",m:"quick to change one's opinion or allegiance"},
    {w:"figurative",m:"symbolic rather than literal"},
    {w:"flustered",m:"agitated or confused"},
    {w:"gullible",m:"easily deceived or tricked"},
    {w:"idiosyncratic",m:"peculiar to an individual or group; unique"},
    {w:"incidental",m:"secondary or non-essential part of something"},
    {w:"ingrained",m:"deeply rooted or established"},
    {w:"insolent",m:"boldly disrespectful or rude"},
    {w:"lampoon",m:"satirize or poke fun at"},
    {w:"lavish",m:"1. extravagant, luxurious, or abundant\n2. give out extremely generously"},
    {w:"lugubrious",m:"appearing sad or gloomy"},
    {w:"macabre",m:"having a quality of horror or grimness"},
    {w:"morose",m:"sullen and gloomy"},
    {w:"officious",m:"overbearingly assertive, especially in offering unwanted advice or help"},
    {w:"ramification",m:"a consequence or resulting action of a previous event"},
    {w:"serene",m:"calm, quiet, and peaceful"},
    {w:"supplant",m:"replace or take the place of"},
    {w:"tacit",m:"implied without being directly expressed"},
    {w:"transcend",m:"pass beyond the limits of something"},
    {w:"treatise",m:"a written work that provides a systematic and detailed examination of a subject"},
  ]},
  // Group 27
  {name:"Group 27",words:[
    {w:"antagonize",m:"act in opposition to or provoke hostility from"},
    {w:"barren",m:"incapable of producing offspring or fruit; unproductive"},
    {w:"bombastic",m:"high-sounding but with little meaning; overfilled"},
    {w:"cajole",m:"persuade through flattery or gentle urging"},
    {w:"chary",m:"being wary or cautiously reluctant"},
    {w:"curmudgeon",m:"an ill-tempered person full of stubborn opinions"},
    {w:"dirge",m:"a mournful song, especially for a funeral or mourning"},
    {w:"estimable",m:"deserving of respect or admiration"},
    {w:"euphemism",m:"a mild or polite term used to substitute a harsh or offensive one"},
    {w:"excoriate",m:"criticize strongly; condemn"},
    {w:"exigent",m:"requiring immediate action or aid; urgent"},
    {w:"haughty",m:"exhibiting arrogant and condescending pride"},
    {w:"heady",m:"intoxicating or stupefying"},
    {w:"imperturbable",m:"not easily annoyed, upset, or excited; calm"},
    {w:"implacable",m:"not able to be appeased"},
    {w:"lambaste",m:"scold, reprimand, or criticize harshly"},
    {w:"miscreant",m:"one who has behaved badly, or illegally"},
    {w:"peccadillo",m:"a small flaw or sin"},
    {w:"philistine",m:"a person who is ignorant or uneducated"},
    {w:"relegate",m:"consign to a place or position of insignificance, lower rank, or inferiority"},
    {w:"repugnant",m:"offensive or repulsive; arousing disgust or aversion"},
    {w:"sentimental",m:"characterized by feelings or nostalgia"},
    {w:"squander",m:"spend profusely or recklessly"},
    {w:"swindle",m:"obtain money by fraudulent or deceitful methods"},
    {w:"tangible",m:"capable of being touched; real or actual"},
    {w:"turpitude",m:"wickedness or moral corruption"},
    {w:"unalloyed",m:"pure; without any adulterations"},
    {w:"undercut",m:"undermine; weaken"},
    {w:"wheedle",m:"attempt to persuade by flattery"},
    {w:"xenophobic",m:"showing a fear or hatred of strangers or foreigners"},
  ]},
  // Group 28
  {name:"Group 28",words:[
    {w:"abeyance",m:"suspension; temporary suppression"},
    {w:"abstract",m:"1. present in thought or concept but lacking physical existence\n2. removing something or considering something separate"},
    {w:"affront",m:"an open or intentional offense, slight, or insult"},
    {w:"agitate",m:"make someone disturbed or excited"},
    {w:"august",m:"noble and respected; awe-inspiring"},
    {w:"burnish",m:"improve or enhance"},
    {w:"coy",m:"being bashful, shy, or retiring"},
    {w:"deprecate",m:"belittle or express disapproval of"},
    {w:"disdain",m:"the state of being despised; shame"},
    {w:"disperse",m:"scatter in different directions"},
    {w:"distend",m:"extend or expand, as from internal pressure; swell"},
    {w:"endemic",m:"regularly found and restricted to a particular area or population"},
    {w:"enmity",m:"the quality of being an enemy; hostility"},
    {w:"gauche",m:"awkward or lacking in social graces"},
    {w:"hysterical",m:"wildly emotional or exaggerated in reaction"},
    {w:"impudent",m:"not showing due respect; bold-faced, impertinent"},
    {w:"inchoate",m:"recently started but not fully formed yet"},
    {w:"penchant",m:"taste, liking, or inclination"},
    {w:"quandary",m:"a dilemma; a difficult decision or situation"},
    {w:"quarantine",m:"place into isolation to prevent the spread of any contagious disease"},
    {w:"quash",m:"void or suppress"},
    {w:"quibble",m:"complain or argue in a trivial or petty manner"},
    {w:"ravage",m:"devastate, destroy, or lay waste to something"},
    {w:"recant",m:"withdraw or repudiate a statement or opinion formerly expressed"},
    {w:"redoubtable",m:"eliciting respect or fear; notably formidable"},
    {w:"retiring",m:"introverted and shy; liking privacy"},
    {w:"shrill",m:"high-pitched and piercing in sound quality"},
    {w:"sophistry",m:"plausible yet fallacious argumentations or reasoning"},
    {w:"substantiate",m:"verify something by supplying evidence"},
    {w:"wily",m:"sly, cunning, full of tricks"},
  ]},
  // Group 29
  {name:"Group 29",words:[
    {w:"abscond",m:"leave hurriedly and secretly, typically to avoid capture"},
    {w:"apogee",m:"the peak or highest point of something"},
    {w:"aspersion",m:"a critical or damaging remark or criticism"},
    {w:"bawdy",m:"humorously dealing with sexual subjects; risqué in a comedic way"},
    {w:"chagrin",m:"a feeling of frustration, annoyance, or anger"},
    {w:"collude",m:"secretly cooperate for deceitful or fraudulent purposes"},
    {w:"commiserate",m:"express sympathy or sorrow with someone who has experienced misfortune"},
    {w:"conflagration",m:"a large, destructive fire"},
    {w:"contretemps",m:"a small disagreement or mishap"},
    {w:"conviction",m:"a strong belief or principle held with confidence"},
    {w:"croon",m:"sing softly, typically in a sentimental manner"},
    {w:"depose",m:"forcibly remove someone from office or power"},
    {w:"detente",m:"a period of improved relations between countries, especially when tensions have been high"},
    {w:"dowdy",m:"lacking style or elegance; out of fashion"},
    {w:"echelon",m:"a level or tier within a system or organization"},
    {w:"ennui",m:"a feeling of boredom and dissatisfaction due to a lack of excitement or interest"},
    {w:"expatiate",m:"talk or write in great detail about a topic"},
    {w:"fraught",m:"filled with tension, stress, or negative emotions"},
    {w:"fulcrum",m:"the main factor or element that plays a pivotal role in a situation"},
    {w:"imbroglio",m:"a complex and confusing situation, often of a messy or controversial nature"},
    {w:"jocund",m:"merry and in high spirits; exhibiting happiness"},
    {w:"languish",m:"become weak or feeble, often from neglect or lack of attention"},
    {w:"nadir",m:"the absolute lowest point or worst moment"},
    {w:"nimble",m:"quick and agile in movement or thinking"},
    {w:"ominous",m:"indicating that something unfavorable is likely to happen"},
    {w:"outlandish",m:"strange, unusual, or bizarre in appearance or style"},
    {w:"propitious",m:"favorable; advantageous"},
    {w:"prurient",m:"displaying or prompting an undue interest in sexual matters"},
    {w:"sadistic",m:"taking pleasure in causing pain or suffering to others"},
    {w:"zenith",m:"the point at which something attains its maximum strength or power"},
  ]},
  // Group 30
  {name:"Group 30",words:[
    {w:"aberrant",m:"deviating from what is normal or expected"},
    {w:"abide",m:"tolerate, follow, or accept"},
    {w:"bravado",m:"a display of boldness or confidence, often feigned"},
    {w:"callow",m:"young and inexperienced; immature"},
    {w:"capitulate",m:"surrender or give up resistance"},
    {w:"cogitate",m:"think deeply; ponder or reflect"},
    {w:"deportment",m:"behavior or manners"},
    {w:"extemporize",m:"improvise, especially in speech or performance"},
    {w:"factious",m:"causing division or disagreement"},
    {w:"fallow",m:"1. (of farmland) not cultivated; barren\n2. (of a period of time) inactive"},
    {w:"feint",m:"a deceptive movement or action"},
    {w:"flagrant",m:"noticeably offensive; blatant"},
    {w:"gratuitous",m:"unwarranted; without justification"},
    {w:"grovel",m:"show submission or fear; beg for favor"},
    {w:"indecorous",m:"not in good taste; inappropriate or unseemly"},
    {w:"intrigue",m:"1. a secret scheme or plot\n2. provoke interest in"},
    {w:"nominal",m:"1. in name only\n2. insubstantial; insignificant"},
    {w:"obdurate",m:"stubborn; unyielding"},
    {w:"obstreperous",m:"noisy, unruly, or hard to control"},
    {w:"odious",m:"highly offensive; repugnant"},
    {w:"plucky",m:"showing courage or determination"},
    {w:"precocious",m:"showing advanced skills or development earlier than usual"},
    {w:"remuneration",m:"payment or compensation for services or work"},
    {w:"slovenly",m:"1. untidy, especially in personal appearance\n2. without care; neglectful"},
    {w:"soliloquy",m:"a speech in a drama where a character talks to themselves, expressing inner thoughts"},
    {w:"spurn",m:"reject or refuse disdainfully"},
    {w:"stolid",m:"not easily moved or emotional"},
    {w:"temerity",m:"reckless boldness or audacity"},
    {w:"tenuous",m:"thin or weak"},
    {w:"verve",m:"energy, enthusiasm, or vigor"},
  ]},
  // Group 31
  {name:"Group 31",words:[
    {w:"abrogate",m:"formally cancel or do away with"},
    {w:"aghast",m:"shocked or horrified; struck with amazement"},
    {w:"apprise",m:"inform, notify, or advise"},
    {w:"beguile",m:"charm or deceive in a captivating way"},
    {w:"boon",m:"a good thing; a blessing or a benefit"},
    {w:"callous",m:"emotionally unfeeling or insensitive"},
    {w:"coddle",m:"pamper or treat with excessive care"},
    {w:"crescendo",m:"the loudest or highest point of something"},
    {w:"extenuating",m:"lessening the seriousness by providing excuses"},
    {w:"frenetic",m:"fast-paced or wildly energetic"},
    {w:"fringe",m:"unconventional, extreme, or marginal"},
    {w:"hapless",m:"unlucky or unfortunate"},
    {w:"immaculate",m:"spotlessly clean or free from errors"},
    {w:"obfuscate",m:"obscure or confuse"},
    {w:"ossify",m:"harden or become unchanging"},
    {w:"pastiche",m:"a work that either imitates the style of multiple other works or combines elements from various works"},
    {w:"perspicacious",m:"keenly perceptive or understanding"},
    {w:"ponderous",m:"heavy or slow-moving, often due to weight; extremely dull"},
    {w:"recluse",m:"a person who lives in self-imposed isolation"},
    {w:"retaliate",m:"take revenge or counteract"},
    {w:"rhapsody",m:"an ecstatic expression of feeling or enthusiasm"},
    {w:"serendipitous",m:"occurring by chance in a fortunate way"},
    {w:"shirk",m:"avoid or neglect a responsibility or duty"},
    {w:"sinecure",m:"a job requiring minimal effort but offering a salary"},
    {w:"sinuous",m:"winding or having many smooth turns"},
    {w:"sordid",m:"involving ignoble actions and motives"},
    {w:"stanch",m:"stop or reduce the flow of"},
    {w:"surfeit",m:"an excessive amount of something"},
    {w:"ulterior",m:"concealed, typically with a hidden motive"},
    {w:"voluble",m:"speaking a lot, with great ease, often about unimportant matters"},
  ]},
  // Group 32
  {name:"Group 32",words:[
    {w:"abstruse",m:"difficult to comprehend or understand"},
    {w:"auxiliary",m:"supplementary or additional, often in support"},
    {w:"caricature",m:"exaggerate features for comedic or satirical effect"},
    {w:"depravity",m:"the state or condition of being depraved or morally corrupted"},
    {w:"dilettante",m:"a person with an amateur interest in the arts or a particular field"},
    {w:"effrontery",m:"insolent or bold behavior"},
    {w:"encroach",m:"intrude or trespass, especially on another's territory or rights"},
    {w:"endow",m:"enrich or furnish with some faculty or quality"},
    {w:"entreat",m:"ask earnestly or anxiously; beg"},
    {w:"gregarious",m:"sociable and enjoying the company of others"},
    {w:"indictment",m:"an official formal accusation for a criminal offense"},
    {w:"indignant",m:"feeling or expressing strong displeasure at something unjust or offensive"},
    {w:"ineluctable",m:"inescapable or inevitable"},
    {w:"inquisitive",m:"curious or eager to acquire knowledge"},
    {w:"latitude",m:"scope to do something; relative freedom from restrictions"},
    {w:"levity",m:"humor or lightness, especially when inappropriate"},
    {w:"malevolent",m:"showing ill will or wishing harm to others"},
    {w:"mediate",m:"intervene between parties to bring about a resolution"},
    {w:"occlude",m:"block or stop up; cover"},
    {w:"pacify",m:"bring peace to or calm someone down"},
    {w:"paragon",m:"a model of excellence or perfection"},
    {w:"patronize",m:"1. treat with an apparent kindness that is condescending\n2. be a regular customer of a store or other establishment"},
    {w:"penurious",m:"extremely poor or stingy"},
    {w:"piquant",m:"stimulating to the senses; engaging; charming"},
    {w:"rampant",m:"unrestrained or unchecked, usually in a negative manner"},
    {w:"remote",m:"not likely to happen"},
    {w:"reprobate",m:"a person who is immoral or who lacks principles"},
    {w:"turbid",m:"1. (of water) muddy or opaque due to suspended particles\n2. unclear; confused; obscure"},
    {w:"turgid",m:"1. swollen or bloated\n2. overly complex and difficult to understand"},
    {w:"vacuous",m:"lacking intelligence or thought"},
  ]},
];

// ── FIREBASE BOOTSTRAP ────────────────────────────────────────────────────────
let db, auth, currentUser, userFeatureFlags;

async function bootstrap() {
  try {
    const res = await fetch('/api/firebase-config');
    if (!res.ok) throw new Error('Could not load app config');
    const firebaseConfig = await res.json();

    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } =
      await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
    const { getFirestore, doc, getDoc, setDoc, collection, getDocs, updateDoc } =
      await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');

    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);

    window._fs = { doc, getDoc, setDoc, collection, getDocs, updateDoc };
    window._auth = { signInWithEmailAndPassword, signOut, onAuthStateChanged };

    setupAuthUI();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        currentUser = user;
        await loadUserAndStart(user);
      } else {
        currentUser = null;
        showScreen('auth');
      }
    });
  } catch (err) {
    console.error('Bootstrap error:', err);
    document.getElementById('app-loading').textContent = 'Failed to load. Please refresh.';
  }
}

// ── AUTH UI ───────────────────────────────────────────────────────────────────
function setupAuthUI() {
  const emailEl = document.getElementById('auth-email');
  const passEl  = document.getElementById('auth-password');
  const btnEl   = document.getElementById('auth-submit');
  const errEl   = document.getElementById('auth-error');
  const loadEl  = document.getElementById('auth-loading');

  async function doSignIn() {
    errEl.textContent = '';
    btnEl.disabled = true;
    loadEl.style.display = 'block';
    try {
      await window._auth.signInWithEmailAndPassword(auth, emailEl.value.trim(), passEl.value);
    } catch (e) {
      errEl.textContent = friendlyAuthError(e.code);
      btnEl.disabled = false;
      loadEl.style.display = 'none';
    }
  }

  btnEl.addEventListener('click', doSignIn);
  passEl.addEventListener('keydown', e => { if (e.key === 'Enter') doSignIn(); });
  document.getElementById('signout-btn').addEventListener('click', () => window._auth.signOut(auth));
  document.getElementById('signout-btn-blocked').addEventListener('click', () => window._auth.signOut(auth));
}

function friendlyAuthError(code) {
  const map = {
    'auth/invalid-email': 'Invalid email address.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/too-many-requests': 'Too many attempts. Please wait and try again.',
    'auth/invalid-credential': 'Incorrect email or password.',
  };
  return map[code] || 'Sign in failed. Please try again.';
}

// ── LOAD USER + FEATURE FLAGS ─────────────────────────────────────────────────
async function loadUserAndStart(user) {
  showScreen('loading');
  document.getElementById('user-email-display').textContent = user.email;

  try {
    const { doc, getDoc, setDoc } = window._fs;
    const flagsDoc = await getDoc(doc(db, 'users', user.uid));

    if (!flagsDoc.exists()) {
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        features: { vocabmountain: true, dailyprogress: true },
        createdAt: new Date().toISOString(),
      });
      userFeatureFlags = { vocabmountain: true, dailyprogress: true };
    } else {
      userFeatureFlags = flagsDoc.data().features || {};
    }

    const hasVocab  = !!userFeatureFlags.vocabmountain;
    const hasDaily  = !!userFeatureFlags.dailyprogress;
    const hasVerbal = !!userFeatureFlags.verbalsection;

    if (!hasVocab && !hasDaily && !hasVerbal) {
      showScreen('blocked');
      return;
    }

    setupNavTabs(hasVocab, hasDaily);
    await loadProgressFromFirestore();

    if (hasVocab) showTab('vocab');
    else if (hasVerbal) showTab('verbal');
    else showTab('daily');

    showScreen('main');
  } catch (err) {
    console.error('Load user error:', err);
    document.getElementById('app-loading').textContent = 'Error loading your profile. Please refresh.';
  }
}

// ── SCREEN MANAGEMENT ─────────────────────────────────────────────────────────
function showScreen(screen) {
  document.getElementById('app-loading').style.display     = screen === 'loading' ? 'flex' : 'none';
  document.getElementById('auth-screen').style.display     = screen === 'auth'    ? 'flex' : 'none';
  document.getElementById('main-app').style.display        = screen === 'main'    ? 'block': 'none';
  document.getElementById('feature-blocked').style.display = screen === 'blocked' ? 'flex' : 'none';
}

// ── NAV TABS ──────────────────────────────────────────────────────────────────
function setupNavTabs(hasVocab, hasDaily) {
  const navTabs  = document.getElementById('nav-tabs');
  const vocabTab = document.querySelector('[data-tab="vocab"]');
  const dailyTab = document.querySelector('[data-tab="daily"]');
  const verbalTab= document.querySelector('[data-tab="verbal"]');
  const hasVerbal= !!userFeatureFlags.verbalsection;

  if (hasVocab || hasDaily || hasVerbal) navTabs.style.display = 'flex';
  if (!hasVocab)  vocabTab.style.display  = 'none';
  if (!hasDaily)  dailyTab.style.display  = 'none';
  if (!hasVerbal) verbalTab.style.display = 'none';

  navTabs.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => showTab(tab.dataset.tab));
  });
}

function showTab(tab) {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('vocab-view').style.display  = tab === 'vocab'  ? 'block' : 'none';
  document.getElementById('daily-view').style.display  = tab === 'daily'  ? 'block' : 'none';
  document.getElementById('verbal-view').style.display = tab === 'verbal' ? 'block' : 'none';

  const sliderWrap = document.querySelector('.slider-wrap');
  const keysHint   = document.querySelector('.keys-hint');
  const isVocab    = tab === 'vocab';
  if (sliderWrap) sliderWrap.style.display = isVocab ? 'flex' : 'none';
  if (keysHint)   keysHint.style.display   = isVocab ? 'flex' : 'none';
  ['shuffleAll', 'resetAll', 'saveProgress', 'dirtyDot', 'stats'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = isVocab ? '' : 'none';
  });

  if (tab === 'daily')  renderDailyTable();
  if (tab === 'verbal') initVerbalHub();
}

// ── STATE ─────────────────────────────────────────────────────────────────────
const COLS = 6;
let maxGroup = 6;
let groups = [];

// FIX: cellColors is now keyed by "GroupName::word" (stable across shuffles)
// e.g. "Group 1::abound" = "green"
let cellColors = {};

let sel = { col: 0, row: 0 };
let modalOpen = false;
let isDirty = false;

// Daily progress: keyed by date string "YYYY-MM-DD"
// Each value: { greDone, skillsDone, greNotes, skillsNotes, effortScore }
let dailyData = {};
let dailyTitle = 'Daily Progress Tracker';
let dailyViewYear = new Date().getFullYear();
let dailyViewMonth = new Date().getMonth(); // 0-indexed

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── COLOR KEY HELPERS ─────────────────────────────────────────────────────────
// Keys are stable "GroupName::word" — survive shuffle reordering
function colorKey(gIdx, rowIdx) {
  const group = groups[gIdx];
  const word  = group.words[rowIdx];
  return `${group.name}::${word.w}`;
}

// ── FIRESTORE PERSISTENCE ─────────────────────────────────────────────────────
async function loadProgressFromFirestore() {
  if (!currentUser) return;
  try {
    const { doc, getDoc } = window._fs;
    const snap = await getDoc(doc(db, 'progress', currentUser.uid));
    const saved = snap.exists() ? snap.data() : null;

    if (saved) {
      dailyData  = saved.dailyData  || {};
      dailyTitle = saved.dailyTitle || 'Daily Progress Tracker';
      const titleEl = document.getElementById('daily-title-input');
      if (titleEl) titleEl.value = dailyTitle;
    }

    initVocabState(saved);
  } catch (e) {
    console.warn('Could not load progress:', e);
    initVocabState(null);
  }
}

async function saveProgressToFirestore() {
  if (!currentUser) return;
  setSyncStatus('saving...');
  const state = {
    maxGroup,
    cellColors,
    groupWords: groups.map(g => ({ name: g.name, wordOrder: g.words.map(w => w.w) })),
    savedAt: new Date().toISOString(),
    dailyData,
    dailyTitle,
  };
  try {
    const { doc, setDoc } = window._fs;
    await setDoc(doc(db, 'progress', currentUser.uid), state);
    isDirty = false;
    updateDirtyDot();
    setSyncStatus('✓ saved', 2000);
    const btn = document.getElementById('saveProgress');
    btn.textContent = '✓ Saved';
    btn.classList.add('saved');
    setTimeout(() => { btn.textContent = '💾 Save'; btn.classList.remove('saved'); }, 1800);
  } catch (e) {
    console.error('Save failed:', e);
    setSyncStatus('save failed', 3000);
  }
}

function setSyncStatus(msg, clearAfterMs) {
  const el = document.getElementById('sync-status');
  if (!el) return;
  el.textContent = msg;
  if (clearAfterMs) setTimeout(() => { el.textContent = ''; }, clearAfterMs);
}

// ── DAILY PROGRESS TABLE ──────────────────────────────────────────────────────
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAY_ABBR    = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function renderDailyTable() {
  if (!userFeatureFlags?.dailyprogress) return;

  document.getElementById('current-month-label').textContent =
    `${MONTH_NAMES[dailyViewMonth]} ${dailyViewYear}`;

  const tbody    = document.getElementById('dp-tbody');
  const today    = new Date();
  const todayStr = fmtDate(today);
  tbody.innerHTML = '';

  const daysInMonth = new Date(dailyViewYear, dailyViewMonth + 1, 0).getDate();

  for (let d = 1; d <= daysInMonth; d++) {
    const date    = new Date(dailyViewYear, dailyViewMonth, d);
    const dateStr = fmtDate(date);
    const dayIdx  = date.getDay();
    const dayName = DAY_ABBR[dayIdx];
    const isToday  = dateStr === todayStr;
    const isFuture = dateStr > todayStr;
    const isWeekend = dayIdx === 0 || dayIdx === 6;

    const row = dailyData[dateStr] || { greDone:false, skillsDone:false, greNotes:'', skillsNotes:'', effortScore:'' };
    const bothDone = row.greDone && row.skillsDone;
    const oneDone  = row.greDone || row.skillsDone;

    const tr = document.createElement('tr');
    if (isToday)  tr.classList.add('today-row');
    if (isFuture) tr.classList.add('future-row');

    // ── Date ──
    const tdDate = document.createElement('td');
    const daySpanClass = isWeekend ? 'dp-date-day weekend' : 'dp-date-day';
    tdDate.innerHTML = `
      <span class="dp-date">
        <span class="dp-date-num">${MONTH_NAMES[dailyViewMonth].slice(0,3)} ${d}</span>
        <span class="${daySpanClass}">${dayName}</span>
      </span>`;
    tr.appendChild(tdDate);

    // ── GRE checkbox ──
    tr.appendChild(makeCheckTd(dateStr, 'greDone', row.greDone, tr));

    // ── Skills checkbox ──
    tr.appendChild(makeCheckTd(dateStr, 'skillsDone', row.skillsDone, tr));

    // ── GRE Notes ──
    tr.appendChild(makeNotesTd(dateStr, 'greNotes', row.greNotes, 'Add GRE notes…', date));

    // ── Skills Notes ──
    tr.appendChild(makeNotesTd(dateStr, 'skillsNotes', row.skillsNotes, 'Add skills notes…', date));

    // ── Effort (plain text) ──
    const tdEffort = document.createElement('td');
    tdEffort.className = 'dp-effort';
    const effortEl = document.createElement('input');
    effortEl.type = 'text';
    effortEl.className = 'dp-effort-input';
    effortEl.value = row.effortScore || '';
    effortEl.placeholder = '—';
    effortEl.addEventListener('input', () => {
      ensureDayRow(dateStr);
      dailyData[dateStr].effortScore = effortEl.value;
      markDirty();
    });
    effortEl.addEventListener('blur', () => {
      if (isDirty) saveProgressToFirestore();
    });
    tdEffort.appendChild(effortEl);
    tr.appendChild(tdEffort);

    // ── Status pill ──
    const tdComp = document.createElement('td');
    tdComp.className = 'dp-completed';
    tdComp.innerHTML = makeStatusPillHTML(bothDone, oneDone);
    tr.appendChild(tdComp);

    tbody.appendChild(tr);
  }

  setupDailyControls();
}

function makeCheckTd(dateStr, field, checked, tr) {
  const td = document.createElement('td');
  td.className = 'dp-check';
  const box = document.createElement('div');
  box.className = 'notion-checkbox' + (checked ? ' checked' : '');
  box.addEventListener('click', () => {
    ensureDayRow(dateStr);
    dailyData[dateStr][field] = !dailyData[dateStr][field];
    box.classList.toggle('checked', dailyData[dateStr][field]);
    updateCompletedCell(tr, dateStr);
    saveProgressToFirestore();
  });
  td.appendChild(box);
  return td;
}

function makeNotesTd(dateStr, field, value, placeholder, dateObj) {
  const td = document.createElement('td');
  td.className = 'dp-notes-cell';

  // Parse stored notes string into array of lines
  const lines = parseNoteLines(value);
  const count = lines.filter(l => l.trim()).length;

  const preview = document.createElement('div');
  preview.className = 'dp-notes-preview' + (count ? ' has-notes' : ' empty');

  if (count) {
    // Show first line preview + count badge
    const firstLine = lines.find(l => l.trim()) || '';
    preview.innerHTML = `
      <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1">${escHtml(firstLine)}</span>
      ${count > 1 ? `<span class="dp-notes-count">+${count - 1}</span>` : ''}`;
  } else {
    preview.textContent = placeholder;
  }

  td.appendChild(preview);

  td.addEventListener('click', () => {
    openNotesModal(dateStr, field, dateObj, field === 'greNotes' ? 'GRE Notes' : 'Skills Notes');
  });
  return td;
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function parseNoteLines(raw) {
  if (!raw) return [''];
  // Support both newline-separated and "1. 2." numbered list storage
  if (raw.includes('\n')) return raw.split('\n');
  // Legacy single-line — just return as one item
  return [raw];
}

function serializeNoteLines(lines) {
  return lines.join('\n');
}

function updateCompletedCell(tr, dateStr) {
  const row = dailyData[dateStr] || {};
  const compCell = tr.querySelector('.dp-completed');
  if (!compCell) return;
  compCell.innerHTML = makeStatusPillHTML(row.greDone && row.skillsDone, row.greDone || row.skillsDone);
}

function makeStatusPillHTML(bothDone, oneDone) {
  if (bothDone) return '<span class="dp-status-pill done">✓ Done</span>';
  if (oneDone)  return '<span class="dp-status-pill partial">◑ Partial</span>';
  return '<span class="dp-status-pill none">—</span>';
}

function ensureDayRow(dateStr) {
  if (!dailyData[dateStr]) {
    dailyData[dateStr] = { greDone:false, skillsDone:false, greNotes:'', skillsNotes:'', effortScore:'' };
  }
}

function fmtDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function formatDisplayDate(d) {
  return `${MONTH_NAMES[d.getMonth()].slice(0,3)} ${d.getDate()}, ${d.getFullYear()}`;
}

// ── NOTES MODAL ───────────────────────────────────────────────────────────────
let notesModalState = { dateStr: null, field: null };

function openNotesModal(dateStr, field, dateObj, label) {
  notesModalState = { dateStr, field };
  ensureDayRow(dateStr);

  document.getElementById('notes-modal-title').textContent = label;
  document.getElementById('notes-modal-date').textContent  =
    formatDisplayDate(dateObj).toUpperCase();

  const raw   = dailyData[dateStr][field] || '';
  const lines = parseNoteLines(raw);

  buildNoteEditor(lines);
  document.getElementById('notes-overlay').classList.add('show');

  // Focus first input
  const first = document.querySelector('#notes-editor .note-input');
  if (first) { first.focus(); const len = first.value.length; first.setSelectionRange(len, len); }
}

function buildNoteEditor(lines) {
  const editor = document.getElementById('notes-editor');
  editor.innerHTML = '';

  // Ensure at least one line
  const arr = lines.length ? lines : [''];

  arr.forEach((text, i) => addNoteLine(editor, text, i + 1));

  // Always add a blank line at the end if last line has content
  const last = arr[arr.length - 1];
  if (last && last.trim()) addNoteLine(editor, '', arr.length + 1);
}

function addNoteLine(editor, text, num) {
  const line = document.createElement('div');
  line.className = 'note-line';

  const bullet = document.createElement('span');
  bullet.className = 'note-bullet';
  bullet.textContent = `${num}.`;

  const input = document.createElement('textarea');
  input.className = 'note-input';
  input.value = text;
  input.rows = 1;
  input.placeholder = num === 1 ? 'Start typing…' : '';

  // Auto-resize
  function resize() {
    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';
  }
  input.addEventListener('input', () => { resize(); renumberLines(editor); });
  requestAnimationFrame(resize);

  // Enter → new line below
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const allInputs = [...editor.querySelectorAll('.note-input')];
      const idx = allInputs.indexOf(input);

      // Insert new empty line after current
      const newLine = document.createElement('div');
      newLine.className = 'note-line';
      const nb = document.createElement('span');
      nb.className = 'note-bullet';
      const ni = document.createElement('textarea');
      ni.className = 'note-input';
      ni.rows = 1;
      ni.addEventListener('input', () => { autoResize(ni); renumberLines(editor); });
      ni.addEventListener('keydown', e2 => handleNoteKey(e2, editor, ni));
      newLine.appendChild(nb);
      newLine.appendChild(ni);

      // Insert after current line div
      const currentLineDivs = editor.querySelectorAll('.note-line');
      const currentDiv = currentLineDivs[idx];
      currentDiv.after(newLine);
      renumberLines(editor);
      ni.focus();
    }

    if (e.key === 'Backspace' && input.value === '') {
      e.preventDefault();
      const allLines = [...editor.querySelectorAll('.note-line')];
      if (allLines.length > 1) {
        const allInputs2 = [...editor.querySelectorAll('.note-input')];
        const idx2 = allInputs2.indexOf(input);
        const prev = allInputs2[idx2 - 1];
        line.remove();
        renumberLines(editor);
        if (prev) { prev.focus(); const l = prev.value.length; prev.setSelectionRange(l, l); }
      }
    }

    // Cmd/Ctrl+Enter → save and close
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      saveNotesModal();
    }
  });

  function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  }
  function handleNoteKey() {} // stub — events already attached above

  line.appendChild(bullet);
  line.appendChild(input);
  editor.appendChild(line);
  requestAnimationFrame(resize);
}

function renumberLines(editor) {
  const bullets = editor.querySelectorAll('.note-bullet');
  bullets.forEach((b, i) => { b.textContent = `${i + 1}.`; });
}

function saveNotesModal() {
  const { dateStr, field } = notesModalState;
  if (!dateStr || !field) return;

  const inputs = [...document.querySelectorAll('#notes-editor .note-input')];
  const lines  = inputs.map(i => i.value).filter((v, idx, arr) => {
    // Remove trailing empty lines but keep middle ones
    if (idx === arr.length - 1 && !v.trim()) return false;
    return true;
  });

  ensureDayRow(dateStr);
  dailyData[dateStr][field] = serializeNoteLines(lines);
  markDirty();
  saveProgressToFirestore();

  // Refresh the notes cell preview in the table
  const allNotesCells = document.querySelectorAll('.dp-notes-cell');
  // Re-render the table to update previews
  renderDailyTable();

  closeNotesModal();
}

function closeNotesModal() {
  document.getElementById('notes-overlay').classList.remove('show');
  notesModalState = { dateStr: null, field: null };
}

// Wire up notes modal buttons once
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('notes-modal-close').addEventListener('click', closeNotesModal);
  document.getElementById('notes-modal-save').addEventListener('click', saveNotesModal);
  document.getElementById('notes-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('notes-overlay')) closeNotesModal();
  });
});

let dailyControlsSetup = false;
function setupDailyControls() {
  if (dailyControlsSetup) return;
  dailyControlsSetup = true;

  document.getElementById('prevMonth').addEventListener('click', () => {
    dailyViewMonth--;
    if (dailyViewMonth < 0) { dailyViewMonth = 11; dailyViewYear--; }
    renderDailyTable();
  });

  document.getElementById('nextMonth').addEventListener('click', () => {
    dailyViewMonth++;
    if (dailyViewMonth > 11) { dailyViewMonth = 0; dailyViewYear++; }
    renderDailyTable();
  });

  document.getElementById('daily-title-input').addEventListener('input', (e) => {
    dailyTitle = e.target.value;
    markDirty();
  });
  document.getElementById('daily-title-input').addEventListener('blur', () => {
    if (isDirty) saveProgressToFirestore();
  });
}

// ── INIT VOCAB STATE ──────────────────────────────────────────────────────────
function initVocabState(savedState) {
  const slider = document.getElementById('groupSlider');
  if (savedState) {
    maxGroup = Math.min(savedState.maxGroup || 6, RAW_GROUPS.length);
    slider.value = maxGroup;
  }
  document.getElementById('sliderVal').textContent = `1–${maxGroup}`;
  loadGroups(savedState);
}

function loadGroups(savedState) {
  const rawSlice = RAW_GROUPS.slice(0, maxGroup);

  if (savedState) {
    groups = rawSlice.map((g, gi) => {
      const saved = savedState.groupWords && savedState.groupWords[gi];
      let words;
      if (saved && saved.name === g.name) {
        const wordMap = Object.fromEntries(g.words.map(w => [w.w, w]));
        const ordered = saved.wordOrder.map(w => wordMap[w]).filter(Boolean);
        const remaining = g.words.filter(w => !saved.wordOrder.includes(w.w));
        words = [...ordered, ...remaining];
      } else {
        words = [...g.words];
      }
      return { name: g.name, words };
    });
  } else {
    groups = rawSlice.map(g => ({ name: g.name, words: [...g.words] }));
  }

  // FIX: restore cellColors from saved state (they're already word-keyed)
  cellColors = savedState ? (savedState.cellColors || {}) : {};

  sel = { col: 0, row: 0 };
  isDirty = false;
  updateDirtyDot();
  render();
  setupVocabControls();
}

// ── RENDER ────────────────────────────────────────────────────────────────────
function render() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  const numChunks = Math.ceil(groups.length / COLS);

  for (let chunk = 0; chunk < numChunks; chunk++) {
    const chunkGroups = groups.slice(chunk * COLS, (chunk + 1) * COLS);
    if (chunk > 0) {
      const divider = document.createElement('div');
      divider.className = 'grid-row-divider';
      divider.style.display = 'block';
      grid.appendChild(divider);
    }
    const row = document.createElement('div');
    row.className = 'grid-row';

    chunkGroups.forEach((group, ci) => {
      const gIdx = chunk * COLS + ci;
      const col  = document.createElement('div');
      col.className = 'group-col';

      const hdr = document.createElement('div');
      hdr.className = 'group-header';
      hdr.innerHTML = `${group.name} <span class="shuffle-icon">⇄</span>`;
      hdr.title = 'Click to shuffle this group';
      hdr.addEventListener('click', () => shuffleGroup(gIdx));
      col.appendChild(hdr);

      group.words.forEach((item, rowIdx) => {
        const cell = document.createElement('div');
        cell.className = 'word-cell';
        cell.dataset.col = gIdx;
        cell.dataset.row = rowIdx;
        cell.textContent = item.w;
        cell.title = item.w;

        // FIX: use word-keyed color, not position-keyed
        const ck = colorKey(gIdx, rowIdx);
        if (cellColors[ck]) cell.classList.add(cellColors[ck]);
        if (sel.col === gIdx && sel.row === rowIdx) cell.classList.add('selected');

        cell.addEventListener('click', () => {
          sel = { col: gIdx, row: rowIdx };
          renderCells();
          openModal();
        });
        col.appendChild(cell);
      });

      row.appendChild(col);
    });
    grid.appendChild(row);
  }

  updateStats();
  scrollToSelected();
}

function renderCells() {
  document.querySelectorAll('.word-cell').forEach(cell => {
    const gIdx   = +cell.dataset.col;
    const rowIdx = +cell.dataset.row;
    // FIX: use word-keyed color
    const ck = colorKey(gIdx, rowIdx);
    cell.className = 'word-cell';
    if (cellColors[ck]) cell.classList.add(cellColors[ck]);
    if (sel.col === gIdx && sel.row === rowIdx) cell.classList.add('selected');
  });
  updateStats();
  scrollToSelected();
}

function scrollToSelected() {
  const el = document.querySelector(`.word-cell[data-col="${sel.col}"][data-row="${sel.row}"]`);
  if (el) el.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
}

function updateStats() {
  let green = 0, red = 0, total = 0;
  groups.forEach((g, gi) => g.words.forEach((_, ri) => {
    total++;
    const ck = colorKey(gi, ri);
    if (cellColors[ck] === 'green') green++;
    else if (cellColors[ck] === 'red') red++;
  }));
  document.getElementById('stats').innerHTML =
    `<span class="g">✓${green}</span> <span class="r">✗${red}</span> / ${total}`;
}

// ── NAVIGATION ────────────────────────────────────────────────────────────────
function move(dir) {
  const numCols = groups.length;
  let { col, row } = sel;
  if (dir === 'up')    row = row > 0 ? row - 1 : groups[col].words.length - 1;
  else if (dir === 'down')  row = row < groups[col].words.length - 1 ? row + 1 : 0;
  else if (dir === 'left')  { col = col > 0 ? col - 1 : numCols - 1; row = Math.min(row, groups[col].words.length - 1); }
  else if (dir === 'right') { col = col < numCols - 1 ? col + 1 : 0; row = Math.min(row, groups[col].words.length - 1); }
  sel = { col, row };
  renderCells();
}

// ── COLOR ─────────────────────────────────────────────────────────────────────
function markColor(color) {
  // FIX: store by word key — color sticks to the word, not the slot
  const ck = colorKey(sel.col, sel.row);
  cellColors[ck] = cellColors[ck] === color ? '' : color;
  markDirty();
  renderCells();
  if (modalOpen) updateModal();
}

// ── SHUFFLE ───────────────────────────────────────────────────────────────────
function shuffleGroup(gIdx) {
  // FIX: colors are word-keyed, so no color cleanup needed on shuffle —
  // they travel with the words automatically via colorKey()
  groups[gIdx].words = shuffle(groups[gIdx].words);
  markDirty();
  render();
}

function shuffleAll() {
  groups.forEach(g => { g.words = shuffle(g.words); });
  markDirty();
  render();
}

// ── MODAL ─────────────────────────────────────────────────────────────────────
function openModal() {
  modalOpen = true;
  updateModal();
  document.getElementById('overlay').classList.add('show');
}

function updateModal() {
  const group = groups[sel.col];
  const item  = group.words[sel.row];
  const ck    = colorKey(sel.col, sel.row);
  const color = cellColors[ck] || '';

  document.getElementById('modal-word').textContent  = item.w;
  document.getElementById('modal-group').textContent = `${group.name} · word ${sel.row + 1} of ${group.words.length}`;

  const lines = item.m.split('\n');
  document.getElementById('modal-meaning').innerHTML = lines.length > 1
    ? '<ol>' + lines.map(l => `<li>${l.replace(/^\d+\.\s*/, '')}</li>`).join('') + '</ol>'
    : `<p>${item.m}</p>`;

  document.getElementById('modal-word').style.color =
    color === 'green' ? 'var(--green-text)' :
    color === 'red'   ? 'var(--red-text)'   : 'var(--accent)';
}

function closeModal() {
  modalOpen = false;
  document.getElementById('overlay').classList.remove('show');
}

// ── DIRTY / SAVE ──────────────────────────────────────────────────────────────
function markDirty() {
  isDirty = true;
  updateDirtyDot();
}
function updateDirtyDot() {
  const dot = document.getElementById('dirtyDot');
  if (dot) dot.classList.toggle('dirty', isDirty);
}

// ── CONTROLS SETUP ────────────────────────────────────────────────────────────
let controlsSetup = false;
function setupVocabControls() {
  if (controlsSetup) return;
  controlsSetup = true;

  const slider = document.getElementById('groupSlider');
  slider.addEventListener('input', () => {
    maxGroup = +slider.value;
    document.getElementById('sliderVal').textContent = `1–${maxGroup}`;
    loadGroups(null);
  });

  document.getElementById('shuffleAll').addEventListener('click', shuffleAll);
  document.getElementById('resetAll').addEventListener('click', () => {
    cellColors = {};
    markDirty();
    render();
  });
  document.getElementById('saveProgress').addEventListener('click', saveProgressToFirestore);

  document.getElementById('mGreen').addEventListener('click', () => markColor('green'));
  document.getElementById('mRed').addEventListener('click', () => markColor('red'));
  document.getElementById('mClose').addEventListener('click', closeModal);
  document.getElementById('overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('overlay')) closeModal();
  });

  document.addEventListener('keydown', e => {
    // Never intercept if typing in any input/textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    // Only handle vocab-specific keys when vocab tab is visible
    const vocabView = document.getElementById('vocab-view');
    const onVocabTab = vocabView && vocabView.style.display !== 'none';

    if (e.key === 'Escape') { if (onVocabTab) closeModal(); return; }
    if (e.key === ' ' || e.key === 'd' || e.key === 'D') {
      if (!onVocabTab) return; // don't intercept space/d/g on daily tab
      e.preventDefault();
      modalOpen ? closeModal() : openModal();
      return;
    }
    if (!onVocabTab) return; // all remaining keys are vocab-only
    if (modalOpen) {
      if (e.key === 'g' || e.key === 'G') { markColor('green'); return; }
      if (e.key === 'r' || e.key === 'R') { markColor('red'); return; }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { move('down'); return; }
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { move('up');   return; }
      return;
    }
    if (e.key === 'ArrowUp')    { e.preventDefault(); move('up'); }
    else if (e.key === 'ArrowDown')  { e.preventDefault(); move('down'); }
    else if (e.key === 'ArrowLeft')  { e.preventDefault(); move('left'); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); move('right'); }
    else if (e.key === 'g' || e.key === 'G') markColor('green');
    else if (e.key === 'r' || e.key === 'R') markColor('red');
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && isDirty) saveProgressToFirestore();
  });
}

// ── KICK OFF ──────────────────────────────────────────────────────────────────
bootstrap();

// ══════════════════════════════════════════════════════════════════════════════
// GRE VERBAL SECTION
// ══════════════════════════════════════════════════════════════════════════════

// ── STATE ─────────────────────────────────────────────────────────────────────
let verbalState = {
  selectedType: null,   // 'tc' | 'se' | 'rc'
  difficulty:   'easy',
  mode:         'quiz', // 'quiz' | 'timed'
  qcount:       5,
  // session
  questions:    [],
  current:      0,
  answers:      [],   // per question: { answered: bool, correct: bool, userAnswer: any }
  sessionStart: null,
  questionStart:null,
  totalTimer:   null,
  questionTimer:null,
  paused:       false,
  totalSeconds: 0,
  questionSeconds: 0,
  sessionHistory: [], // saved to Firestore
};

const VERBAL_TIME_PER_Q  = 120; // 2 min per question (quiz mode display only)
const VERBAL_TIMED_TOTAL = { 5: 600, 10: 1200, 15: 1800, 20: 2400 }; // timed mode

// ── HUB INIT ──────────────────────────────────────────────────────────────────
let verbalHubReady = false;

function initVerbalHub() {
  showVerbalScreen('hub');
  renderVerbalHistory();

  if (verbalHubReady) return;
  verbalHubReady = true;

  // Type cards
  document.querySelectorAll('.verbal-type-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.verbal-type-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      verbalState.selectedType = card.dataset.vtype;
      updateStartBtn();
    });
  });

  // Pill groups
  setupPillGroup('diff-pills',   val => { verbalState.difficulty = val; });
  setupPillGroup('mode-pills',   val => { verbalState.mode = val; });
  setupPillGroup('qcount-pills', val => { verbalState.qcount = parseInt(val); });

  document.getElementById('verbal-start-btn').addEventListener('click', startVerbalSession);
}

function setupPillGroup(containerId, onChange) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll('.vopt-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      container.querySelectorAll('.vopt-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      onChange(pill.dataset.val);
    });
  });
}

function updateStartBtn() {
  const btn = document.getElementById('verbal-start-btn');
  if (!btn) return;
  if (verbalState.selectedType) {
    btn.disabled = false;
    const labels = { tc: 'Text Completion', se: 'Sentence Equivalence', rc: 'Reading Comprehension' };
    btn.textContent = `Start ${labels[verbalState.selectedType]} — ${verbalState.qcount} Questions →`;
  } else {
    btn.disabled = true;
    btn.textContent = 'Select a section type to start →';
  }
}

function showVerbalScreen(screen) {
  document.getElementById('verbal-hub').style.display      = screen === 'hub'     ? 'block' : 'none';
  document.getElementById('verbal-session').style.display  = screen === 'session' ? 'block' : 'none';
  document.getElementById('verbal-results').style.display  = screen === 'results' ? 'block' : 'none';
}

// ── START SESSION ─────────────────────────────────────────────────────────────
async function startVerbalSession() {
  const { selectedType, difficulty, mode, qcount } = verbalState;
  verbalState.questions     = [];
  verbalState.current       = 0;
  verbalState.answers       = Array(qcount).fill(null).map(() => ({ answered: false, correct: false, userAnswer: null }));
  verbalState.sessionStart  = Date.now();
  verbalState.paused        = false;
  verbalState.totalSeconds  = mode === 'timed' ? (VERBAL_TIMED_TOTAL[qcount] || qcount * 120) : 0;

  showVerbalScreen('session');
  setupSessionControls();
  renderProgressDots();
  startTimers();

  // Pre-fetch all questions upfront (better UX than generating one at a time)
  await fetchAllQuestions();
  renderCurrentQuestion();
}

async function fetchAllQuestions() {
  const { selectedType, difficulty, qcount } = verbalState;

  // Build vocab word list from user's groups for contextual questions
  const vocabWords = groups.flatMap(g => g.words.map(w => w.w)).slice(0, 60);

  // For RC, each "question" is actually a passage+questions set — fetch fewer passages
  const fetchCount = selectedType === 'rc' ? Math.ceil(qcount / 3) : qcount;
  const fetchDiff  = difficulty === 'mixed'
    ? ['easy', 'medium', 'hard', 'medium', 'hard'].slice(0, fetchCount)
    : Array(fetchCount).fill(difficulty);

  showLoading(true);

  // Fetch in batches of 3 to stay within rate limits
  const allQuestions = [];
  for (let i = 0; i < fetchCount; i++) {
    try {
      const res = await fetch('/api/generate-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type:       selectedType,
          difficulty: fetchDiff[i],
          vocabWords,
          count: 1,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.questions && data.questions.length > 0) {
        allQuestions.push(...data.questions);
      }
    } catch (err) {
      console.error('Fetch question error:', err);
      allQuestions.push(makeFallbackQuestion(selectedType, fetchDiff[i], i));
    }
  }

  // For RC, flatten passage+questions into individual RC question items
  if (selectedType === 'rc') {
    verbalState.questions = flattenRCQuestions(allQuestions, qcount);
  } else {
    verbalState.questions = allQuestions.slice(0, qcount);
  }

  // Pad with fallbacks if Gemini returned fewer than expected
  while (verbalState.questions.length < verbalState.qcount) {
    verbalState.questions.push(makeFallbackQuestion(selectedType, difficulty, verbalState.questions.length));
  }

  showLoading(false);
}

function flattenRCQuestions(passages, targetCount) {
  const flat = [];
  for (const passage of passages) {
    if (!passage.questions) continue;
    for (const q of passage.questions) {
      flat.push({ ...q, type: 'rc', passage: passage.passage, difficulty: passage.difficulty });
      if (flat.length >= targetCount) return flat;
    }
  }
  return flat;
}

function showLoading(show) {
  const loading = document.getElementById('vsess-loading');
  const content = document.getElementById('vsess-question-content');
  if (loading) loading.style.display = show ? 'flex' : 'none';
  if (content) content.style.display = show ? 'none' : 'block';
}

// ── FALLBACK QUESTIONS (if Gemini fails) ──────────────────────────────────────
function makeFallbackQuestion(type, difficulty, idx) {
  if (type === 'tc') return {
    id: `fallback_tc_${idx}`, type: 'tc', difficulty, numBlanks: 1,
    passage: 'The scientist\'s findings were so (i)__________ that even her colleagues struggled to follow her reasoning.',
    blanks: [{ label: 'Blank (i)', choices: [
      { label: 'A', text: 'abstruse' }, { label: 'B', text: 'lucid' }, { label: 'C', text: 'mundane' },
      { label: 'D', text: 'derivative' }, { label: 'E', text: 'conventional' }
    ], correct: 'A' }],
    explanation: 'Abstruse means difficult to understand. The clue "even her colleagues struggled" indicates the findings were highly complex and obscure.',
  };
  if (type === 'se') return {
    id: `fallback_se_${idx}`, type: 'se', difficulty,
    passage: 'Far from being the __________ figure his critics portrayed, the statesman was actually known for his warmth and generosity.',
    choices: [
      { label: 'A', text: 'magnanimous' }, { label: 'B', text: 'cold' },
      { label: 'C', text: 'austere' }, { label: 'D', text: 'venerated' },
      { label: 'E', text: 'distant' }, { label: 'F', text: 'exemplary' }
    ],
    correct: ['C', 'E'],
    explanation: 'Austere and distant are near-synonyms meaning cold and remote. Both contrast with the warmth and generosity described in the second clause.',
  };
  return {
    id: `fallback_rc_${idx}`, type: 'rc', difficulty,
    passage: 'The concept of neuroplasticity—the brain\'s ability to reorganize itself by forming new neural connections—has revolutionized our understanding of human cognition. Once believed to be fixed after childhood, the brain is now known to remain adaptable throughout life.',
    qtype: 'main idea', text: 'The primary purpose of this passage is to',
    choices: [
      { label: 'A', text: 'argue that childhood brain development is unimportant' },
      { label: 'B', text: 'describe how neuroplasticity changed scientific understanding of the brain' },
      { label: 'C', text: 'explain the technical mechanisms behind neural connections' },
      { label: 'D', text: 'question the validity of neuroplasticity research' },
      { label: 'E', text: 'compare adult and childhood brain development' }
    ],
    correct: 'B',
    explanation: 'The passage describes the concept of neuroplasticity and how it changed our understanding of the brain from fixed to adaptable.',
  };
}

// ── RENDER CURRENT QUESTION ────────────────────────────────────────────────────
function renderCurrentQuestion() {
  const q      = verbalState.questions[verbalState.current];
  const answer = verbalState.answers[verbalState.current];
  if (!q) return;

  verbalState.questionStart   = Date.now();
  verbalState.questionSeconds = 0;

  // Update bar
  document.getElementById('vsess-type-badge').textContent = q.type.toUpperCase();
  document.getElementById('vsess-qcount').textContent =
    `Question ${verbalState.current + 1} of ${verbalState.qcount}`;

  // Update nav buttons
  document.getElementById('vsess-back').disabled = verbalState.current === 0;
  document.getElementById('vsess-next').textContent =
    verbalState.current === verbalState.qcount - 1 ? 'Finish' : 'Next';

  // Render question content
  const container = document.getElementById('vsess-question-content');
  container.innerHTML = '';

  // Difficulty badge
  const badge = document.createElement('div');
  badge.className = `vsess-diff-badge ${q.difficulty}`;
  badge.textContent = `${q.type.toUpperCase()} · ${q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}`;
  container.appendChild(badge);

  if (q.type === 'tc') renderTCQuestion(container, q, answer);
  else if (q.type === 'se') renderSEQuestion(container, q, answer);
  else if (q.type === 'rc') renderRCQuestion(container, q, answer);

  // Show/hide explanation
  const expPanel = document.getElementById('vsess-explanation');
  if (answer.answered && verbalState.mode === 'quiz') {
    showExplanation(q, answer);
  } else {
    expPanel.style.display = 'none';
  }

  renderProgressDots();
}

// ── TC RENDERER ───────────────────────────────────────────────────────────────
function renderTCQuestion(container, q, answer) {
  // Render passage with blanks as underlines
  const passageEl = document.createElement('div');
  passageEl.className = 'vsess-passage';
  passageEl.innerHTML = formatTCPassage(q.passage, q.blanks, answer);
  container.appendChild(passageEl);

  // Blank columns
  const grid = document.createElement('div');
  grid.className = 'tc-blanks-grid';

  q.blanks.forEach((blank, bIdx) => {
    const col = document.createElement('div');
    col.className = 'tc-blank-col';
    const lbl = document.createElement('div');
    lbl.className = 'tc-blank-label';
    lbl.textContent = blank.label;
    col.appendChild(lbl);

    blank.choices.forEach(choice => {
      const btn = document.createElement('div');
      btn.className = 'tc-choice';
      btn.textContent = choice.text;
      btn.dataset.blankIdx = bIdx;
      btn.dataset.choiceLabel = choice.label;

      const userPick = answer.userAnswer?.[bIdx];
      if (answer.answered) {
        btn.classList.add('disabled');
        if (choice.label === blank.correct) btn.classList.add('reveal-correct');
        else if (choice.label === userPick && userPick !== blank.correct) btn.classList.add('wrong');
        else if (choice.label === userPick) btn.classList.add('selected');
      } else {
        if (choice.label === userPick) btn.classList.add('selected');
        btn.addEventListener('click', () => handleTCChoice(bIdx, choice.label, q, answer));
      }
      col.appendChild(btn);
    });
    grid.appendChild(col);
  });
  container.appendChild(grid);
}

function formatTCPassage(passage, blanks, answer) {
  // Replace (i)__________, (ii)__________ etc with filled/empty spans
  let html = passage;
  blanks.forEach((blank, bIdx) => {
    const userPick = answer.userAnswer?.[bIdx];
    const choiceText = userPick
      ? blank.choices.find(c => c.label === userPick)?.text || '___'
      : null;
    const regex = new RegExp(`\\(${['i','ii','iii'][bIdx]}\\)_+`, 'g');
    const spanClass = choiceText ? 'blank-filled' : 'blank-placeholder';
    const spanText  = choiceText || '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    html = html.replace(regex, `<span class="${spanClass}">${spanText}</span>`);
  });
  return html;
}

function handleTCChoice(blankIdx, choiceLabel, q, answer) {
  if (answer.answered) return;
  if (!answer.userAnswer) answer.userAnswer = {};
  answer.userAnswer[blankIdx] = choiceLabel;

  // Check if all blanks filled
  const allFilled = q.blanks.every((_, i) => answer.userAnswer[i]);
  if (allFilled) {
    answer.answered = true;
    answer.correct  = q.blanks.every((blank, i) => answer.userAnswer[i] === blank.correct);
    if (verbalState.mode === 'quiz') showExplanation(q, answer);
  }
  renderCurrentQuestion();
}

// ── SE RENDERER ───────────────────────────────────────────────────────────────
function renderSEQuestion(container, q, answer) {
  const passageEl = document.createElement('div');
  passageEl.className = 'vsess-passage';
  passageEl.innerHTML = q.passage.replace('__________', '<span class="blank-placeholder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
  container.appendChild(passageEl);

  const choicesEl = document.createElement('div');
  choicesEl.className = 'se-choices';

  q.choices.forEach(choice => {
    const row = document.createElement('div');
    row.className = 'se-choice';
    row.innerHTML = `
      <span class="se-label" style="font-family:var(--font-mono);font-size:11px;font-weight:600;color:var(--muted);width:18px;flex-shrink:0">${choice.label}</span>
      <span class="se-checkbox">${(answer.userAnswer || []).includes(choice.label) ? '✓' : ''}</span>
      <span>${choice.text}</span>`;

    const selected = (answer.userAnswer || []).includes(choice.label);
    if (selected) row.classList.add('selected');

    if (answer.answered) {
      row.classList.add('disabled');
      if (q.correct.includes(choice.label)) row.classList.add('reveal-correct');
      else if (selected) row.classList.add('wrong');
    } else {
      row.addEventListener('click', () => handleSEChoice(choice.label, q, answer));
    }
    choicesEl.appendChild(row);
  });

  const hint = document.createElement('div');
  hint.className = 'se-hint';
  const selCount = (answer.userAnswer || []).length;
  hint.textContent = answer.answered ? '' : `Select exactly 2 answers (${selCount}/2 selected)`;
  if (selCount === 2) hint.classList.add('maxed');
  choicesEl.appendChild(hint);

  container.appendChild(choicesEl);
}

function handleSEChoice(choiceLabel, q, answer) {
  if (answer.answered) return;
  if (!answer.userAnswer) answer.userAnswer = [];
  const idx = answer.userAnswer.indexOf(choiceLabel);
  if (idx >= 0) {
    answer.userAnswer.splice(idx, 1);
  } else {
    if (answer.userAnswer.length >= 2) return; // max 2
    answer.userAnswer.push(choiceLabel);
  }
  if (answer.userAnswer.length === 2) {
    answer.answered = true;
    const sorted = [...answer.userAnswer].sort().join(',');
    const correct = [...q.correct].sort().join(',');
    answer.correct = sorted === correct;
    if (verbalState.mode === 'quiz') showExplanation(q, answer);
  }
  renderCurrentQuestion();
}

// ── RC RENDERER ───────────────────────────────────────────────────────────────
function renderRCQuestion(container, q, answer) {
  const passageEl = document.createElement('div');
  passageEl.className = 'rc-passage';
  passageEl.textContent = q.passage;
  container.appendChild(passageEl);

  const qTypeEl = document.createElement('div');
  qTypeEl.className = 'rc-q-label';
  qTypeEl.textContent = (q.qtype || 'Question').toUpperCase();
  container.appendChild(qTypeEl);

  const qText = document.createElement('div');
  qText.className = 'rc-question-text';
  qText.textContent = q.text;
  container.appendChild(qText);

  const choicesEl = document.createElement('div');
  q.choices.forEach(choice => {
    const row = document.createElement('div');
    row.className = 'rc-choice';
    row.innerHTML = `<span class="rc-choice-label">${choice.label}</span><span>${choice.text}</span>`;

    if (answer.userAnswer === choice.label) row.classList.add('selected');
    if (answer.answered) {
      row.classList.add('disabled');
      if (choice.label === q.correct) row.classList.add('reveal-correct');
      else if (answer.userAnswer === choice.label) row.classList.add('wrong');
    } else {
      row.addEventListener('click', () => handleRCChoice(choice.label, q, answer));
    }
    choicesEl.appendChild(row);
  });
  container.appendChild(choicesEl);
}

function handleRCChoice(choiceLabel, q, answer) {
  if (answer.answered) return;
  answer.userAnswer = choiceLabel;
  answer.answered   = true;
  answer.correct    = choiceLabel === q.correct;
  if (verbalState.mode === 'quiz') showExplanation(q, answer);
  renderCurrentQuestion();
}

// ── EXPLANATION ───────────────────────────────────────────────────────────────
function showExplanation(q, answer) {
  const panel = document.getElementById('vsess-explanation');
  const head  = document.getElementById('vsess-exp-result');
  const body  = document.getElementById('vsess-exp-text');
  panel.style.display = 'block';
  head.className = `vsess-exp-header ${answer.correct ? 'correct' : 'wrong'}`;
  head.textContent = answer.correct ? '✓ Correct!' : '✗ Incorrect';
  body.textContent = q.explanation || '';
}

// ── PROGRESS DOTS ─────────────────────────────────────────────────────────────
function renderProgressDots() {
  const container = document.getElementById('vsess-dots');
  if (!container) return;
  container.innerHTML = '';
  verbalState.answers.forEach((a, i) => {
    const dot = document.createElement('div');
    dot.className = 'vsess-dot';
    if (i === verbalState.current) dot.classList.add('current');
    else if (a.answered && a.correct)  dot.classList.add('correct');
    else if (a.answered && !a.correct) dot.classList.add('wrong');
    container.appendChild(dot);
  });
}

// ── TIMERS ────────────────────────────────────────────────────────────────────
function startTimers() {
  clearTimers();
  const isTimed = verbalState.mode === 'timed';

  verbalState.questionTimer = setInterval(() => {
    if (verbalState.paused) return;
    verbalState.questionSeconds++;
    const el = document.getElementById('vsess-qtimer');
    if (el) el.textContent = formatTime(verbalState.questionSeconds);
  }, 1000);

  if (isTimed) {
    verbalState.totalTimer = setInterval(() => {
      if (verbalState.paused) return;
      verbalState.totalSeconds--;
      const el = document.getElementById('vsess-ttimer');
      if (el) {
        el.textContent = formatTime(verbalState.totalSeconds);
        el.classList.toggle('urgent', verbalState.totalSeconds <= 60);
      }
      if (verbalState.totalSeconds <= 0) finishSession();
    }, 1000);
    const ttimer = document.getElementById('vsess-ttimer');
    if (ttimer) ttimer.textContent = formatTime(verbalState.totalSeconds);
  } else {
    // Quiz mode: show per-question time, no total countdown
    const twrap = document.getElementById('vsess-ttimer-wrap');
    if (twrap) twrap.style.display = 'none';
  }
}

function clearTimers() {
  if (verbalState.questionTimer) clearInterval(verbalState.questionTimer);
  if (verbalState.totalTimer)    clearInterval(verbalState.totalTimer);
}

function resetQuestionTimer() {
  verbalState.questionSeconds = 0;
  const el = document.getElementById('vsess-qtimer');
  if (el) el.textContent = '0:00';
}

function formatTime(secs) {
  const s = Math.max(0, secs);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// ── SESSION CONTROLS ──────────────────────────────────────────────────────────
let sessionControlsSetup = false;
function setupSessionControls() {
  if (sessionControlsSetup) return;
  sessionControlsSetup = true;

  document.getElementById('vsess-next').addEventListener('click', () => {
    if (verbalState.current < verbalState.qcount - 1) {
      verbalState.current++;
      resetQuestionTimer();
      renderCurrentQuestion();
    } else {
      finishSession();
    }
  });

  document.getElementById('vsess-back').addEventListener('click', () => {
    if (verbalState.current > 0) {
      verbalState.current--;
      resetQuestionTimer();
      renderCurrentQuestion();
    }
  });

  document.getElementById('vsess-pause').addEventListener('click', () => {
    verbalState.paused = !verbalState.paused;
    document.getElementById('vsess-pause').textContent = verbalState.paused ? '▶ Resume' : '⏸ Pause';
  });

  document.getElementById('vsess-exit').addEventListener('click', () => {
    if (confirm('Exit session? Progress will be lost.')) {
      clearTimers();
      sessionControlsSetup = false;
      showVerbalScreen('hub');
    }
  });
}

// ── FINISH SESSION ────────────────────────────────────────────────────────────
async function finishSession() {
  clearTimers();
  sessionControlsSetup = false;

  const correct = verbalState.answers.filter(a => a.answered && a.correct).length;
  const total   = verbalState.answers.filter(a => a.answered).length;
  const elapsed = Math.floor((Date.now() - verbalState.sessionStart) / 1000);

  // Save to Firestore session history
  const sessionRecord = {
    type:       verbalState.selectedType,
    difficulty: verbalState.difficulty,
    mode:       verbalState.mode,
    correct, total,
    elapsed,
    date: new Date().toISOString(),
  };
  verbalState.sessionHistory.unshift(sessionRecord);
  verbalState.sessionHistory = verbalState.sessionHistory.slice(0, 20); // keep last 20
  await saveVerbalHistory();

  renderResults(correct, total, elapsed);
  showVerbalScreen('results');
}

async function saveVerbalHistory() {
  if (!currentUser) return;
  try {
    const { doc, setDoc } = window._fs;
    await setDoc(doc(db, 'verbalHistory', currentUser.uid), {
      sessions: verbalState.sessionHistory,
      updatedAt: new Date().toISOString(),
    });
  } catch (e) { console.warn('Could not save verbal history:', e); }
}

async function loadVerbalHistory() {
  if (!currentUser) return;
  try {
    const { doc, getDoc } = window._fs;
    const snap = await getDoc(doc(db, 'verbalHistory', currentUser.uid));
    if (snap.exists()) {
      verbalState.sessionHistory = snap.data().sessions || [];
    }
  } catch (e) { console.warn('Could not load verbal history:', e); }
}

// ── RESULTS SCREEN ────────────────────────────────────────────────────────────
function renderResults(correct, total, elapsed) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  document.getElementById('vres-score-num').textContent = `${correct}/${total}`;
  document.getElementById('vres-circle').style.borderColor =
    pct >= 70 ? 'var(--green-border)' : pct >= 50 ? 'var(--yellow-text)' : 'var(--red-border)';

  const stats = document.getElementById('vres-stats');
  stats.innerHTML = `
    <div class="vres-stat"><div class="vres-stat-val">${pct}%</div><div class="vres-stat-label">Score</div></div>
    <div class="vres-stat"><div class="vres-stat-val">${correct}</div><div class="vres-stat-label">Correct</div></div>
    <div class="vres-stat"><div class="vres-stat-val">${total - correct}</div><div class="vres-stat-label">Wrong</div></div>
    <div class="vres-stat"><div class="vres-stat-val">${formatTime(elapsed)}</div><div class="vres-stat-label">Time</div></div>`;

  // Review each question
  const review = document.getElementById('vres-review');
  review.innerHTML = '';
  verbalState.questions.forEach((q, i) => {
    const a = verbalState.answers[i];
    if (!a || !a.answered) return;
    const item = document.createElement('div');
    item.className = `vres-review-item ${a.correct ? 'correct' : 'wrong'}`;

    const passagePreview = (q.passage || q.text || '').slice(0, 120) + '…';
    item.innerHTML = `
      <div class="vres-review-passage">${passagePreview}</div>
      <div class="vres-review-verdict">
        <span class="${a.correct ? 'correct' : 'wrong'}">${a.correct ? '✓ Correct' : '✗ Incorrect'}</span>
        <span style="color:var(--muted)">${q.type.toUpperCase()} · ${q.difficulty}</span>
        ${q.explanation ? `<span style="color:var(--muted);font-style:italic">${q.explanation.slice(0, 80)}…</span>` : ''}
      </div>`;
    review.appendChild(item);
  });

  document.getElementById('vres-back-hub').onclick = () => {
    showVerbalScreen('hub');
    renderVerbalHistory();
  };
  document.getElementById('vres-retry').onclick = startVerbalSession;
}

// ── HISTORY ───────────────────────────────────────────────────────────────────
function renderVerbalHistory() {
  const list = document.getElementById('verbal-history-list');
  if (!list) return;

  if (verbalState.sessionHistory.length === 0) {
    list.innerHTML = '<span style="color:var(--muted);font-size:12px">No sessions yet.</span>';
    return;
  }

  list.innerHTML = '';
  verbalState.sessionHistory.slice(0, 5).forEach(s => {
    const pct  = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
    const date = new Date(s.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const row  = document.createElement('div');
    row.className = 'vhist-row';
    row.innerHTML = `
      <span class="vhist-badge">${s.type.toUpperCase()}</span>
      <span class="vhist-score">${s.correct}/${s.total}</span>
      <span style="font-size:12px;color:var(--muted)">${pct}% · ${s.difficulty} · ${s.mode}</span>
      <span class="vhist-meta">${date} · ${formatTime(s.elapsed)}</span>`;
    list.appendChild(row);
  });
}

// Load verbal history when app starts
const _origLoadProgress = loadProgressFromFirestore;
// Patch to also load verbal history
async function loadProgressFromFirestore() {
  await _origLoadProgress.call(this);
  await loadVerbalHistory();
}
