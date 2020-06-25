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
    console.log(vowelLocationArray);

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
}

// 1. Locate first vowel
// 2. Increase vowel Count by 1, increase Syllable count by 1, 
// 3. determine if firstvowel.location + 1 is also === vowel, 
// 4. IF true syllableCount --, repeat step 2 - 4, 
// 5. else, increase vowel count by 1. 



// list of vowel pairings:
// ee, ea, ie, ei, ai, ay, oo, ou, oi, ue, ui, uy, oa, 


// queue
// ue
// eu
// ue

// Count number of Vowels
// Does not count consecutive vowels (oo, ie. ui. etc)
// Does not count silent ending vowels(camE outsidE) keep ending "y's"
// 
// Divide sentence into a word array, 
// Loop over word array for Each word...