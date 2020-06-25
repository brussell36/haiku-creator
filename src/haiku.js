export class Haiku {
  constructor(sentence1, sentence2, sentence3) {
    this.sentence1 = sentence1;
    this.sentence2 = sentence2;
    this.sentence3 = sentence3;
  }

  syllableCheck(word) {
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
    const lowerWord = word.toLowerCase();
    let vowelCount = 0;

    for (const letter of lowerWord) {
      for(const vowel of vowelArray) {
        if (vowel === letter) {
          vowelCount++;
        }
      }
    }

    if (lowerWord[lowerWord.length -1] === "e") {
      vowelCount --;
    }

    return vowelCount;

  }
}



// Count number of Vowels
// Does not count consecutive vowels (oo, ie. ui. etc)
// Does not count silent ending vowels(camE outsidE) keep ending "y's"
// 
// Divide sentence into a word array, 
// Loop over word array for Each word...