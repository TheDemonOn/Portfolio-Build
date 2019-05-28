// I suspect that repeated letters from multiple lists will give it a
// disproportionately higher show rate, such as i or y. While in development
// perhaps document things like show rate in its own program when doing fine
// adjustments and give that as additional information on the side of the
// project or a timeline of large steps or a part of a Youtube video.

// I think in order ti make better words I should probably add more predefined
// bunches of letters that are common, check soybomb
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
    'i',
    'z',
    'x',
  ],
  middle: [
    'bb',
    'dd',
    'ed',
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
    'l',
    'm',
    'mm',
    'n',
    'nn',
    'p',
    'pp',
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
    'i',
    'z',
    'zz',
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
    'ed',
    'v',
    've',
    'w',
    'y',
    'i',
    'z',
    'zz',
    'ze',
    'x',
  ],
  prefix: 'something',
  suffix: 0,
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
    'y',
    'ie',
    'oa',
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
    'o',
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
  prefix: 0,
  suffix: 0,
}
