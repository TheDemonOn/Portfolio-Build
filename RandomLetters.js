function openSlideMenu() {
  document.getElementById("side-menu").style.width = "200px"
  document.getElementById("main").style.marginLeft = "200px"
}
function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0px"
  document.getElementById("main").style.marginLeft = "0px"
}





let assembledWordsArray = []
let assembledWord = []
let assembledSentence = []
let keyHolder = []
let keyHolder2 = []
var gorientation = ''
var structure = ''
var precedingKey = []
var precedingKey2 = []
var baseRhyme = ''
var rhyme1 = ''
var rhyme2 = ''
var rhymes1 = ''
var rhymes2 = ''
let wordInformation = {
  count: 0,
  line: 0,
}



  //let letterStr = 'm'
  //let testStr = 'mmm'
  //let letterRegex = new RegExp(letterStr + '{3,4}')
  //console.log(testStr.match(letterRegex)[0])
function wordBuild() {
  // this simply combines the array of letters into one then resets everything for the next iteration
  for (let b = 0; b < assembledWordsArray.length; b++) {
    assembledWord = assembledWord + assembledWordsArray[b]
  }
  assembledSentence.push(assembledWord)
  assembledWordsArray.length = 0
  assembledWord = ''
}

let wordCount = []
let vowelPrecedingCheckerRegex = /[aeiouyr]/

function OVERLORD() {
  assembledSentence.length = 0 // This clears the queue of words so that it doesn't repeat
  // previous iterations.

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
  function structureGet() {
    structure = document.getElementById('vcvcStructure').value
  }
  structureGet()

  if (structure == 1122) { // Make this use aabb and allow all versions of casing.
    structureOrientation = rhymeStructure1122
  }

  if (structure == 1212) {
    structureOrientation = rhymeStructure1212
  }

 // I think for the most part I don't really want to build any with 2 CC's in a row because the word generation 
 // is not fine like VV

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

  if (gorientation == 'CVVC' || gorientation == 'cvvc') {
    baseRhyme = wordAssembleCVVC
    rhyme1 = wordAssembleCVVCRhyme
    rhyme2 = wordAssembleCVVCRhyme2
    rhymes1 = wordAssembleCVVCRhymes
    rhymes2 = wordAssembleCVVCRhymes2
  }

  if (gorientation == 'VCV' || gorientation == 'vcv') {
    baseRhyme = wordAssembleVCV
    rhyme1 = wordAssembleVCVRhyme
    rhyme2 = wordAssembleVCVRhyme2
    rhymes1 = wordAssembleVCVRhymes
    rhymes2 = wordAssembleVCVRhymes2
  }

  if (gorientation == 'CVC' || gorientation == 'cvc') {
    // A problem with words under this generation
    // is that it doesn't really rhyme if I just take the last consonant and attach it to the next,
    // unless it includes the previous connecting vowels
    baseRhyme = wordAssembleCVC
    rhyme1 = wordAssembleCVCRhyme
    rhyme2 = wordAssembleCVCRhyme2
    rhymes1 = wordAssembleCVCRhymes
    rhymes2 = wordAssembleCVCRhymes2
  }

  if (gorientation == 'CVV' || gorientation == 'cvv') {
    baseRhyme = wordAssembleCVV
    rhyme1 = wordAssembleCVVRhyme
    rhyme2 = wordAssembleCVVRhyme2
    rhymes1 = wordAssembleCVVRhymes
    rhymes2 = wordAssembleCVVRhymes2
  }

  if (gorientation == 'VVC' || gorientation == 'vvc') {
    baseRhyme = wordAssembleVVC
    rhyme1 = wordAssembleVVCRhyme
    rhyme2 = wordAssembleVVCRhyme2
    rhymes1 = wordAssembleVVCRhymes
    rhymes2 = wordAssembleVVCRhymes2
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

  if (gorientation == 'VV' || gorientation == 'vv') {
    baseRhyme = wordAssembleVV
    rhyme1 = wordAssembleVVRhyme
    rhyme2 = wordAssembleVVRhyme2
    rhymes1 = wordAssembleVVRhymes
    rhymes2 = wordAssembleVVRhymes2
  }

  if (gorientation == "")


  // adding       assembledWordsArray.push(Consonants.suffixHelper[Math.floor(Math.random() * Consonants.suffixHelper.length)])
  // to structure that end in c

  function wordAssembleVV() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[
          Math.floor(Math.random() * Vowels.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.end[Math.floor(Math.random() * Vowels.end.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffix[Math.floor(Math.random() * Vowels.suffix.length)]
      )
    }
  }
  function wordAssembleVVRhyme() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[
          Math.floor(Math.random() * Vowels.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder.push('')
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleVVRhymes() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[
          Math.floor(Math.random() * Vowels.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    if (keyHolder.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder[1]].length
          )
        ]
      )
    }
  }
  function wordAssembleVVRhyme2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[
          Math.floor(Math.random() * Vowels.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder2.push('')
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleVVRhymes2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[
          Math.floor(Math.random() * Vowels.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    if (keyHolder2.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder2[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder2[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder2[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder2[1]].length
          )
        ]
      )
    }
  }
//
  function wordAssembleCVVC() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[Math.floor(Math.random() * Consonants.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )

    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.end[Math.floor(Math.random() * Consonants.end.length)]
      )
    } else {
      assembledWordsArray.push(
        Consonants.suffix[Math.floor(Math.random() * Consonants.suffix.length)]
      )
    }
  }
  function wordAssembleCVVCRhyme() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[Math.floor(Math.random() * Consonants.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    let precedingRhyme =
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]

    precedingKey.push(precedingRhyme)
    assembledWordsArray.push(precedingRhyme)

    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Consonants.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Consonants.suffix.length)
      keyHolder.push('')
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Consonants.suffix[rhymeKey])
    }
  }
  function wordAssembleCVVCRhymes() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[Math.floor(Math.random() * Consonants.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    //
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    //
    assembledWordsArray.push(precedingKey[0])
    precedingKey.length = 0
    if (keyHolder.length == 1) {
      assembledWordsArray.push(
        Consonants.endRhymeGroup[keyHolder[0]][
          Math.floor(
            Math.random() * Consonants.endRhymeGroup[keyHolder[0]].length
          )
        ]
      )
    } else {
      assembledWordsArray.push(Consonants.suffixHelper[Math.floor(Math.random() * Consonants.suffixHelper.length)])
      assembledWordsArray.push(
        Consonants.suffixRhymeGroup[keyHolder[1]][
          Math.floor(
            Math.random() * Consonants.suffixRhymeGroup[keyHolder[1]].length
          )
        ]
      )
    }
  }
  function wordAssembleCVVCRhyme2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[Math.floor(Math.random() * Consonants.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    let precedingRhyme =
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]

    precedingKey2.push(precedingRhyme)
    assembledWordsArray.push(precedingRhyme)

    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Consonants.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Consonants.suffix.length)
      keyHolder2.push('')
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Consonants.suffix[rhymeKey])
    }
  }
  function wordAssembleCVVCRhymes2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[Math.floor(Math.random() * Consonants.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    //
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    //
    assembledWordsArray.push(precedingKey2[0])
    precedingKey2.length = 0

    if (keyHolder2.length == 1) {
      assembledWordsArray.push(
        Consonants.endRhymeGroup[keyHolder2[0]][
          Math.floor(
            Math.random() * Consonants.endRhymeGroup[keyHolder2[0]].length
          )
        ]
      )
    } else {
      assembledWordsArray.push(Consonants.suffixHelper[Math.floor(Math.random() * Consonants.suffixHelper.length)])
      assembledWordsArray.push(
        Consonants.suffixRhymeGroup[keyHolder2[1]][
          Math.floor(
            Math.random() * Consonants.suffixRhymeGroup[keyHolder2[1]].length
          )
        ]
      )
    }
  }
//
  function wordAssembleCVV() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.end[Math.floor(Math.random() * Vowels.end.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffix[Math.floor(Math.random() * Vowels.suffix.length)]
      )
    }
  }
  function wordAssembleCVVRhyme() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder.push('')
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleCVVRhymes() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    if (keyHolder.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder[1]].length
          )
        ]
      )
    }
  }
  function wordAssembleCVVRhyme2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder2.push('')
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleCVVRhymes2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    if (keyHolder2.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder2[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder2[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder2[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder2[1]].length
          )
        ]
      )
    }
  }
//
  function wordAssembleVVC() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.end[Math.floor(Math.random() * Consonants.end.length)]
      )
    } else {
      assembledWordsArray.push(
        Consonants.suffix[Math.floor(Math.random() * Consonants.suffix.length)]
      )
    }
  }
  function wordAssembleVVCRhyme() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    let precedingRhyme =
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]

    precedingKey.push(precedingRhyme)
    assembledWordsArray.push(precedingRhyme)

    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Consonants.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Consonants.suffix.length)
      keyHolder.push('')
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Consonants.suffix[rhymeKey])
    }
  }
  function wordAssembleVVCRhymes() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    //
    assembledWordsArray.push(precedingKey[0])
    precedingKey.length = 0
    if (keyHolder.length == 1) {
      assembledWordsArray.push(
        Consonants.endRhymeGroup[keyHolder[0]][
          Math.floor(
            Math.random() * Consonants.endRhymeGroup[keyHolder[0]].length
          )
        ]
      )
    } else {
      assembledWordsArray.push(Consonants.suffixHelper[Math.floor(Math.random() * Consonants.suffixHelper.length)])
      assembledWordsArray.push(
        Consonants.suffixRhymeGroup[keyHolder[1]][
          Math.floor(
            Math.random() * Consonants.suffixRhymeGroup[keyHolder[1]].length
          )
        ]
      )
    }
  }
  function wordAssembleVVCRhyme2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    let precedingRhyme =
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]

    precedingKey2.push(precedingRhyme)
    assembledWordsArray.push(precedingRhyme)

    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Consonants.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Consonants.suffix.length)
      keyHolder2.push('')
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Consonants.suffix[rhymeKey])
    }
  }
  function wordAssembleVVCRhymes2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    //
    assembledWordsArray.push(precedingKey2[0])
    precedingKey2.length = 0

    if (keyHolder2.length == 1) {
      assembledWordsArray.push(
        Consonants.endRhymeGroup[keyHolder2[0]][
          Math.floor(
            Math.random() * Consonants.endRhymeGroup[keyHolder2[0]].length
          )
        ]
      )
    } else {
      assembledWordsArray.push(Consonants.suffixHelper[Math.floor(Math.random() * Consonants.suffixHelper.length)])
      assembledWordsArray.push(
        Consonants.suffixRhymeGroup[keyHolder2[1]][
          Math.floor(
            Math.random() * Consonants.suffixRhymeGroup[keyHolder2[1]].length
          )
        ]
      )
    }
  }
//
  function wordAssembleCVV() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.end[Math.floor(Math.random() * Vowels.end.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffix[Math.floor(Math.random() * Vowels.suffix.length)]
      )
    }
  }
  function wordAssembleCVVRhyme() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder.push('')
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleCVVRhymes() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    if (keyHolder.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder[1]].length
          )
        ]
      )
    }
  }
  function wordAssembleCVVRhyme2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder2.push('')
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleCVVRhymes2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    if (keyHolder2.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder2[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder2[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder2[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder2[1]].length
          )
        ]
      )
    }
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
  // With vc the issue is that there isn't really a way to make vc words that rhyme but are also different enough.
  // This issue is also seen in vcvc, this gives me an idea of creating a rhymeGroup for preceding rhymes to generate
  // even more unique words. The original issue is actually somewhat alleviated by the suffix rhymeGroup as it adds
  // additional means of being different. I think the preceding key rhymeGroup will probably be the best way to do it
  // because otherwise I would create a rhyme group for prefixes, specifically for cases such as where there are no other substantiating
  // characters besides the prefix itself. Although after additional thought I would have to 3 versions, one for prefixes,
  // 2nd for vowel.beginning, and 3rd for vowels.middle, this is for cases like vcvc, or cvc.
  // Do the cv endings after constructing the additional rhymeGroups.
  function wordAssembleVC() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.end[Math.floor(Math.random() * Consonants.end.length)]
      )
    } else {
      assembledWordsArray.push(
        Consonants.suffix[Math.floor(Math.random() * Consonants.suffix.length)]
      )
    }
  }
  function wordAssembleVCRhyme() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    let precedingRhyme =
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]

    precedingKey.push(precedingRhyme)
    assembledWordsArray.push(precedingRhyme)

    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Consonants.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Consonants.suffix.length)
      keyHolder.push('')
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Consonants.suffix[rhymeKey])
    }
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
  // CV in particular suffers from a lot of 3 letters in a row.
  function wordAssembleCV() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.end[Math.floor(Math.random() * Vowels.end.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffix[Math.floor(Math.random() * Vowels.suffix.length)]
      )
    }
  }
  function wordAssembleCVRhyme() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder.push('')
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleCVRhymes() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    if (keyHolder.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder[1]].length
          )
        ]
      )
    }
  }
  function wordAssembleCVRhyme2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder2.push('')
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleCVRhymes2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    if (keyHolder2.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder2[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder2[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder2[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder2[1]].length
          )
        ]
      )
    }
  }
  //
  function wordAssembleVCV() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.end[Math.floor(Math.random() * Vowels.end.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffix[Math.floor(Math.random() * Vowels.suffix.length)]
      )
    }
  }
  function wordAssembleVCVRhyme() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder.push('')
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleVCVRhymes() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    //
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    //
    if (keyHolder.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder[1]].length
          )
        ]
      )
    }
  }
  function wordAssembleVCVRhyme2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder2.push('')
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleVCVRhymes2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    //
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    //
    if (keyHolder2.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder2[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder2[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder2[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder2[1]].length
          )
        ]
      )
    }
  }
  //
  function wordAssembleVCVC() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )

    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.end[Math.floor(Math.random() * Consonants.end.length)]
      )
    } else {
      assembledWordsArray.push(
        Consonants.suffix[Math.floor(Math.random() * Consonants.suffix.length)]
      )
    }
  }
  function wordAssembleVCVCRhyme() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    let precedingRhyme =
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]

    precedingKey.push(precedingRhyme)
    assembledWordsArray.push(precedingRhyme)

    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Consonants.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Consonants.suffix.length)
      keyHolder.push('')
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Consonants.suffix[rhymeKey])
    }
  }
  function wordAssembleVCVCRhymes() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    //
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    //
    assembledWordsArray.push(precedingKey[0])
    precedingKey.length = 0
    if (keyHolder.length == 1) {
      assembledWordsArray.push(
        Consonants.endRhymeGroup[keyHolder[0]][
          Math.floor(
            Math.random() * Consonants.endRhymeGroup[keyHolder[0]].length
          )
        ]
      )
    } else {
      assembledWordsArray.push(Consonants.suffixHelper[Math.floor(Math.random() * Consonants.suffixHelper.length)])
      assembledWordsArray.push(
        Consonants.suffixRhymeGroup[keyHolder[1]][
          Math.floor(
            Math.random() * Consonants.suffixRhymeGroup[keyHolder[1]].length
          )
        ]
      )
    }
  }
  function wordAssembleVCVCRhyme2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    let precedingRhyme =
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]

    precedingKey2.push(precedingRhyme)
    assembledWordsArray.push(precedingRhyme)

    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Consonants.end.length)
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Consonants.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Consonants.suffix.length)
      keyHolder2.push('')
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Consonants.suffix[rhymeKey])
    }
  }
  function wordAssembleVCVCRhymes2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.beginning[Math.floor(Math.random() * Vowels.beginning.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.prefix[Math.floor(Math.random() * Vowels.prefix.length)]
      )
    }
    //
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    //
    assembledWordsArray.push(precedingKey2[0])
    precedingKey2.length = 0

    if (keyHolder2.length == 1) {
      assembledWordsArray.push(
        Consonants.endRhymeGroup[keyHolder2[0]][
          Math.floor(
            Math.random() * Consonants.endRhymeGroup[keyHolder2[0]].length
          )
        ]
      )
    } else {
      assembledWordsArray.push(Consonants.suffixHelper[Math.floor(Math.random() * Consonants.suffixHelper.length)])
      assembledWordsArray.push(
        Consonants.suffixRhymeGroup[keyHolder2[1]][
          Math.floor(
            Math.random() * Consonants.suffixRhymeGroup[keyHolder2[1]].length
          )
        ]
      )
    }
  }
  //
  function wordAssembleCVCV() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )

    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Vowels.end[Math.floor(Math.random() * Vowels.end.length)]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffix[Math.floor(Math.random() * Vowels.suffix.length)]
      )
    }
  }
  function wordAssembleCVCVRhyme() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    let precedingRhyme = // This was planned to be used to add vowels before the rhymeKey to make it flow better
      // But I neglected the structure for rhyming not with the exact same letter but a list of set rhymes.
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    assembledWordsArray.push(precedingRhyme)

    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder.push('')
      keyHolder.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleCVCVRhymes() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    if (keyHolder.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder[1]].length
          )
        ]
      )
    }
  }
  function wordAssembleCVCVRhyme2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    let precedingRhyme = // This was planned to be used to add vowels before the rhymeKey to make it flow better
      // But I neglected the structure for rhyming not with the exact same letter but a list of set rhymes.
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    assembledWordsArray.push(precedingRhyme)

    if (Math.floor(Math.random() * 4) > 0) {
      let rhymeKey = Math.floor(Math.random() * Vowels.end.length)
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.end[rhymeKey])
    } else {
      let rhymeKey = Math.floor(Math.random() * Vowels.suffix.length)
      keyHolder2.push('')
      keyHolder2.push(rhymeKey)
      assembledWordsArray.push(Vowels.suffix[rhymeKey])
    }
  }
  function wordAssembleCVCVRhymes2() {
    if (Math.floor(Math.random() * 4) > 0) {
      assembledWordsArray.push(
        Consonants.beginning[
          Math.floor(Math.random() * Consonants.beginning.length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Consonants.prefix[Math.floor(Math.random() * Consonants.prefix.length)]
      )
    }
    assembledWordsArray.push(
      Vowels.middle[Math.floor(Math.random() * Vowels.middle.length)]
    )
    assembledWordsArray.push(
      Consonants.middle[Math.floor(Math.random() * Consonants.middle.length)]
    )
    if (keyHolder2.length == 1) {
      assembledWordsArray.push(
        Vowels.endRhymeGroup[keyHolder2[0]][
          Math.floor(Math.random() * Vowels.endRhymeGroup[keyHolder2[0]].length)
        ]
      )
    } else {
      assembledWordsArray.push(
        Vowels.suffixRhymeGroup[keyHolder2[1]][
          Math.floor(
            Math.random() * Vowels.suffixRhymeGroup[keyHolder2[1]].length
          )
        ]
      )
    }
  }

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

  // Each structure builds up to 4 words at a time, only being less if there
  // are not enough words.

  function rhymeStructure1122() {
    if (wordInformation.line == 1) {
      for (let z = 0; z < wordInformation.count; z++){
      rhyme1()
      wordBuild()
    }
    } else if (wordInformation.line % 2 === 0) {
      // If the word line is a multiple of 2
      for (let f = 0; f < wordInformation.line; f += 2) {
        // This will generate 2 lines at a time
        keyHolder.pop()
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

  //rhymeStructure1122() // For testing 1122

  function rhymeStructure1212() {
    let remainder = wordInformation.line % 4 // This will help determine how many extra lines to run
    let determiner = wordInformation.line - remainder
    let fullRuns = determiner / 4

    for (let p = 0; p < fullRuns; p++) {
      keyHolder.pop()
      keyHolder.pop() // This clears rhymeKey for the next word.
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      rhyme1()
      wordBuild()
      // This is the second line.
      keyHolder2.pop()
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
      keyHolder.pop()
      rhyme1()
      wordBuild()
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      keyHolder2.pop()
      keyHolder2.pop()
      rhyme2()
      wordBuild()
    } else if (remainder === 3) {
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      keyHolder.pop()
      keyHolder.pop()
      rhyme1()
      wordBuild()
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      keyHolder2.pop()
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

  function structureProducer() {
    structureOrientation()
  }
  structureProducer()

  function lineGenerator() {
    for (let b = 0; b < wordInformation.line; b++) {
      rhymeStructure() // This will change to reflect the function of the
      // type of rhyming pattern you want.
    }
  }
  // lineGenerator()

  //document.getElementById('generatedWordList').innerHTML = assembledSentence

  //alert(assembledSentence.join(' ')) // Displays with spaces separating the words.
}

function insertWords() {
  // This creates divs, which are the individual lines, with random Id's that when clicked get deleted.
  let words = []
  for (let i = 0; i < wordInformation.line; i++) {
    words.length = 0
    for (let j = 0; j < wordInformation.count; j++) {
      words.push(assembledSentence.shift())
    }
    let div = document.createElement('div')
    div.id = Math.random()
    div.xml
    div.style.fontFamily = 'arial'
    div.style.color = '#ffffff'
    div.style.fontSize = 'large'
    div.style.lineHeight = "30px"
    div.onclick = function() {
      var id = this.id
      strId = id.toString()
      let divLine = document.getElementById(strId)
      divLine.remove()
    }
    //div.addEventListener('click', deleteDiv) //This detects if div was clicked
    div.innerHTML = words.join(" ") // This will be the content of a line

    document.getElementById('generatedWords').appendChild(div)
  }
}

function deleteAll() {
  let rhymeLines = document.getElementById("generatedWords")
  while(rhymeLines.firstChild) {
    rhymeLines.removeChild(rhymeLines.firstChild)
  }
}

//function deleteDiv() {
//  let el = document.getElementById('sampleID')
//  el.remove()
//}

function OverlordAndInsert() {
  OVERLORD()
  insertWords()
}
