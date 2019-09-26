const {
  capitalize,
  exclaim,
  firstCharacter,
  lastCharacter,
  oneCharacter,
  twoCharacters,
  initials,
  yeller,
} = require('./main');


describe('capitalize', () => {
  test('returns upper cased version of a string', () => {
    expect(capitalize('Speed Racer Was Great'))
      .toBe('SPEED RACER WAS GREAT');
    });
});

describe('exclaim', () => {
  test('adds an exclamation point at the end of the given string', () => {
    expect(exclaim('hello')).toBe('hello!')
  })

  test('adds a second exclamation point if there already is one', () => {
    expect(exclaim('hello!')).toBe('hello!!')
  })
})

describe('firstCharacter', () => {
  test('returns only the first character of a string', () => {
    expect(firstCharacter('Colin')).toBe('C');
  })

  test('returns a space if the string begins with one', () => {
    expect(firstCharacter(' Spacey McSpacerson')).toBe(' ');
  })
})

describe('lastCharacter', () => {
  test('returns only the last character of a string', () => {
    expect(lastCharacter('mcLasterton')).toBe('n');
  })

  test('returns a space if the string ends with one', () => {
    expect(lastCharacter('Spacey McSpacerson ')).toBe(' ')
  })
})

describe('oneCharacter', () => {
  test('returns an arbitrary character', () => {
    expect(oneCharacter('hello there', 8)).toBe('e');
  })
})

describe('twoCharacters', () => {
  test('returns arbitrary characters from the given string', () => {
    expect(twoCharacters('I want a bagel!', 2, 11)).toBe('wg')
  })

})

describe('initials', () => {
  test('returns the initials of a full name', () => {
    expect(initials('Herman Melville')).toBe('H.M.')
  });
  

  test('returns the first initial twice if given only one name', () => {
    expect(initials('Colin')).toBe('C.C.');
  })

  test('returns only two initials if given three names', () => {
    expect(initials('Colin Raymond Jaffe')).toBe('C.R.')
  })
})

describe('yeller', () => {
  test('adds three exclamation points and capitalizes', () => {
    expect(yeller('hey')).toBe('HEY!!!');
  })
})