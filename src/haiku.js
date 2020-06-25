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
    let vowelLocationArray = [];

    for (const letter of lowerWord) {
      for(const vowel of vowelArray) {
        if (letter === vowel) {
          vowelLocationArray.push(letter.index);
          vowelCount++;
        }
      }
    } // if the index numbers of vowelLocationArray are consecutive, then remove 1 from vowelCount?
      // index number +=1 === index number or index number -=1 === index number [1, 3, 4] => "1 + 1 = 2 =/= 3 (not consecutive) and 1 - 1 = 0 == null (not consecutive)"   ///  "3 + 1 = 4 === 4 (consecutive!)"   /// "4 + 1 = 5 ="
    for (const index = 0; index < vowelLocationArray.length; index++) {
      if ((vowelLocationArray[index] + 1) ===  vowelLocationArray[index + 1]) {
        vowelCount --;
      }
    }
    
    if (lowerWord[lowerWord.length -1] === "e") {
      vowelCount --;
    }
    
    return vowelCount;

  }
}

1. Locate first vowel
2. Increase vowel Count by 1, increase Syllable count by 1, 
3. determine if firstvowel.location + 1 is also === vowel, 
4. IF true syllableCount --, repeat step 2 - 4, 
5. else, increase vowel count by 1. 



list of vowel pairings:
ee, ea, ie, ei, ai, ay, oo, ou, oi, ue, ui, uy, oa, 


queue
ue
eu
ue

// Count number of Vowels
// Does not count consecutive vowels (oo, ie. ui. etc)
// Does not count silent ending vowels(camE outsidE) keep ending "y's"
// 
// Divide sentence into a word array, 
// Loop over word array for Each word...