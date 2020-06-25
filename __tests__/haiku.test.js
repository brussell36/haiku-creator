import { Haiku } from '../src/haiku.js';

describe('Haiku', () => {
  let userHaiku;

  beforeEach( () => {
    userHaiku = new Haiku();
  });
  
  test('should determine if a haiku object exists', () => {
    expect(userHaiku).toBeTruthy();
  });

  test('should check that the haiku has exactly 3 lines', () => {
    expect(userHaiku.sentence1).toBe(true);
    expect(userHaiku.sentence2).toBe(true);
    expect(userHaiku.sentence3).toBe(true);
  });
});