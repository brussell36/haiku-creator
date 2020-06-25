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

  test('should count the syllables in first sentence', () => {
    expect(userHaiku.syllableCheck()).toBe('number');
  });
});