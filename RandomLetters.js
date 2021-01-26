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
var gorientation = ""
var structure = ""
var precedingKey = []
var precedingKey2 = []
var baseRhyme = ""
var rhyme1 = ""
var rhyme2 = ""
var rhymes1 = ""
var rhymes2 = ""
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
  console.log(assembledWordsArray)
  assembledSentence.push(assembledWord)
  assembledWordsArray.length = 0
  assembledWord = ""
}

let wordCount = []
let vowelPrecedingCheckerRegex = /[aeiouyr]/

let orientationArray = []

let orientationArrayString = []

let sanitizedOrientation = gorientation // This will be that regex output

function orientationArrayBuilder(letterOrientation) {
  // This would be run with sanitizedOrientation as the input
  // Use Regex to sanitize this input for only "v, V, c, C"

  // This should be a function that separates the sanitized letterOrientation into the array below into their own indexes
  orientationArray.length = 0

  for (let i = 0; i < letterOrientation.length; i++) {
    orientationArray.push(letterOrientation.slice(i, i + 1))
  }
}

const convertToStringVersion = () => {
  orientationArrayString.length = 0
  for (let e = 0; e < orientationArray.length; e++) {
    if (orientationArray[e] === "v" || orientationArray[e] === "V") {
      orientationArrayString.push("Vowels")
    } else {
      orientationArrayString.push("Consonants")
    }
  }
}
function wordAssembleBasicWord() {
  // let orientationEndIndex = sanitizedOrientation.length - 1
  let orientationEndIndex = orientationArray.length - 1

  for (let i = 0; i < orientationArrayString.length; i++) {
    // [orientationArrayString[i]] is the current "Vowels" or "Consonants" which are used to access the correct object

    switch (i) {
      // i is the index of the array which is going to tell whether to build a vowel or consonant
      case 0:
        // This will be the .beginning or .prefix
        if (Math.floor(Math.random() * 4) > 0) {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].beginning[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].beginning.length
              )
            ]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].prefix[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].prefix.length
              )
            ]
          )
        }
        break
      case orientationEndIndex:
        // This will be the .end or .suffix
        if (Math.floor(Math.random() * 4) > 0) {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].end[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].end.length
              )
            ]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].suffix[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].suffix.length
              )
            ]
          )
        }
        break
      default:
        // This will be the .middle
        assembledWordsArray.push(
          letterUnits[orientationArrayString[i]].middle[
            Math.floor(
              Math.random() *
                letterUnits[orientationArrayString[i]].middle.length
            )
          ]
        )
        break
    }
  }
}
function wordAssembleRhyme() {
  let orientationEndIndex = orientationArray.length - 1
  let orientationPreceding = orientationArray.length - 2

  for (let i = 0; i < orientationArrayString.length; i++) {
    // [orientationArrayString[i]] is the current "Vowels" or "Consonants" which are used to access the correct object
    switch (i) {
      // i is the index of the array which is going to tell whether to build a vowel or consonant
      case 0:
        // This will be the .beginning or .prefix
        if (Math.floor(Math.random() * 4) > 0) {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].beginning[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].beginning.length
              )
            ]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].prefix[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].prefix.length
              )
            ]
          )
        }
        break
      case orientationEndIndex:
        // This will be the .end or .suffix
        if (Math.floor(Math.random() * 4) > 0) {
          let rhymeKey = Math.floor(
            Math.random() * letterUnits[orientationArrayString[i]].end.length
          )

          keyHolder.push(rhymeKey)
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].end[rhymeKey]
          )
        } else {
          let rhymeKey = Math.floor(
            Math.random() * letterUnits[orientationArrayString[i]].suffix.length
          )

          keyHolder.push("") // for making keyHolder[1] a suffix
          keyHolder.push(rhymeKey)
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].suffix[rhymeKey]
          )
        }
        break
      case orientationPreceding:
        // This will create a key if the last grapheme is a Consonant type and the one before is a Vowel type
        if (
          orientationArrayString[i] === "Vowels" &&
          orientationArrayString[i + 1] === "Consonants"
        ) {
          let precedingValue = Math.floor(
            Math.random() * letterUnits[orientationArrayString[i]].middle.length
          )
          precedingKey.push(precedingValue)
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].middle[precedingValue]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].middle[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].middle.length
              )
            ]
          )
        }
        break
      default:
        // This will be the .middle
        assembledWordsArray.push(
          letterUnits[orientationArrayString[i]].middle[
            Math.floor(
              Math.random() *
                letterUnits[orientationArrayString[i]].middle.length
            )
          ]
        )
        break
    }
  }
}
function wordAssembleRhymes() {
  let orientationEndIndex = orientationArray.length - 1
  let orientationPreceding = orientationArray.length - 2
  for (let i = 0; i < orientationArrayString.length; i++) {
    switch (i) {
      case 0:
        // This will be the .beginning or .prefix
        if (Math.floor(Math.random() * 4) > 0) {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].beginning[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].beginning.length
              )
            ]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].prefix[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].prefix.length
              )
            ]
          )
        }
        break
      case orientationEndIndex:
        // This will be the .end or .suffix depending on the keyHolder.length
        if (keyHolder.length == 1) {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].endRhymeGroup[keyHolder[0]][
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].endRhymeGroup[
                    keyHolder[0]
                  ].length
              )
            ]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].suffixRhymeGroup[
              keyHolder[1]
            ][
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].suffixRhymeGroup[
                    keyHolder[1]
                  ].length
              )
            ]
          )
        }
        break
      case orientationPreceding:
        if (
          orientationArrayString[i] === "Vowels" &&
          orientationArrayString[i + 1] === "Consonants"
        ) {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].middleRhymeGroup[
              precedingKey[0]
            ][
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].middleRhymeGroup[
                    precedingKey[0]
                  ].length
              )
            ]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].middle[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].middle.length
              )
            ]
          )
        }
        break
      default:
        // This will be the .middle
        assembledWordsArray.push(
          letterUnits[orientationArrayString[i]].middle[
            Math.floor(
              Math.random() *
                letterUnits[orientationArrayString[i]].middle.length
            )
          ]
        )
        break
    }
  }
  // Removing the rhyming keyHolders once the rhyming portion has been built
  precedingKey.pop()
  keyHolder.pop()
  keyHolder.pop()
}
function wordAssembleRhyme2() {
  let orientationEndIndex = orientationArray.length - 1
  let orientationPreceding = orientationArray.length - 2
  console.log("HOW ABOUT THIS")
  for (let i = 0; i < orientationArrayString.length; i++) {
    switch (i) {
      case 0:
        // This will be the .beginning or .prefix
        if (Math.floor(Math.random() * 4) > 0) {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].beginning[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].beginning.length
              )
            ]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].prefix[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].prefix.length
              )
            ]
          )
        }
        break
      case orientationEndIndex:
        // This will be the .end or .suffix
        if (Math.floor(Math.random() * 4) > 0) {
          let rhymeKey = Math.floor(
            Math.random() * letterUnits[orientationArrayString[i]].end.length
          )
          keyHolder2.push(rhymeKey)
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].end[rhymeKey]
          )
        } else {
          let rhymeKey = Math.floor(
            Math.random() * letterUnits[orientationArrayString[i]].suffix.length
          )
          keyHolder2.push("") // for making keyHolder2[1] a suffix
          keyHolder2.push(rhymeKey)
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].suffix[rhymeKey]
          )
        }
        break
      case orientationPreceding:
        // This will create a key if the last grapheme is a Consonant type and the one before is a Vowel type
        if (
          orientationArrayString[i] === "Vowels" &&
          orientationArrayString[i + 1] === "Consonants"
        ) {
          let precedingValue = Math.floor(
            Math.random() * letterUnits[orientationArrayString[i]].middle.length
          )
          console.log(precedingKey2)
          precedingKey2.push(precedingValue)
          console.log(precedingKey2)
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].middle[precedingValue]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].middle[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].middle.length
              )
            ]
          )
        }
        break
      default:
        // This will be the .middle
        assembledWordsArray.push(
          letterUnits[orientationArrayString[i]].middle[
            Math.floor(
              Math.random() *
                letterUnits[orientationArrayString[i]].middle.length
            )
          ]
        )
        break
    }
  }
}
function wordAssembleRhymes2() {
  let orientationEndIndex = orientationArray.length - 1
  let orientationPreceding = orientationArray.length - 2
  console.log(precedingKey2[0])
  console.log("HELLOW")

  for (let i = 0; i < orientationArrayString.length; i++) {
    switch (i) {
      case 0:
        // This will be the .beginning or .prefix
        if (Math.floor(Math.random() * 4) > 0) {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].beginning[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].beginning.length
              )
            ]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].prefix[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].prefix.length
              )
            ]
          )
        }
        break
      case orientationEndIndex:
        // This will be the .end or .suffix depending on the keyHolder.length
        if (keyHolder2.length == 1) {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].endRhymeGroup[keyHolder2[0]][
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].endRhymeGroup[
                    keyHolder2[0]
                  ].length
              )
            ]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].suffixRhymeGroup[
              keyHolder2[1]
            ][
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].suffixRhymeGroup[
                    keyHolder2[1]
                  ].length
              )
            ]
          )
        }
        break
      case orientationPreceding:
        if (
          orientationArrayString[i] === "Vowels" &&
          orientationArrayString[i + 1] === "Consonants"
        ) {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].middleRhymeGroup[
              precedingKey2[0]
            ][
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].middleRhymeGroup[
                    precedingKey2[0]
                  ].length
              )
            ]
          )
        } else {
          assembledWordsArray.push(
            letterUnits[orientationArrayString[i]].middle[
              Math.floor(
                Math.random() *
                  letterUnits[orientationArrayString[i]].middle.length
              )
            ]
          )
        }
        break
      default:
        // This will be the .middle
        assembledWordsArray.push(
          letterUnits[orientationArrayString[i]].middle[
            Math.floor(
              Math.random() *
                letterUnits[orientationArrayString[i]].middle.length
            )
          ]
        )
        break
    }
  }
  precedingKey2.pop()
  keyHolder2.pop()
  keyHolder2.pop()
}
// Make the rhyme versions of the master function above and replace all the garbage individual functions

function OVERLORD() {
  assembledSentence.length = 0 // This clears the queue of words so that it doesn't repeat

  // previous iterations.

  function letterCount() {
    wordInformation.count = document.getElementById("WPL").value
  }
  letterCount()

  function lineCount() {
    wordInformation.line = document.getElementById("lineNumber").value
  }
  lineCount()
  function orientation() {
    // this is vcvc
    gorientation = document.getElementById("graphemeStructure").value
  }
  orientation()
  function structureGet() {
    // this is 1122 or 1212
    structure = document.getElementById("vcvcStructure").value
  }
  structureGet()

  orientationArrayBuilder(gorientation)

  convertToStringVersion()

  if (structure == 1122) {
    // Make this use aabb and allow all versions of casing.
    structureOrientation = rhymeStructure1122
  }

  if (structure == 1212) {
    structureOrientation = rhymeStructure1212
  }

  baseRhyme = wordAssembleBasicWord
  rhyme1 = wordAssembleRhyme
  rhymes1 = wordAssembleRhymes
  rhyme2 = wordAssembleRhyme2
  rhymes2 = wordAssembleRhymes2

  function rhymeStructure1122() {
    for (let f = 0; f < wordInformation.line; f += 4) {
      // This will generate 4 lines at a time because there is no downside to
      // over producing lines here because only the correct amount will display
      for (let p = 0; p < wordInformation.count - 1; p++) {
        // This will build as many words as specified minus the one that is built below for storing rhymeKeys and using them
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
      // Third and fourth Lines
      for (let p = 0; p < wordInformation.count - 1; p++) {
        // This will build as many words as specified
        baseRhyme()
        wordBuild()
      }
      rhyme2()
      wordBuild()
      // This is the second line.
      for (let r = 0; r < wordInformation.count - 1; r++) {
        baseRhyme()
        wordBuild()
      }
      rhymes2()
      wordBuild()
    }
  }

  function rhymeStructure1212() {
    // Once again there is no downside to over producing lines because insertWords will only display as many lines as is proper
    for (let p = 0; p < wordInformation.line; p += 4) {
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
      rhyme2()
      wordBuild()
      // Third line starts here
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      rhymes1()
      wordBuild()
      // Fourth line starts here
      for (let p = 0; p < wordInformation.count - 1; p++) {
        baseRhyme()
        wordBuild()
      }
      rhymes2()
      wordBuild()
    }
  }

  //rhymeStructure1212() // For testing 1212

  function structureProducer() {
    // This executes the actual generation
    structureOrientation()
  }
  structureProducer()
}

function insertWords() {
  // This creates divs, which are the individual lines, with random Id's that when clicked get deleted.
  let words = []
  for (let i = 0; i < wordInformation.line; i++) {
    words.length = 0
    for (let j = 0; j < wordInformation.count; j++) {
      // This takes the individual words of the sentence array
      words.push(assembledSentence.shift())
    }
    let div = document.createElement("div")
    div.id = Math.random()
    div.xml
    div.style.fontFamily = "arial"
    div.style.color = "#ffffff"
    div.style.fontSize = "large"
    div.style.lineHeight = "30px"
    div.onclick = function () {
      // This ties a function of onclick to each div created which reads the element's id and deletes it
      var id = this.id
      strId = id.toString()
      let divLine = document.getElementById(strId)
      divLine.remove()
    }
    //div.addEventListener('click', deleteDiv) //This detects if div was clicked
    div.innerHTML = words.join(" ") // This will be the content of a line

    document.getElementById("generatedWords").appendChild(div)
    // document.getElementById("youtubePlayer").appendChild(div)
  }
}

function deleteAll() {
  let rhymeLines = document.getElementById("generatedWords")
  while (rhymeLines.firstChild) {
    rhymeLines.removeChild(rhymeLines.firstChild)
  }
}

// let player

// function onYouTubeIframeAPIReady(link) {
//   player = new YT.Player('player', {
//     height: '144',
//     width: '256',
//     videoId: link,
//   })
// }

let youtubeRegex = /\&.*$/
let embedRegex = /watch\?v=/

function getYoutube() {
  // initial link
  let link = document.getElementById("youtubeLink").value
  // removes everything after the video id
  let newLink = link.replace(youtubeRegex, "")
  // changes "/watch?v=" to "/embed/"
  let finalLink = newLink.replace(embedRegex, "embed/")
  // If a video already exists remove it before adding the new one
  if (document.getElementById("randomid")) {
    document.getElementById("randomid").remove()
  }
  // After inputting a link clear the input box
  document.getElementById("youtubeLink").value = ""
  // Create the iframe
  let iframe = document.createElement("iframe")
  iframe.width = "256"
  iframe.height = "144"
  iframe.id = "randomid"
  iframe.allowFullscreen = 1
  iframe.setAttribute("src", finalLink)
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  )
  document.getElementById("player").appendChild(iframe)
}

function OverlordAndInsert() {
  OVERLORD()
  // Overlord generates
  insertWords()
}
