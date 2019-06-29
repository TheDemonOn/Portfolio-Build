// I suspect that repeated letters from multiple lists will give it a
// disproportionately higher show rate, such as i or y. While in development
// perhaps document things like show rate in its own program when doing fine
// adjustments and give that as additional information on the side of the
// project or a timeline of large steps or a part of a Youtube video.

// I think in order to make better words I should probably add more predefined
// bunches of letters that are common, check soybomb

// Here are some more rules to establish for better word generation:
// 1. Check the letters behind the rhymeKey and include any vowels there are.
// 2.

const Consonants = {
  beginning: [
    'b',
    'd',
    'f',
    'ph',
    'g',
    'h',
    'j',
    'c',
    'ch',
    'k',
    'l',
    'm',
    'n',
    'gn',
    'kn',
    'p',
    'q',
    'r',
    'wr',
    's',
    'sc',
    'sh',
    't',
    'th',
    'v',
    'w',
    'wh',
    'y',
    'z',
    'x',
  ],
  middle: [
    // In an attempt to reduce the usage of double graphemes; cc, mm,
    //I doubled the use of everything except those.
    'bb',
    'd',
    'dd',
    'f',
    'ph',
    'g',
    'gg',
    'h',
    'j',
    'ci',
    'c',
    'ch',
    'cc',
    'ck',
    'k',
    'l',
    'm',
    'mm',
    'n',
    'nn',
    'p',
    'pp',
    'q',
    'r',
    'rr',
    's',
    'ss',
    'sh',
    'ti',
    't',
    'tt',
    'th',
    'v',
    'w',
    'y',
    'z',
    'zz',
    'x',
    'd',
    'f',
    'ph',
    'g',
    'h',
    'j',
    'ci',
    'c',
    'ch',
    'ck',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    'sh',
    'ti',
    't',
    'th',
    'v',
    'w',
    'y',
    'z',
    'x',
  ],
  end: [
    'b',
    'bb',
    'd',
    'dd',
    'ed',
    'f',
    'ff',
    'ph',
    'g',
    'gg',
    'ge',
    'dge',
    'c',
    'k',
    'ck',
    'cc',
    'que',
    'l',
    'll',
    'm',
    'mm',
    'mb',
    'n',
    'nn',
    'ng',
    'p',
    'pp',
    'r',
    'rr',
    's',
    'se',
    'ss',
    'sc',
    'ce',
    'sh',
    't',
    'tt',
    'tch',
    'ed', // maybe remove
    'v',
    've',
    'w',
    'y',
    'z',
    'zz',
    'ze',
    'x',
  ],
  suffixHelper: [
    'f',
    'ph',
    'g',
    'h',
    'j',
    'k',
    'c',
    'd',
    'ch',
    'l',
    'm',
    'n',
    'p',
    'r',
    's',
    'sh',
    't',
    'th',
    'v',
    'w',
    'wh',
    'y',
    'z',
    'x',
  ],
  endRhymeGroup: [
    ['b', 'bb'],
    ['bb', 'b'],
    ['d', 'dd'],
    ['dd', 'd'],
    ['ed', 'edd'],
    ['f', 'ff', 'ph'],
    ['ff', 'f', 'ph'],
    ['ph', 'f', 'ff'],
    ['g', 'gg'],
    ['gg', 'g'],
    ['ge'],
    ['dge'],
    ['c', 'k', 'ck', 'cc'],
    ['k', 'c', 'ck', 'cc'],
    ['ck', 'k', 'c', 'cc'],
    ['cc', 'c', 'k', 'ck'],
    ['que'],
    ['l', 'll'],
    ['ll', 'l'],
    ['m', 'mm'],
    ['mm', 'm'],
    ['mb'],
    ['n', 'nn'],
    ['nn', 'n'],
    ['ng'],
    ['p', 'pp'],
    ['pp', 'p'],
    ['r', 'rr'],
    ['rr', 'r'],
    ['s', 'ss'],
    ['se'],
    ['ss', 's'],
    ['sc', 'sk'],
    ['ce'],
    ['sh'],
    ['t', 'tt'],
    ['tt', 't'],
    ['tch'],
    ['ed'], // maybe remove
    ['v', 've'],
    ['ve', 'v'],
    ['w'],
    ['y'],
    ['z', 'zz', 'ze'],
    ['zz', 'z', 'ze'],
    ['ze', 'zz', 'z'],
    ['x', 'xe'],
  ],
  prefix: [
    'non',
    'dis',
    'fore',
    'sub',
    'post',
    'mis',
    'trans',
    'co',
    'mono',
    'semi',
    'homo',
    'pre',
    'mid',
    'tri',
    're',
    'micro',
    'pro',
    'poly',
    'super',
    'macro',
    'hyper',
    'circum',
    'micro',
    'para',
    'therm',
    'post',
    'step',
    'twi',
    'with',
    'cryo',
    'de',
    'demo',
    'dia',
    'geo',
    'gyro',
    'hemi',
    'mal',
    'neo',
    'para',
    'ped',
    'pyro',
    'retro',
  ],
  prefixRhymeGroup: [
    ['non', 'nahn'],
    ['dis'],
    ['fore', 'for'],
    ['sub'],
    ['post', 'poste'],
    ['mis', 'miss'],
    ['trans'],
    ['co', 'ko'],
    ['mono'],
    ['semi'],
    ['homo'],
    ['pre'],
    ['mid'],
    ['tri'],
    ['re', 'ree'],
    ['micro'],
    ['pro'],
    ['poly'],
    ['super'],
    ['macro'],
    ['hyper'],
    ['circum'],
    ['micro'],
    ['para'],
    ['therm'],
    ['post'],
    ['step'],
    ['twi'],
    ['with'],
    ['cryo'],
    ['de'],
    ['demo'],
    ['dia'],
    ['geo'],
    ['gyro'],
    ['hemi'],
    ['mal'],
    ['neo'],
    ['para'],
    ['ped'],
    ['pyro'],
    ['retro'],
  ],
  suffix: [
    'dom',
    'ment',
    'ness',
    'ship',
    'sion',
    'tion',
    'ful',
    'less',
    'lest',
    'ly',
    'ward',
    'wards',
    'wise',
    'lar',
    'zoon',
    'zilla',
    'yer',
    'xeny',
    'xor',
    'ware',
    'work',
    'which',
    'wick',
    'valent',
    'vore',
    'vir',
    'tastic',
    'type',
    'scape',
    'ress',
    'pedia',
    'philiac',
    'phobia',
    'phonic',
    'proof',
    'nado',
    'neme',
    'naut',
    'nym',
    'mancy',
    'log',
    'leptic',
    'like',
    'kini',
    'hedra',
    'hedral',
    'holic',
    'henge',
    'gamy',
    'gasm',
    'graph',
    'ferous',
    'fest',
    'form',
    'dar',
    'dactyl',
    'derm',
    'drome',
    'cephaly',
    'core',
    'cratic',
    'biotic',
    'biosis',
    'bury',
  ],
  suffixRhymeGroup: [
    ['um', 'om'],
    ['ent'], // Maybe "ient" ?
    ['ess'],
    ['ip'],
    ['ion', 'un'],
    ['ion', 'un'],
    ['ul', 'ull'],
    ['ess'],
    ['est'],
    ['y', 'ee', 'ea'],
    ['ard'],
    ['ards'],
    ['ise', 'ize'],
    ['ar', 'ahr'],
    ['oon', 'une'],
    ['illa'],
    ['er'],
    ['eny'],
    ['or'],
    ['are', 'air'],
    ['urk', 'erk'],
    ['ich', 'itch'],
    ['ick'],
    ['alent'],
    ['or', 'ore'],
    ['ir', 'eer', 'ear'],
    ['astic'],
    ['ype'],
    ['ape', 'aip'],
    ['ess'],
    ['edia'],
    ['iliac'],
    ['obia'],
    ['onic'],
    ['oof'],
    ['ado', 'adoe'],
    ['eme', 'eem'],
    ['aut', 'ought'],
    ['ym'],
    ['ancy'],
    ['og'],
    ['eptic'],
    ['ike'],
    ['ini'],
    ['edra'],
    ['edral'],
    ['olic'],
    ['enge'],
    ['amy'],
    ['asm', 'asmm'],
    ['aph'],
    ['erous'],
    ['est'],
    ['orm'],
    ['ar'],
    ['actyl'],
    ['erm'],
    ['rome'],
    ['ephaly'],
    ['ore'],
    ['ratic'],
    ['iotic'],
    ['iosis'],
    ['ury'],
  ],
}

const Vowels = {
  beginning: [
    'a',
    'au',
    'e',
    'ea',
    'i',
    'o',
    'aw',
    'u',
    'ay',
    'ai',
    'ey',
    'ei',
    'ie',
    'oa', // Maybe get rid of this an bottom one
    'ou',
    'ow',
    'ar',
    'air',
    'ear',
    'are',
    'irr',
    'ere',
    'or',
  ],
  beginningRhymeGroup: [
    ['a'],
    ['au', 'aw'],
    ['e'],
    ['ea', 'ee'],
    ['i'],
    ['o', 'oh'],
    ['aw', 'au'],
    ['u'],
    ['ay'],
    ['ai'],
    ['ey'],
    ['ei'],
    ['ie'],
    ['oa'],
    ['ou'],
    ['ow'],
    ['ar', 'ahr'],
    ['air'],
    ['ear', 'ir', 'irr', 'eer'],
    ['are'],
    ['irr', 'ear', 'eer', 'ir'],
    ['ere', 'ir', 'irr', 'ear'],
    ['or'],
  ],
  middle: [
    'a',
    'au',
    'e',
    'ea',
    'i',
    'o',
    'aw',
    'ough',
    'u',
    'ay',
    'ai',
    'ey',
    'ei',
    'ea',
    'ee',
    'ie',
    'y',
    'igh',
    'oa',
    'ou',
    'ow',
    'ew',
    'oo',
    'oul',
    'oi',
    'oy',
    'ar',
    'air',
    'ear',
    'are',
    'irr',
    'ere',
    'eer',
    'or',
    'oor',
    'ur',
    'ir',
    'er',
    'a',
    'au',
    'e',
    'ea',
    'i',
    'o',
    'aw',
    'ough',
    'u',
    'ay',
    'ai',
    'ey',
    'ei',
    'ea',
    'ie',
    'y',
    'igh',
    'oa',
    'ou',
    'ow',
    'ew',
    'oo',
    'oul',
    'oi',
    'oy',
    'ar',
    'air',
    'ear',
    'are',
    'ere',
    'or',
    'ur',
    'ir',
    'er',
  ],
  middleRhymeGroup: [
    // copy and paste it all (after finishing rhymes) minus ones with two of the same letters in a row.
    ['a'],
    ['au', 'aw'],
    ['e'],
    ['ea', 'ee'],
    ['i', 'ee'],
    ['o', 'oh'],
    ['aw', 'ah'],
    ['ough'],
    ['u'],
    ['ay', 'ey', 'ei'],
    ['ai', 'igh'],
    ['ey', 'ay', 'ei'],
    ['ei', 'ay', 'ey'],
    ['ea', 'ee'],
    ['ie'],
    ['y'],
    ['igh', 'ai'],
    ['oa'],
    ['ou'],
    ['ow'],
    ['ew'],
    ['oo'],
    ['oul'],
    ['oi'],
    ['oy'],
    ['ar'],
    ['air'],
    ['ear'],
    ['are'],
    ['irr'],
    ['ere'],
    ['eer'],
    ['or'],
    ['oor'],
    ['ur'],
    ['ir'],
    ['er'],
  ],
  end: [
    'a',
    'au',
    'e',
    'ea',
    'i',
    'o',
    'aw',
    'ough',
    'u',
    'ay',
    'ai',
    'ey',
    'ei',
    'ie',
    'ee',
    'y',
    'igh',
    'oa',
    'ou',
    'ow',
    'ew',
    'oul',
    'oo',
    'oi',
    'oy',
    'ar',
    'ear',
    'air',
    'are',
    'irr',
    'ere',
    'eer',
    'or',
    'ore',
    'oor',
    'ur',
    'ir',
    'er',
  ],
  endRhymeGroup: [
    // This group will be accessed through the rhymeKey
    // and will select the corresponding array which includes the original
    // grapheme as a possible rhyme choice. A possible way to fine tune the selection
    // manually is to add more of the desireable choices to increase their appearance rate.
    ['a', 'ah', 'aw', 'au'],
    ['au', 'ow'], // Changed this because I always read au as ow
    ['e'],
    ['ea', 'y', 'i', 'ee', 'ie'],
    ['i', 'ea', 'y', 'ee'],
    ['o', 'ough', 'oe', 'uo', 'o', 'eau'],
    ['aw', 'a', 'ah'],
    ['ough', 'o', 'oh'],
    ['u', 'oo', 'ew', 'ou'],
    ['ay', 'ey', 'uay', 'eigh', 'ei'],
    ['ai', 'igh', 'ye'],
    ['ey', 'ay', 'eigh', 'ei'],
    ['ei', 'ey', 'ay', 'eigh'],
    ['ie', 'i', 'ee', 'ea', 'y'],
    ['ee', 'i', 'ie', 'ea', 'y'],
    ['y', 'ee', 'i', 'ie', 'ea'],
    ['igh', 'ye', 'ai'],
    ['oa', 'o', 'oe', 'ough', 'ou'],
    ['ou', 'oa', 'o', 'ough', 'oe'],
    ['ow', 'o', 'au', 'oe', 'ough', 'oa', 'eau'],
    ['ew', 'oo', 'ou', 'u'],
    ['oul', 'ole', 'oll', 'oal', 'ohl', 'ol'],
    ['oo', 'ew', 'ue', 'eu', 'u'],
    ['oi', 'oy', 'oui'],
    ['oy', 'oi', 'oui'],
    ['ar', 'ahr'],
    ['ear', 'eer', 'ier', 'irr', 'ere'],
    ['air', 'eir', 'are'],
    ['are', 'air', 'eir'],
    ['irr', 'ear', 'ere'],
    ['ere', 'ear', 'eer', 'ier', 'irr'],
    ['eer', 'ear', 'irr', 'ier', 'ere'],
    ['or', 'ore', 'oar', 'oor'],
    ['ore', 'or', 'oar', 'oor'],
    ['oor', 'ore', 'or', 'oar'],
    ['ur', 'er', 'eur'],
    ['ir', 'eer', 'ear', 'ier', 'eir', 'eare'],
    ['er', 'ur', 'urr', 'eur'],
  ],
  prefix: [
    'anti',
    'extra',
    'uni',
    'in',
    'inter',
    'un',
    'ex',
    'over',
    'under',
    'auto',
    'ante',
    'em',
    'en',
    'epi',
    'im',
    'infra',
    'intra',
    'omni',
    'out',
    'ambi',
    'amphi',
    'astro',
    'eco',
    'electro',
    'iso',
    'ob',
    'ideo',
  ],
  prefixRhymeGroup: [
    ['anti'],
    ['extra'],
    ['uni'],
    ['in'],
    ['inter'],
    ['un'],
    ['ex'],
    ['over'],
    ['under'],
    ['auto'],
    ['ante'],
    ['em'],
    ['en'],
    ['epi'],
    ['im'],
    ['infra'],
    ['intra'],
    ['omni'],
    ['out'],
    ['ambi'],
    ['amphi'],
    ['astro'],
    ['eco'],
    ['electro'],
    ['iso'],
    ['ob'],
    ['ideo'],
  ],
  suffix: [
    'acy',
    'al',
    'ance',
    'ence',
    'er',
    'or',
    'ism',
    'ist',
    'ity',
    'ty',
    'ate',
    'en',
    'ify',
    'fy',
    'ise',
    'ize',
    'able',
    'ible',
    'al',
    'esque',
    'ic',
    'ical',
    'ious',
    'ous',
    'ish',
    'ive',
    'y',
    // I don't know zone
    'ency',
    'oic',
    'aceous',
    'aholic',
    'amine',
    'archy',
    'arium',
    'athon',
    'emia',
    'ency',
    'ergy',
    'ette',
    'iasis',
    'ibility',
    'icide',
    'ing',
    'istical',
    'ium',
    'ization',
    'opsy',
    'otomy',
    'ose',
    'orama',
    'uronic',
  ],
  suffixRhymeGroup: [
    ['acy'],
    ['al', 'aul', 'all'],
    ['ance', 'ants', 'antz', 'anse'],
    ['ence', 'ense', 'ents'],
    ['er', 'ur', 'urr', 'uhr', 'rrh', 'eur'],
    ['or', 'ore', 'oar', 'oor'],
    ['ism', 'isum', 'izm', 'isme', 'izam', 'isholm'],
    ['ist', 'issed', 'idst', 'issed', 'yst', 'iste', 'isced'],
    ['ity', 'ittee', 'itty', 'iti', 'itee'],
    ['ea', 'y', 'ee'],
    ['ate', 'ait', 'aite', 'eight'],
    ['en', 'ehn', 'enn', 'enne', 'enh'],
    ['ai', 'igh', 'ye'],
    ['ai', 'igh', 'ye'],
    ['ise', 'ize', 'ies', 'ighs', 'eiz'],
    ['ise', 'ize', 'ies', 'ighs', 'eiz'],
    ['able', 'abel', 'aybill', 'abal'],
    ['ible', 'ibal', 'ibel'],
    ['al', 'all'],
    ['esque', 'esk', 'esc', 'eske'],
    ['ic', 'ick', 'ik'],
    ['ical', 'ichael', 'ikal'],
    ['ious', 'us', 'ous'],
    ['ous', 'us'],
    ['ish', 'iche'],
    ['ive'],
    ['y', 'ee', 'ea'],
    // I don't know zone
    ['ency'],
    ['oic', 'oik'],
    ['aceous'],
    ['aholic'],
    ['amine'],
    ['archy'],
    ['arium'],
    ['athon'],
    ['emia'],
    ['ency'],
    ['ergy'],
    ['ette'],
    ['iasis'],
    ['ibility'],
    ['icide'],
    ['ing'],
    ['istical'],
    ['ium'],
    ['ization', 'isation'],
    ['opsy'],
    ['otomy'],
    ['ose'],
    ['orama'],
    ['uronic'],
  ],
}
