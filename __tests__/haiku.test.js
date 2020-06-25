import { Haiku } from '../src/haiku.js';

describe('Haiku', () => {
  let userHaiku;

  beforeEach( () => {
    userHaiku = new Haiku("I like kittens, YEAH!", "They are really fluffy, YEAH!", "OMG KITTENS!");
  });
  
  test('should determine if a haiku object exists', () => {
    expect(userHaiku).toBeTruthy();
  });

  test('should check that the haiku has exactly 3 lines', () => {
    expect(userHaiku.sentence1).toBe("I like kittens, YEAH!");
    expect(userHaiku.sentence2).toBe("They are really fluffy, YEAH!");
    expect(userHaiku.sentence3).toBe("OMG KITTENS!");
  });

  test('should count the number of syllables in a word, not counting silent ending "e"', () => {
    expect(userHaiku.syllableCheck("I")).toBe(1);
    expect(userHaiku.syllableCheck("Came")).toBe(1);
  });

  test('should count the syllables in a word', () => {
    expect(userHaiku.syllableCheck("queue")).toEqual(1);
    expect(userHaiku.syllableCheck("biology")).toEqual(4);
    expect(userHaiku.syllableCheck("mississippi")).toEqual(4);
    expect(userHaiku.syllableCheck("javascript")).toEqual(3);
    expect(userHaiku.syllableCheck("supercalifragilisticexpialidocious")).toEqual(14);
    expect(userHaiku.syllableCheck("automatopoeia")).toEqual(6);
  });
  
});