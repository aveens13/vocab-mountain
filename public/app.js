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
    {w:"aloof",m:"not warm or friendly; impersonal"},{w:"clangor",m:"a disturbingly loud noise"},{w:"conventional",m:"adhering to established practices or accepted standards"},{w:"debunk",m:"prove a belief or idea false"},{w:"diminutive",m:"exceptionally small in size or stature"},{w:"discernible",m:"able to be recognized or understood"},{w:"enigmatic",m:"hard to understand; mysterious"},{w:"estranged",m:"emotionally distanced from someone"},{w:"extravagant",m:"excessive, especially in terms of cost"},{w:"fanciful",m:"highly imaginative; unrealistic"},{w:"frivolous",m:"1. lacking in seriousness or importance\n2. (of a person) not taking things seriously"},{w:"heterogeneous",m:"composed of varying, diverse elements"},{w:"imperious",m:"having an arrogant or domineering manner"},{w:"impertinent",m:"1. disrespectful or inappropriate\n2. irrelevant or unrelated to something"},{w:"invasive",m:"1. infringing on others privacy\n2. spreading rapidly and causing harm"},{w:"irresolute",m:"uncertain or lacking determination"},{w:"laudable",m:"worthy of admiration or praise"},{w:"lax",m:"not diligent or careful; casual"},{w:"marginalize",m:"treat someone or something as insignificant"},{w:"panache",m:"a stylish and confident manner"},{w:"plodding",m:"moving slowly or laboriously"},{w:"pretentious",m:"attempting to impress through false claims"},{w:"recalcitrant",m:"stubborn; refusing to cooperate"},{w:"rife",m:"widespread or common"},{w:"sanguine",m:"optimistic, especially in a difficult situation"},{w:"sycophant",m:"a person who praises others to gain favor"},{w:"temerity",m:"excessive confidence or boldness"},{w:"tenuous",m:"weak or insubstantial"},{w:"turbulent",m:"full of conflict or chaos"},{w:"zealous",m:"enthusiastic and devoted"},
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
];

// ── FIREBASE BOOTSTRAP ────────────────────────────────────────────────────────
// Config is fetched from a serverless function — never hardcoded here.
let db, auth, currentUser, userFeatureFlags;

async function bootstrap() {
  try {
    // 1. Fetch Firebase config from our secure serverless function
    const res = await fetch('/api/firebase-config');
    if (!res.ok) throw new Error('Could not load app config');
    const firebaseConfig = await res.json();

    // 2. Dynamically load Firebase SDK
    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } =
      await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js');
    const { getFirestore, doc, getDoc, setDoc, collection, getDocs, updateDoc } =
      await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');

    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);

    // Store Firestore helpers globally
    window._fs = { doc, getDoc, setDoc, collection, getDocs, updateDoc };
    window._auth = { signInWithEmailAndPassword, signOut, onAuthStateChanged };

    // 3. Wire up auth screen
    setupAuthUI();

    // 4. Listen for auth state
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
    // Fetch feature flags for this user from Firestore
    const { doc, getDoc } = window._fs;
    const flagsDoc = await getDoc(doc(db, 'users', user.uid));

    if (!flagsDoc.exists()) {
      // First time user — create default flags (all features on)
      const { setDoc } = window._fs;
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        features: { vocabmountain: true, dailyprogress: true },
        createdAt: new Date().toISOString(),
      });
      userFeatureFlags = { vocabmountain: true, dailyprogress: true };
    } else {
      userFeatureFlags = flagsDoc.data().features || {};
    }

    const hasVocab = !!userFeatureFlags.vocabmountain;
    const hasDaily = !!userFeatureFlags.dailyprogress;

    if (!hasVocab && !hasDaily) {
      showScreen('blocked');
      return;
    }

    // Set up nav tabs based on feature flags
    setupNavTabs(hasVocab, hasDaily);

    // Load progress from Firestore
    await loadProgressFromFirestore();

    // Start on the first available feature
    if (hasVocab) {
      showTab('vocab');
    } else {
      showTab('daily');
    }

    showScreen('main');

  } catch (err) {
    console.error('Load user error:', err);
    document.getElementById('app-loading').textContent = 'Error loading your profile. Please refresh.';
  }
}

// ── SCREEN MANAGEMENT ─────────────────────────────────────────────────────────
function showScreen(screen) {
  document.getElementById('app-loading').style.display = screen === 'loading' ? 'flex' : 'none';
  document.getElementById('auth-screen').style.display  = screen === 'auth' ? 'flex' : 'none';
  document.getElementById('main-app').style.display     = screen === 'main' ? 'block' : 'none';
  document.getElementById('feature-blocked').style.display = screen === 'blocked' ? 'flex' : 'none';
}

// ── NAV TABS ──────────────────────────────────────────────────────────────────
function setupNavTabs(hasVocab, hasDaily) {
  const navTabs = document.getElementById('nav-tabs');
  const vocabTab = document.querySelector('[data-tab="vocab"]');
  const dailyTab = document.querySelector('[data-tab="daily"]');

  // Only show tabs if user has both features
  if (hasVocab && hasDaily) {
    navTabs.style.display = 'flex';
  }

  if (!hasVocab) vocabTab.style.display = 'none';
  if (!hasDaily) dailyTab.style.display = 'none';

  navTabs.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => showTab(tab.dataset.tab));
  });
}

function showTab(tab) {
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('vocab-view').style.display = tab === 'vocab' ? 'block' : 'none';
  document.getElementById('daily-view').style.display = tab === 'daily' ? 'block' : 'none';

  // Show topbar controls only for vocab tab
  const vocabControls = ['groupSlider', 'sliderVal', 'shuffleAll', 'resetAll', 'saveProgress', 'dirtyDot', 'stats'];
  const sliderWrap = document.querySelector('.slider-wrap');
  const keysHint = document.querySelector('.keys-hint');
  const isVocab = tab === 'vocab';
  if (sliderWrap) sliderWrap.style.display = isVocab ? 'flex' : 'none';
  if (keysHint) keysHint.style.display = isVocab ? 'flex' : 'none';
  ['shuffleAll', 'resetAll', 'saveProgress', 'dirtyDot', 'stats'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = isVocab ? '' : 'none';
  });

  if (tab === 'daily') renderDailyProgress();
}

// ── STATE ─────────────────────────────────────────────────────────────────────
const COLS = 6;
let maxGroup = 6;
let groups = [];
let cellColors = {};
let sel = { col: 0, row: 0 };
let modalOpen = false;
let isDirty = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── FIRESTORE PERSISTENCE ─────────────────────────────────────────────────────
async function loadProgressFromFirestore() {
  if (!currentUser) return;
  try {
    const { doc, getDoc } = window._fs;
    const snap = await getDoc(doc(db, 'progress', currentUser.uid));
    const saved = snap.exists() ? snap.data() : null;
    initVocabState(saved);
    renderDailyProgress();
  } catch (e) {
    console.warn('Could not load progress, using defaults:', e);
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
    // Record today's stats for daily progress
    dailyLog: buildDailyLog(),
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
    setTimeout(() => {
      btn.textContent = '💾 Save';
      btn.classList.remove('saved');
    }, 1800);
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

// ── DAILY LOG ─────────────────────────────────────────────────────────────────
function buildDailyLog() {
  let green = 0, red = 0, total = 0;
  groups.forEach((g, gi) => g.words.forEach((_, ri) => {
    total++;
    const k = `${gi}-${ri}`;
    if (cellColors[k] === 'green') green++;
    else if (cellColors[k] === 'red') red++;
  }));
  const today = new Date().toISOString().slice(0, 10);
  return { date: today, green, red, total };
}

function renderDailyProgress() {
  if (!userFeatureFlags?.dailyprogress) return;
  const grid = document.getElementById('daily-grid');
  if (!grid) return;

  // Read today's stats from current state
  let green = 0, red = 0, total = 0;
  groups.forEach((g, gi) => g.words.forEach((_, ri) => {
    total++;
    const k = `${gi}-${ri}`;
    if (cellColors[k] === 'green') green++;
    else if (cellColors[k] === 'red') red++;
  }));

  const today = new Date().toISOString().slice(0, 10);
  const pct = total ? Math.round(((green + red) / total) * 100) : 0;

  grid.innerHTML = `
    <div class="daily-card">
      <div class="date">Today · ${today}</div>
      <div class="score">${green + red}<span style="font-size:12px;color:var(--muted)">/${total}</span></div>
      <div class="sub">reviewed · ${pct}%</div>
    </div>
    <div class="daily-card">
      <div class="date">Known ✓</div>
      <div class="score" style="color:var(--green-text)">${green}</div>
      <div class="sub">marked green</div>
    </div>
    <div class="daily-card">
      <div class="date">Learning ✗</div>
      <div class="score" style="color:var(--red-text)">${red}</div>
      <div class="sub">marked red</div>
    </div>
    <div class="daily-card">
      <div class="date">Groups shown</div>
      <div class="score">${maxGroup}</div>
      <div class="sub">of ${RAW_GROUPS.length}</div>
    </div>
  `;
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
  cellColors = savedState ? (savedState.cellColors || {}) : {};
  Object.keys(cellColors).forEach(k => {
    const gi = parseInt(k.split('-')[0]);
    if (gi >= maxGroup) delete cellColors[k];
  });
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
      const col = document.createElement('div');
      col.className = 'group-col';
      const hdr = document.createElement('div');
      hdr.className = 'group-header';
      hdr.innerHTML = `${group.name} <span class="shuffle-icon">⇄</span>`;
      hdr.title = 'Click to shuffle this group (S)';
      hdr.addEventListener('click', () => shuffleGroup(gIdx));
      col.appendChild(hdr);
      group.words.forEach((item, rowIdx) => {
        const cell = document.createElement('div');
        cell.className = 'word-cell';
        cell.dataset.col = gIdx;
        cell.dataset.row = rowIdx;
        cell.textContent = item.w;
        cell.title = item.w;
        const colorKey = `${gIdx}-${rowIdx}`;
        if (cellColors[colorKey]) cell.classList.add(cellColors[colorKey]);
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
    const gIdx = +cell.dataset.col;
    const rowIdx = +cell.dataset.row;
    const colorKey = `${gIdx}-${rowIdx}`;
    cell.className = 'word-cell';
    if (cellColors[colorKey]) cell.classList.add(cellColors[colorKey]);
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
    const k = `${gi}-${ri}`;
    if (cellColors[k] === 'green') green++;
    else if (cellColors[k] === 'red') red++;
  }));
  document.getElementById('stats').innerHTML =
    `<span class="g">✓${green}</span> <span class="r">✗${red}</span> / ${total}`;
}

// ── NAVIGATION ────────────────────────────────────────────────────────────────
function move(dir) {
  const numCols = groups.length;
  let { col, row } = sel;
  if (dir === 'up') row = row > 0 ? row - 1 : groups[col].words.length - 1;
  else if (dir === 'down') row = row < groups[col].words.length - 1 ? row + 1 : 0;
  else if (dir === 'left') { col = col > 0 ? col - 1 : numCols - 1; row = Math.min(row, groups[col].words.length - 1); }
  else if (dir === 'right') { col = col < numCols - 1 ? col + 1 : 0; row = Math.min(row, groups[col].words.length - 1); }
  sel = { col, row };
  renderCells();
}

// ── COLOR ─────────────────────────────────────────────────────────────────────
function markColor(color) {
  const key = `${sel.col}-${sel.row}`;
  cellColors[key] = cellColors[key] === color ? '' : color;
  markDirty();
  renderCells();
  if (modalOpen) updateModal();
}

// ── SHUFFLE ───────────────────────────────────────────────────────────────────
function shuffleGroup(gIdx) {
  groups[gIdx].words = shuffle(groups[gIdx].words);
  groups[gIdx].words.forEach((_, ri) => delete cellColors[`${gIdx}-${ri}`]);
  markDirty();
  render();
}
function shuffleAll() {
  groups.forEach((g, gi) => {
    g.words = shuffle(g.words);
    g.words.forEach((_, ri) => delete cellColors[`${gi}-${ri}`]);
  });
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
  const item = group.words[sel.row];
  const key = `${sel.col}-${sel.row}`;
  const color = cellColors[key] || '';
  document.getElementById('modal-word').textContent = item.w;
  document.getElementById('modal-group').textContent = `${group.name} · word ${sel.row + 1} of ${group.words.length}`;
  const lines = item.m.split('\n');
  let html = lines.length > 1
    ? '<ol>' + lines.map(l => `<li>${l.replace(/^\d+\.\s*/, '')}</li>`).join('') + '</ol>'
    : `<p>${item.m}</p>`;
  document.getElementById('modal-meaning').innerHTML = html;
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

// ── CONTROLS SETUP (called once after state loads) ────────────────────────────
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
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key === ' ' || e.key === 'd' || e.key === 'D') { e.preventDefault(); modalOpen ? closeModal() : openModal(); return; }
    if (modalOpen) {
      if (e.key === 'g' || e.key === 'G') { markColor('green'); return; }
      if (e.key === 'r' || e.key === 'R') { markColor('red'); return; }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { move('down'); return; }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { move('up'); return; }
      return;
    }
    if (e.key === 'ArrowUp') { e.preventDefault(); move('up'); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); move('down'); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); move('left'); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); move('right'); }
    else if (e.key === 'g' || e.key === 'G') markColor('green');
    else if (e.key === 'r' || e.key === 'R') markColor('red');
  });

  // Auto-save on page hide
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && isDirty) saveProgressToFirestore();
  });
}

// ── KICK OFF ──────────────────────────────────────────────────────────────────
bootstrap();
