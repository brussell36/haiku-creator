import { Haiku } from '../src/haiku.js';

describe('Haiku', () => {
  let userHaiku;

  beforeEach( () => {
    userHaiku = new Haiku();
  });
  
  test('should determine if a haiku object exists', () => {
    expect(userHaiku).toBeTruthy(true);
  });
});