export class Haiku {
  constructor(sentence1, sentence2, sentence3) {
    this.sentence1 = sentence1;
    this.sentence2 = sentence2;
    this.sentence3 = sentence3;
  }
  
  syllableCheck(word) {
    const vowelArray = ["a", "e", "i", "o", "u", "y"];
    const lowerWord = word.toLowerCase();
    let syllableCount = 0;
    let vowelLocationArray = [];
    
    for (let l = 0; l < lowerWord.length; l++) {
      for(let v = 0; v < vowelArray.length; v++) {
        if (lowerWord[l] === vowelArray[v]) {
          vowelLocationArray.push(l);
          syllableCount++;
        }
      }
    } 
    
    let firstVowel = 0;
    for (let i = 0; i < vowelLocationArray.length -1; i++) {
      if ((vowelLocationArray[i] + 1) === vowelLocationArray[i + 1]) {
        if (firstVowel!= 0) {
          syllableCount --;
        } else {
          firstVowel++;
        }
      }
    }
    
    if (lowerWord[lowerWord.length -1] === "e") {
      syllableCount --;
    }
    
    return syllableCount;
  }

  sentenceCheck() {
    let sentenceSyllables = 0;
    let sentenceArray = this.sentence1.split(" ");
    sentenceArray.forEach(function(element) {
      sentenceSyllables += Haiku.syllableCheck(element);
    }); 
    return sentenceSyllables;
  }
}