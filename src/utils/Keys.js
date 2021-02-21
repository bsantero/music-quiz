import keyofc from '../img/keysigs/none.png';
import sharp1 from '../img/keysigs/sharp1.png';
import sharp2 from '../img/keysigs/sharp2.png';
import sharp3 from '../img/keysigs/sharp3.png';
import sharp4 from '../img/keysigs/sharp4.png';
import sharp5 from '../img/keysigs/sharp5.png';
import sharp6 from '../img/keysigs/sharp6.png';
import sharp7 from '../img/keysigs/sharp7.png';
import flat1 from '../img/keysigs/flat1.png';
import flat2 from '../img/keysigs/flat2.png';
import flat3 from '../img/keysigs/flat3.png';
import flat4 from '../img/keysigs/flat4.png';
import flat5 from '../img/keysigs/flat5.png';
import flat6 from '../img/keysigs/flat6.png';
import flat7 from '../img/keysigs/flat7.png';

// F♯/G♭

const keySigUris = {
  0: { uri: keyofc, label: 'C', weighted: 'default' },
  1: {
    sharp: {
      uri: sharp7,
      label: 'C♯',
      weighted: 'sharp'
    },
    default: {
      uri: flat5,
      label: 'D♭',
      weighted: 'flat'
    }
  },
  2: { uri: sharp2, label: 'D', weighted: 'sharp' },

  3: { uri: flat3, label: 'E♭', weighted: 'flat' },
  4: { uri: sharp4, label: 'E', weighted: 'sharp' },
  5: { uri: flat1, label: 'F', weighted: 'flat' },
  6: {
    sharp: {
      uri: sharp6,
      label: 'F♯',
      weighted: 'sharp'
    },
    default: {
      uri: flat6,
      label: 'G♭',
      weighted: 'flat'
    }
  },
  7: { uri: sharp1, label: 'G', weighted: 'sharp' },
  8: { uri: flat4, label: 'A♭', weighted: 'flat' },
  9: { uri: sharp3, label: 'A', weighted: 'sharp' },
  10: { uri: flat2, label: 'B♭', weighted: 'flat' },
  11: {
    default: {
      uri: sharp5,
      label: 'B',
      default: [0],
      weighted: 'sharp'
    },
    flat: {
      uri: flat7,
      label: 'C♭',
      weighted: 'flat'
    }
  }
};

const defCircleSignatures = [
  keySigUris[0], // C
  keySigUris[7], // G
  keySigUris[2], // D
  keySigUris[9], // A
  keySigUris[4], // E
  keySigUris[11], // B
  keySigUris[6], // F#-Gb
  keySigUris[1], // C#-Db
  keySigUris[8], // G#-Ab
  keySigUris[3], // Eb
  keySigUris[10], // Bb
  keySigUris[5] // F
];

const sharpCircleSignatures = [
  keySigUris[0], // C
  keySigUris[7], // G
  keySigUris[2], // D
  keySigUris[9], // A
  keySigUris[4], // E
  keySigUris[11][0], // B
  keySigUris[6][0], // F#-Gb
  keySigUris[1][0], // C#-Db
  keySigUris[8], // G#-Ab
  keySigUris[3], // Eb
  keySigUris[10], // Bb
  keySigUris[5] // F
];

const flatCircleSignatures = [
  keySigUris[0], // C
  keySigUris[7], // G
  keySigUris[2], // D
  keySigUris[9], // A
  keySigUris[4], // E
  keySigUris[11][1], // B
  keySigUris[6][1], // F#-Gb
  keySigUris[1][1], // C#-Db
  keySigUris[8], // G#-Ab
  keySigUris[3], // Eb
  keySigUris[10], // Bb
  keySigUris[5] // F
];

const minorKeys = {
  0: { uri: keyofc, label: 'A' },
  1: { uri: sharp1, label: 'E' },
  2: { uri: sharp2, label: 'B' },
  3: { uri: sharp3, label: 'F♯' },
  4: { uri: sharp4, label: 'C♯' },
  5: {
    uri: null,
    sharp: {
      uri: sharp5,
      label: 'G♯'
    },
    flat: {
      uri: flat7,
      label: 'A♭'
    }
  },
  6: {
    uri: null,
    sharp: {
      uri: sharp6,
      label: 'D♯'
    },
    flat: {
      uri: flat6,
      label: 'E♭'
    }
  },
  7: {
    uri: null,
    sharp: {
      uri: sharp7,
      label: 'A♯'
    },
    flat: {
      uri: flat5,
      label: 'B♭'
    }
  },
  8: { uri: flat4, label: 'F' },
  9: { uri: flat3, label: 'C' },
  10: { uri: flat2, label: 'G' },
  11: { uri: flat1, label: 'D' }
};

const keySignatures = {
  0: {
    major: ['c'],
    minor: ['a'],
    uri: [keyofc]
  },
  1: {
    major: ['g'],
    minor: ['e'],
    uri: [sharp1]
  },
  2: {
    major: ['d'],
    minor: ['b'],
    uri: [sharp2]
  },
  3: {
    major: ['a'],
    minor: ['f♯'],
    uri: [sharp3]
  },
  4: {
    major: ['e'],
    minor: ['c♯'],
    uri: [sharp4]
  },
  5: {
    major: ['b', 'c♭'],
    minor: ['g♯', 'a♭'],
    uri: [sharp5, flat6]
  },
  6: {
    major: ['f♯', 'g♭'],
    minor: ['d♯', 'e♭'],
    uri: [sharp6, flat6]
  },
  7: {
    sharp: 7,
    flat: 0,
    major: ['c♯', 'd♭'],
    minor: ['a♯', 'b♭'],
    uri: [sharp7, flat5]
  },
  8: {
    major: ['a♭'],
    minor: ['f'],
    uri: [flat4]
  },
  9: {
    major: ['e♭'],
    minor: ['c'],
    uri: [flat3]
  },
  10: {
    major: ['b♭'],
    minor: ['g'],
    uri: [flat2]
  },
  11: {
    major: ['f'],
    minor: ['d'],
    uri: [flat1]
  }
};

export {
  keyofc,
  keySigUris,
  defCircleSignatures,
  sharpCircleSignatures,
  flatCircleSignatures
};