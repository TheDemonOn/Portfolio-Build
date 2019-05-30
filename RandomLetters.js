function OVERLORD() {
  let words = []
  let addedWords = []
  let assembledWordsArray = []
  let assembledWord = []
  let assembledSentence = []
  let keyHolder = []
  var wordInformation = {
    count: 0
  }

  // This pulls information typed in and stores it.
  function letterCount() {
    wordInformation.count = document.getElementById("name").value
  }
  letterCount()

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
    keyHolder.push(rhymeKey)

    assembledWordsArray.push(Vowels.end[rhymeKey])
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

  function rhymeStructure() {
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
  rhymeStructure()

  console.log(keyHolder)

  console.log(wordInformation.count)

  console.log(assembledSentence)
  alert(assembledSentence.join(" ")) // Displays with spaces separating the words.
}
