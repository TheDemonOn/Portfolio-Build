function OVERLORD() {
  let assembledWordsArray = []
  let assembledWord = []
  let assembledSentence = []
  let keyHolder = []
  let keyHolder2 = []
  var gorientation = ''
  var baseRhyme = ''
  var rhyme1 = ''
  var rhyme2 = ''
  var rhymes1 = ''
  var rhymes2 = ''
  let wordInformation = {
    count: 0,
    line: 0,
  }
  let vowelPrecedingCheckerRegex = /[aeiou]/gi // Experiment using y as well.

  // This is the line between information storage and function logic.

  // This pulls information typed in and stores it.
  function letterCount() {
    wordInformation.count = document.getElementById('WPL').value
  }
  letterCount()

  function lineCount() {
    wordInformation.line = document.getElementById('lineNumber').value
  }
  lineCount()
  function orientation() {
    gorientation = document.getElementById('graphemeStructure').value
  }
  orientation()

  if (gorientation == 'CVCV' || gorientation == 'cvcv') {
    baseRhyme = wordAssembleCVCV
    rhyme1 = wordAssembleCVCVRhyme
    rhyme2 = wordAssembleCVCVRhyme2
    rhymes1 = wordAssembleCVCVRhymes
    rhymes2 = wordAssembleCVCVRhymes2
  }

  if (gorientation == 'VCVC' || gorientation == 'vcvc') {
    baseRhyme = wordAssembleVCVC
    rhyme1 = wordAssembleVCVCRhyme
    rhyme2 = wordAssembleVCVCRhyme2
    rhymes1 = wordAssembleVCVCRhymes
    rhymes2 = wordAssembleVCVCRhymes2
  }

  if (gorientation == 'VCV' || gorientation == 'vcv') {
    baseRhyme = wordAssembleVCV
    rhyme1 = wordAssembleVCVRhyme
    rhyme2 = wordAssembleVCVRhyme2
    rhymes1 = wordAssembleVCVRhymes
    rhymes2 = wordAssembleVCVRhymes2
  }

  if (gorientation == 'CVC' || gorientation == 'cvc') { // A problem with words under this generation 
    // is that it doesn't really rhyme if I just take the last consonant and attach it to the next, 
    // unless it includes the previous connecting vowels
    baseRhyme = wordAssembleCVC
    rhyme1 = wordAssembleCVCRhyme
    rhyme2 = wordAssembleCVCRhyme2
    rhymes1 = wordAssembleCVCRhymes
    rhymes2 = wordAssembleCVCRhymes2
  }

  if (gorientation == 'CV' || gorientation == 'cv') {
    baseRhyme = wordAssembleCV
    rhyme1 = wordAssembleCVRhyme
    rhyme2 = wordAssembleCVRhyme2
    rhymes1 = wordAssembleCVRhymes
    rhymes2 = wordAssembleCVRhymes2
  }

  if (gorientation == 'VC' || gorientation == 'vc') {
    baseRhyme = wordAssembleVC
    rhyme1 = wordAssembleVCRhyme
    rhyme2 = wordAssembleVCRhyme2
    rhymes1 = wordAssembleVCRhymes
    rhymes2 = wordAssembleVCRhymes2
  }
  // Add more rhyming structures, remember this won't necessarily be input from the user
  // but rather when building random words will randomly choose which structure to use.

  function wordBuild() {
    // This function combines each generated array into a string then takes
    // that value and pushes it to the sentence. Then the array and variable used to assemble
    // the word are reset to empty values so it can be used for the next word.
    for (let b = 0; b < assembledWordsArray.length; b++) {
      assembledWord = assembledWord + assembledWordsArray[b]
    }
    assembledSentence.push(assembledWord)
    assembledWordsArray.length = 0
    assembledWord = ''
  }
  //
  function wordAssembleCVC() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )

    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(
      Consonants.end[Math.floor(Math.random() * Consonants.end.length)]
    )
  }
  function wordAssembleCVCRhyme() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )
    let precedingRhyme = // This was planned to be used to add vowels before the rhymeKey to make it flow better
      // But I neglected the structure for rhyming not with the exact same letter but a list of set rhymes.
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    assembledWordsArray.push(precedingRhyme)

    let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder.push(rhymeKey)

    assembledWordsArray.push(Consonants.end[rhymeKey])
  }
  function wordAssembleCVCRhymes() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )

    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(Consonants.end[keyHolder[0]])
  }
  function wordAssembleCVCRhyme2() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )

    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder2.push(rhymeKey)

    assembledWordsArray.push(Consonants.end[rhymeKey])
  }
  function wordAssembleCVCRhymes2() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(Consonants.end[keyHolder2[0]])
  }
  //
  function wordAssembleVC() {
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )
    assembledWordsArray.push(
      Consonants.end[Math.floor(Math.random() * Consonants.end.length)]
    )
  }
  function wordAssembleVCRhyme() {
    let precedingRhyme = // This was planned to be used to add vowels before the rhymeKey to make it flow better
      // But I neglected the structure for rhyming not with the exact same letter but a list of set rhymes.
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    assembledWordsArray.push(precedingRhyme)

    let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder.push(rhymeKey)

    assembledWordsArray.push(Consonants.end[rhymeKey])
  }
  function wordAssembleVCRhymes() {
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )
    assembledWordsArray.push(Consonants.end[keyHolder[0]])
  }
  function wordAssembleVCRhyme2() {
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )
    let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder2.push(rhymeKey)

    assembledWordsArray.push(Consonants.end[rhymeKey])
  }
  function wordAssembleVCRhymes2() {
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )
    assembledWordsArray.push(Consonants.end[keyHolder2[0]])
  }
  //
  function wordAssembleCV() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )
    assembledWordsArray.push(
      Vowels.end[Math.floor(Math.random() * Vowels.end.length)]
    )
  }
  function wordAssembleCVRhyme() {
    let precedingRhyme = // This was planned to be used to add vowels before the rhymeKey to make it flow better
      // But I neglected the structure for rhyming not with the exact same letter but a list of set rhymes.
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    assembledWordsArray.push(precedingRhyme)

    let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder.push(rhymeKey)

    assembledWordsArray.push(Vowels.end[rhymeKey])
  }
  function wordAssembleCVRhymes() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )
    assembledWordsArray.push(Vowels.end[keyHolder[0]])
  }
  function wordAssembleCVRhyme2() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )
    let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder2.push(rhymeKey)

    assembledWordsArray.push(Vowels.end[rhymeKey])
  }
  function wordAssembleCVRhymes2() {
    assembledWordsArray.push(
      Consonants.beginning[
        Math.floor(Math.random() * Consonants.beginning.length)
      ]
    )
    assembledWordsArray.push(Vowels.end[keyHolder2[0]])
  }
  //
  function wordAssembleVCV() {
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )

    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    assembledWordsArray.push(
      Vowels.end[Math.floor(Math.random() * Vowels.end.length)]
    )
  }
  function wordAssembleVCVRhyme() {
    // The VCVC represents: Vowel, Consonant, Vowel, Consonant.
    // Perhaps eventually modify this function to use foreach to learn
    // This function now creates a rhymeKey which I can use to track
    // what grapheme it chose and give the rhyme word a list of options.
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )
    let precedingRhyme = // This was planned to be used to add vowels before the rhymeKey to make it flow better
      // But I neglected the structure for rhyming not with the exact same letter but a list of set rhymes.
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    assembledWordsArray.push(precedingRhyme)

    let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder.push(rhymeKey)

    assembledWordsArray.push(Vowels.end[rhymeKey])
  }
  function wordAssembleVCVRhymes() {
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )

    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    assembledWordsArray.push(Vowels.end[keyHolder[0]])
  }
  function wordAssembleVCVRhyme2() {
    // The VCVC represents: Vowel, Consonant, Vowel, Consonant.
    // Perhaps eventually modify this function to use foreach to learn
    // This function now creates a rhymeKey which I can use to track
    // what grapheme it chose and give the rhyme word a list of options.
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )

    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder2.push(rhymeKey)

    assembledWordsArray.push(Vowels.end[rhymeKey])
  }
  function wordAssembleVCVRhymes2() {
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )

    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    assembledWordsArray.push(Vowels.end[keyHolder2[0]])
  }
  //
  function wordAssembleVCVC() {
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )

    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(
      Consonants.end[Math.floor(Math.random() * Consonants.end.length)]
    )
  }
  function wordAssembleVCVCRhyme() {
    // The VCVC represents: Vowel, Consonant, Vowel, Consonant.
    // Perhaps eventually modify this function to use foreach to learn
    // This function now creates a rhymeKey which I can use to track
    // what grapheme it chose and give the rhyme word a list of options.
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )

    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    let precedingRhyme = // This was planned to be used to add vowels before the rhymeKey to make it flow better
      // But I neglected the structure for rhyming not with the exact same letter but a list of set rhymes.
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    assembledWordsArray.push(precedingRhyme)

    let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder.push(rhymeKey)

    assembledWordsArray.push(Consonants.end[rhymeKey])
  }
  function wordAssembleVCVCRhymes() {
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )

    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(Consonants.end[keyHolder[0]])
  }
  function wordAssembleVCVCRhyme2() {
    // The VCVC represents: Vowel, Consonant, Vowel, Consonant.
    // Perhaps eventually modify this function to use foreach to learn
    // This function now creates a rhymeKey which I can use to track
    // what grapheme it chose and give the rhyme word a list of options.
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )

    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder2.push(rhymeKey)

    assembledWordsArray.push(Consonants.end[rhymeKey])
  }
  function wordAssembleVCVCRhymes2() {
    assembledWordsArray.push(
      Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
    )

    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(Consonants.end[keyHolder2[0]])
  }
  //
  function wordAssembleCVCV() {
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
  function wordAssembleCVCVRhyme() {
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
    let precedingRhyme = // This was planned to be used to add vowels before the rhymeKey to make it flow better
      // But I neglected the structure for rhyming not with the exact same letter but a list of set rhymes.
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    assembledWordsArray.push(precedingRhyme)

    let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
    // When revamping make this also combine with the previous characters if they are vowel
    keyHolder.push(rhymeKey)

    assembledWordsArray.push(Vowels.end[rhymeKey])
  }
  function wordAssembleCVCVRhymes() {
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
  function wordAssembleCVCVRhyme2() {
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
  function wordAssembleCVCVRhymes2() {
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
  // Vowels.endRhymeGroup[keyHolder2[0]][Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder2[0]].length)]

  // This is the line between function logic and functions functioning.

  function rhymeStructure() {
    // Just for testing originally I think.
    for (let z = 0; z < wordInformation.count - 1; z++) {
      // The number here being how many words of CVCV you want to generate.
      // Any inputs less than one or nothing at all gives one word because
      // right now having an input or not is not a condition for the part outside
      // of the loop. This will be fixed when the inputs are sanitized.
      baseRhyme()
      wordBuild()
    }
    rhyme1()
    wordBuild()
  }

  function rhymeStructure1122() {
    if (wordInformation.line == 1) {
      rhyme1()
      return wordBuild()
    } else if (wordInformation.line % 2 === 0) {
      // If the word line is a multiple of 2
      for (let f = 0; f < wordInformation.line; f += 2) {
        // This will generate 2 lines at a time
        keyHolder.pop()
        for (let p = 0; p < wordInformation.count - 1; p++) {
          baseRhyme()
          wordBuild()
        }
        rhyme1()
        wordBuild()
        // This is the second line.
        for (let r = 0; r < wordInformation.count - 1; r++) {
          baseRhyme()
          wordBuild()
        }
        rhymes1()
        wordBuild()
      }
    } else {
      // More than one line but not a multiple of two.
      for (let f = 0; f < wordInformation.line - 2; f += 2) {
        // This will generate 2 lines at a time
        keyHolder.pop()
        for (let p = 0; p < wordInformation.count - 1; p++) {
          // Perhaps simplify this to a function?
          baseRhyme()
          wordBuild()
        }
        rhyme1()
        wordBuild()
        // This is the second line.
        for (let r = 0; r < wordInformation.count - 1; r++) {
          baseRhyme()
          wordBuild()
        }
        rhymes1()
        wordBuild()
      }
      for (let r = 0; r < wordInformation.count; r++) {
        // This doesn't rhyme anything because
        // of the structure chosen so it just builds as many words as there should be.
        baseRhyme()
        wordBuild()
      }
    }
  }

  rhymeStructure1122() // For testing 1122

  function rhymeStructure1212() {
    let remainder = wordInformation.line % 4 // This will help determine how many extra lines to run
    let determiner = wordInformation.line - remainder
    let fullRuns = determiner / 4

    for (let p = 0; p < fullRuns; p++) {
      keyHolder.pop() // This clears rhymeKey for the next word.
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      rhyme1()
      wordBuild()
      // This is the second line.
      keyHolder2.pop()
      for (let r = 0; r < wordInformation.count - 1; r++) {
        baseRhyme()
        wordBuild()
      }
      rhyme2()
      wordBuild()
      // Third line starts here
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      rhymes1() // The Reason these lines don't need the keyHolder.pop is because it is a rhymes not a rhyme
      wordBuild()
      // Fourth line starts here
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      rhymes2()
      wordBuild()
    }

    if (remainder === 1) {
      for (let p = 0; p < wordInformation.count; p++) {
        baseRhyme()
        wordBuild()
      }
    } else if (remainder === 2) {
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      keyHolder.pop()
      rhyme1()
      wordBuild()
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      keyHolder2.pop()
      rhyme2()
      wordBuild()
    } else if (remainder === 3) {
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      keyHolder.pop()
      rhyme1()
      wordBuild()
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      keyHolder2.pop()
      rhyme2()
      wordBuild()
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      rhymes1()
      wordBuild()
    }
  }

  //rhymeStructure1212() // For testing 1212

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
  alert(assembledSentence.join(' ')) // Displays with spaces separating the words.
}
