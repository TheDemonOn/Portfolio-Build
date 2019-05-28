function OVERLORD() {
  let words = []
  let addedWords = []
  let assembledWordsArray = []
  let assembledWord = []
  let assembledSentence = []
  var wordInformation = {
    count: 0,
  }
  ///////////////////////////////////////////////////////////////////////////////////
  function letterCount() {
    wordInformation.count = document.getElementById('name').value
  }
  letterCount()
  function randomLetters() {
    for (let i = 0; i < wordInformation.count; i++) {
      // The value here is how many letters it generates.
      let truth = Math.floor(Math.random() * 26) // I can use this to assign every letter a value corresponding to their position.
      // I can generate random letters using this.
      switch (truth) {
        case 0:
          words.push('a')
          break
        case 1:
          words.push('b')
          break
        case 2:
          words.push('c')
          break
        case 3:
          words.push('d')
          break
        case 4:
          words.push('e')
          break
        case 5:
          words.push('f')
          break
        case 6:
          words.push('g')
          break
        case 7:
          words.push('h')
          break
        case 8:
          words.push('i')
          break
        case 9:
          words.push('j')
          break
        case 10:
          words.push('k')
          break
        case 11:
          words.push('l')
          break
        case 12:
          words.push('m')
          break
        case 13:
          words.push('n')
          break
        case 14:
          words.push('o')
          break
        case 15:
          words.push('p')
          break
        case 16:
          words.push('q')
          break
        case 17:
          words.push('r')
          break
        case 18:
          words.push('s')
          break
        case 19:
          words.push('t')
          break
        case 20:
          words.push('u')
          break
        case 21:
          words.push('v')
          break
        case 22:
          words.push('w')
          break
        case 23:
          words.push('x')
          break
        case 24:
          words.push('y')
          break
        case 25:
          words.push('z')
          break
        default:
          words.push('HOW')
          break
      }
    }
  }
  randomLetters()
  /////////////////////////////////////////////////////////////////////////////////////
  // wordBuild function adds the letters into a single string
  function wordBuild() {
    for (let j = 0; j < wordInformation.wordSize; j++) {
      addedWords = addedWords + words[j]
    }
  }

  wordBuild()

  function wordBuild2() {
    for (let b = 0; b < assembledWordsArray.length; b++) {
      assembledWord = assembledWord + assembledWordsArray[b]
    }
    assembledSentence.push(assembledWord)
    assembledWordsArray.length = 0
    assembledWord = ''
  }

  //
  function wordAssembleVCVC() {
    // Perhaps eventually modify this function to use foreach to learn
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
  ////////////////////////////////////////////////////////////////////////////////////////
  for (let z = 0; z < 10; z++) {
    // The number here being how many words of VCVC you want to generate.
    wordAssembleVCVC()
    wordBuild2()
  }

  console.log(addedWords)

  console.log(wordInformation.count)

  console.log(assembledSentence)
  alert(assembledSentence.join(' '))

  //Figure out how to create a function which takes in the
  //result from a form and console logs some response using
  //the input data.
}
