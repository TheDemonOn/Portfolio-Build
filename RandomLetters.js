function OVERLORD() {
  let assembledWordsArray = []
  let assembledWord = []
  let assembledSentence = []
  let keyHolder = []
  let keyHolder2 = []
  let gorientation = []
  let baseRhyme = []
  let rhyme1 = []
  let rhyme2 = []
  let rhymes1 = []
  let rhymes2 = []
  let wordInformation = {
    count: 0,
    line: 0
  }

  // This is the line between information storage and function logic.

  // This pulls information typed in and stores it.
  function letterCount() {
    wordInformation.count = document.getElementById("WPL").value
  }
  letterCount()

  function lineCount() {
    wordInformation.line = document.getElementById("lineNumber").value
  }
  lineCount()
  function orientation() {
    gorientation.push(document.getElementById("graphemeStructure").value)
  }
  orientation()

  if (gorientation === "VCVC" || "vcvc") {
    baseRhyme.push(wordAssembleVCVC())
    rhyme1.push(wordAssembleVCVCRhyme())
    rhyme2.push(wordAssembleVCVCRhyme2())
    rhymes1.push(wordAssembleVCVCRhymes())
    rhymes2.push(wordAssembleVCVCRhymes2())
  }

  function wordBuild() {
    // This function combines each generated array into a string then takes
    // that value and pushes it to the sentence. Then the array and variable used to assemble
    // the word are reset to empty values so it can be used for the next word.
    for (let b = 0; b < assembledWordsArray.length; b++) {
      assembledWord = assembledWord + assembledWordsArray[b]
    }
    assembledSentence.push(assembledWord)
    assembledWordsArray.length = 0
    assembledWord = ""
  }

  function wordAssembleVCVCRhyme() {
    // The VCVC represents: Vowel, Consonant, Vowel, Consonant.
    // Perhaps eventually modify this function to use foreach to learn
    // This function now creates a rhymeKey which I can use to track
    // what grapheme it chose and give the rhyme word a list of options.
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )

    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder.push(rhymeKey)

    assembledWordsArray.push(Vowels.end[rhymeKey])
  }

  function wordAssembleVCVCRhyme2() {
    // The VCVC represents: Vowel, Consonant, Vowel, Consonant.
    // Perhaps eventually modify this function to use foreach to learn
    // This function now creates a rhymeKey which I can use to track
    // what grapheme it chose and give the rhyme word a list of options.
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )

    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder2.push(rhymeKey)

    assembledWordsArray.push(Vowels.end[rhymeKey])
  }

  function wordAssembleVCVCRhymes() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )

    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    assembledWordsArray.push(Vowels.end[keyHolder[0]])
  }

  function wordAssembleVCVCRhymes2() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )

    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    assembledWordsArray.push(Vowels.end[keyHolder2[0]])
  }

  function wordAssembleVCVC() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )

    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    assembledWordsArray.push(
      Vowels.end[Math.floor(Math.random() * Vowels.end.length)]
    )
  }

  // This is the line between function logic and functions functioning.

  function rhymeStructure() {
    // Just for testing originally I think.
    for (let z = 0; z < wordInformation.count - 1; z++) {
      // The number here being how many words of VCVC you want to generate.
      // Any inputs less than one or nothing at all gives one word because
      // right now having an input or not is not a condition for the part outside
      // of the loop. This will be fixed when the inputs are sanitized.
      wordAssembleVCVC()
      wordBuild()
    }
    wordAssembleVCVCRhyme()
    wordBuild()
  }

  function rhymeStructure1122() {
    if (wordInformation.line == 1) {
      wordAssembleVCVCRhyme()
      return wordBuild()
    } else if (wordInformation.line % 2 === 0) {
      // If the word line is a multiple of 2
      for (let f = 0; f < wordInformation.line; f += 2) {
        // This will generate 2 lines at a time
        keyHolder.pop()
        for (let p = 0; p < wordInformation.count - 1; p++) {
          wordAssembleVCVC()
          wordBuild()
        }
        wordAssembleVCVCRhyme()
        wordBuild()
        // This is the second line.
        for (let r = 0; r < wordInformation.count - 1; r++) {
          wordAssembleVCVC()
          wordBuild()
        }
        wordAssembleVCVCRhymes()
        wordBuild()
      }
    } else {
      // More than one line but not a multiple of two.
      for (let f = 0; f < wordInformation.line - 2; f += 2) {
        // This will generate 2 lines at a time
        keyHolder.pop()
        for (let p = 0; p < wordInformation.count - 1; p++) {
          // Perhaps simplify this to a function?
          wordAssembleVCVC()
          wordBuild()
        }
        wordAssembleVCVCRhyme()
        wordBuild()
        // This is the second line.
        for (let r = 0; r < wordInformation.count - 1; r++) {
          wordAssembleVCVC()
          wordBuild()
        }
        wordAssembleVCVCRhymes()
        wordBuild()
      }
      for (let r = 0; r < wordInformation.count; r++) {
        // This doesn't rhyme anything because
        // of the structure chosen so it just builds as many words as there should be.
        wordAssembleVCVC()
        wordBuild()
      }
    }
  }

  //rhymeStructure1122() // For testing 1122

  function rhymeStructure1212() {
    let remainder = wordInformation.line % 4 // This will help determine how many extra lines to run
    let determiner = wordInformation.line - remainder
    let fullRuns = determiner / 4

    for (let p = 0; p < fullRuns; p++) {
      keyHolder.pop() // This clears rhymeKey for the next word.
      for (let p = 0; p < wordInformation.count - 1; p++) {
        wordAssembleVCVC()
        wordBuild()
      }
      wordAssembleVCVCRhyme()
      wordBuild()
      // This is the second line.
      keyHolder2.pop()
      for (let r = 0; r < wordInformation.count - 1; r++) {
        wordAssembleVCVC()
        wordBuild()
      }
      wordAssembleVCVCRhyme2()
      wordBuild()
      // Third line starts here
      for (let p = 0; p < wordInformation.count - 1; p++) {
        wordAssembleVCVC()
        wordBuild()
      }
      wordAssembleVCVCRhymes()
      wordBuild()
      // Fourth line starts here
      for (let p = 0; p < wordInformation.count - 1; p++) {
        wordAssembleVCVC()
        wordBuild()
      }
      wordAssembleVCVCRhymes2()
      wordBuild()
    }

    if (remainder === 1) {
      for (let p = 0; p < wordInformation.count; p++) {
        wordAssembleVCVC()
        wordBuild()
      }
    } else if (remainder === 2) {
      for (let p = 0; p < wordInformation.count - 1; p++) {
        wordAssembleVCVC()
        wordBuild()
      }
      keyHolder.pop()
      wordAssembleVCVCRhyme()
      wordBuild()
      for (let p = 0; p < wordInformation.count - 1; p++) {
        wordAssembleVCVC()
        wordBuild()
      }
      keyHolder2.pop()
      wordAssembleVCVCRhyme2()
      wordBuild()
    } else if (remainder === 3) {
      for (let p = 0; p < wordInformation.count - 1; p++) {
        wordAssembleVCVC()
        wordBuild()
      }
      keyHolder.pop()
      wordAssembleVCVCRhyme()
      wordBuild()
      for (let p = 0; p < wordInformation.count - 1; p++) {
        wordAssembleVCVC()
        wordBuild()
      }
      keyHolder2.pop()
      wordAssembleVCVCRhyme2()
      wordBuild()
      for (let p = 0; p < wordInformation.count - 1; p++) {
        wordAssembleVCVC()
        wordBuild()
      }
      wordAssembleVCVCRhymes()
      wordBuild()
    }
  }

  rhymeStructure1212() // For testing 1212

  function lineGenerator() {
    for (let b = 0; b < wordInformation.line; b++) {
      rhymeStructure() // This will change to reflect the function of the
      // type of rhyming pattern you want.
    }
  }
  // lineGenerator()
  console.log(keyHolder)

  console.log(wordInformation.count)

  console.log(assembledSentence)
  alert(assembledSentence.join(" ")) // Displays with spaces separating the words.
}
