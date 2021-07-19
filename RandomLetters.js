function openSlideMenu() {
	document.getElementById('side-menu').style.width = '200px'
	document.getElementById('main').style.marginLeft = '200px'
}
function closeSlideMenu() {
	document.getElementById('side-menu').style.width = '0px'
	document.getElementById('main').style.marginLeft = '0px'
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

function wordBuild() {
	// this simply combines the array of letters into one then resets everything for the next iteration
	for (let b = 0; b < assembledWordsArray.length; b++) {
		assembledWord = assembledWord + assembledWordsArray[b]
	}
	console.log(document.getElementById('generatedWords'))
	console.log(document.getElementById('generatedWords').childNodes)
	console.log(document.getElementById('generatedWords').childNodes[0])
	assembledSentence.push(assembledWord)
	assembledWordsArray.length = 0
	assembledWord = ''
}

let wordCount = []
// gorientation separated into here
let orientationArray = []

var orientationArrayString = []

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

// This creates the vc orientation if something was enters in the text box.
const convertToStringVersion = () => {
	orientationArrayString.length = 0
	for (let e = 0; e < orientationArray.length; e++) {
		if (orientationArray[e] === 'v' || orientationArray[e] === 'V') {
			orientationArrayString.push('Vowels')
		} else if (orientationArray[e] === 'c' || orientationArray[e] === 'C') {
			orientationArrayString.push('Consonants')
		}
	}
}
function wordAssembleBasicWord() {
	let orientationEndIndex = orientationArray.length - 1

	// Maybe to generate different kinds of grapheme structures a random orientation of graphemes can be generated on the base words
	// which are not used for rhyming and it could generate on each instance of the function
	// Might want to limit the amount of graphemes to not exceed the rhyming orientation to keep the words at a more similar size

	// This will select the random orientation from one of 14 different ones that produce words
	let randomGrapheme = Math.floor(Math.random() * 14)
	var randomOrientation

	switch (randomGrapheme) {
		case 1:
			randomOrientation = ['Consonants', 'Vowels']
			break
		case 2:
			randomOrientation = ['Consonants', 'Vowels', 'Consonants']
			break
		case 3:
			randomOrientation = ['Consonants', 'Vowels', 'Vowels']
			break
		case 4:
			randomOrientation = ['Consonants', 'Vowels', 'Vowels', 'Consonants']
			break
		case 5:
			randomOrientation = ['Consonants', 'Vowels', 'Consonants', 'Vowels']
			break
		case 6:
			randomOrientation = ['Vowels', 'Vowels']
			break
		case 7:
			randomOrientation = ['Vowels', 'Consonants']
			break
		case 8:
			randomOrientation = ['Vowels', 'Consonants', 'Vowels']
			break
		case 9:
			randomOrientation = ['Vowels', 'Vowels', 'Consonants']
			break
		case 10:
			randomOrientation = ['Vowels', 'Vowels', 'Vowels']
			break
		case 11:
			randomOrientation = ['Vowels', 'Consonants', 'Vowels', 'Vowels']
			break
		case 12:
			randomOrientation = ['Vowels', 'Consonants', 'Vowels', 'Consonants']
			break
		case 13:
			randomOrientation = ['Vowels', 'Consonants', 'Consonants', 'Vowels']
			break
		case 0:
			randomOrientation = ['Vowels', 'Vowels', 'Consonants', 'Vowels']
			break
	}

	for (let i = 0; i < randomOrientation.length; i++) {
		// [orientationArrayString[i]] is the current "Vowels" or "Consonants" which are used to access the correct object

		switch (i) {
			// i is the index of the array which is going to tell whether to build a vowel or consonant
			case 0:
				// This will be the .beginning or .prefix
				if (Math.floor(Math.random() * 4) > 0) {
					assembledWordsArray.push(
						letterUnits[randomOrientation[i]].beginning[
							Math.floor(Math.random() * letterUnits[randomOrientation[i]].beginning.length)
						]
					)
				} else {
					assembledWordsArray.push(
						letterUnits[randomOrientation[i]].prefix[
							Math.floor(Math.random() * letterUnits[randomOrientation[i]].prefix.length)
						]
					)
				}
				break
			case orientationEndIndex:
				// This will be the .end or .suffix
				if (Math.floor(Math.random() * 4) > 0) {
					assembledWordsArray.push(
						letterUnits[randomOrientation[i]].end[
							Math.floor(Math.random() * letterUnits[randomOrientation[i]].end.length)
						]
					)
				} else {
					assembledWordsArray.push(
						letterUnits[randomOrientation[i]].suffix[
							Math.floor(Math.random() * letterUnits[randomOrientation[i]].suffix.length)
						]
					)
				}
				break
			default:
				// This will be the .middle
				assembledWordsArray.push(
					letterUnits[randomOrientation[i]].middle[
						Math.floor(Math.random() * letterUnits[randomOrientation[i]].middle.length)
					]
				)
				break
		}
	}
}
function wordAssembleRhyme() {
	let randomGrapheme = Math.floor(Math.random() * 9)

	// If there is nothing in the orientation box, OR just 1 use this.
	if (orientationArrayString.length === 0 || orientationArrayString.length === 1) {
		console.log('A random grapheme orientation was selected')
		switch (randomGrapheme) {
			case 1:
				orientationArrayString = ['Consonants', 'Vowels']
				break
			case 2:
				orientationArrayString = ['Consonants', 'Vowels', 'Consonants']
				break
			case 3:
				orientationArrayString = ['Consonants', 'Vowels', 'Consonants', 'Vowels']
				break
			case 4:
				orientationArrayString = ['Vowels', 'Consonants', 'Vowels']
				break
			case 5:
				orientationArrayString = ['Vowels', 'Vowels', 'Vowels']
				break
			case 6:
				orientationArrayString = ['Vowels', 'Consonants', 'Vowels', 'Vowels']
				break
			case 7:
				orientationArrayString = ['Vowels', 'Consonants', 'Vowels', 'Consonants']
				break
			case 8:
				orientationArrayString = ['Vowels', 'Consonants', 'Consonants', 'Vowels']
				break
			case 0:
				orientationArrayString = ['Vowels', 'Vowels', 'Consonants', 'Vowels']
				break
		}
	}

	// If something was entered for the vc orientations then this will use that data.
	let orientationEndIndex = orientationArrayString.length - 1
	let orientationPreceding = orientationArrayString.length - 2

	for (let i = 0; i < orientationArrayString.length; i++) {
		// [orientationArrayString[i]] is the current "Vowels" or "Consonants" which are used to access the correct object
		switch (i) {
			// i is the index of the array which is going to tell whether to build a vowel or consonant
			case orientationEndIndex:
				// This will be the .end or .suffix
				if (Math.floor(Math.random() * 4) > 0) {
					let rhymeKey = Math.floor(
						Math.random() * letterUnits[orientationArrayString[i]].end.length
					)

					keyHolder.push(rhymeKey)
					assembledWordsArray.push(letterUnits[orientationArrayString[i]].end[rhymeKey])
				} else {
					let rhymeKey = Math.floor(
						Math.random() * letterUnits[orientationArrayString[i]].suffix.length
					)

					keyHolder.push('') // for making keyHolder[1] a suffix
					keyHolder.push(rhymeKey)
					assembledWordsArray.push(letterUnits[orientationArrayString[i]].suffix[rhymeKey])
				}
				break
			case 0:
				// This will be the .beginning or .prefix
				if (Math.floor(Math.random() * 4) > 0) {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].beginning[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].beginning.length)
						]
					)
				} else {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].prefix[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].prefix.length)
						]
					)
				}
				break
			case orientationPreceding:
				// This will create a key if the last grapheme is a Consonant type and the one before is a Vowel type
				if (
					orientationArrayString[i] === 'Vowels' &&
					orientationArrayString[i + 1] === 'Consonants'
				) {
					let precedingValue = Math.floor(
						Math.random() * letterUnits[orientationArrayString[i]].middle.length
					)
					precedingKey.push(precedingValue)
					assembledWordsArray.push(letterUnits[orientationArrayString[i]].middle[precedingValue])
				} else {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].middle[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].middle.length)
						]
					)
				}
				break
			default:
				// This will be the .middle
				assembledWordsArray.push(
					letterUnits[orientationArrayString[i]].middle[
						Math.floor(Math.random() * letterUnits[orientationArrayString[i]].middle.length)
					]
				)
				break
		}
	}
}
function wordAssembleRhymes() {
	let orientationEndIndex = orientationArrayString.length - 1
	let orientationPreceding = orientationArrayString.length - 2
	for (let i = 0; i < orientationArrayString.length; i++) {
		switch (i) {
			case 0:
				// This will be the .beginning or .prefix
				if (Math.floor(Math.random() * 4) > 0) {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].beginning[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].beginning.length)
						]
					)
				} else {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].prefix[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].prefix.length)
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
									letterUnits[orientationArrayString[i]].endRhymeGroup[keyHolder[0]].length
							)
						]
					)
				} else {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].suffixRhymeGroup[keyHolder[1]][
							Math.floor(
								Math.random() *
									letterUnits[orientationArrayString[i]].suffixRhymeGroup[keyHolder[1]].length
							)
						]
					)
				}
				break
			case orientationPreceding:
				if (
					orientationArrayString[i] === 'Vowels' &&
					orientationArrayString[i + 1] === 'Consonants'
				) {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].middleRhymeGroup[precedingKey[0]][
							Math.floor(
								Math.random() *
									letterUnits[orientationArrayString[i]].middleRhymeGroup[precedingKey[0]].length
							)
						]
					)
				} else {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].middle[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].middle.length)
						]
					)
				}
				break
			default:
				// This will be the .middle
				assembledWordsArray.push(
					letterUnits[orientationArrayString[i]].middle[
						Math.floor(Math.random() * letterUnits[orientationArrayString[i]].middle.length)
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
	let orientationEndIndex = orientationArrayString.length - 1
	let orientationPreceding = orientationArrayString.length - 2
	for (let i = 0; i < orientationArrayString.length; i++) {
		switch (i) {
			case 0:
				// This will be the .beginning or .prefix
				if (Math.floor(Math.random() * 4) > 0) {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].beginning[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].beginning.length)
						]
					)
				} else {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].prefix[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].prefix.length)
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
					assembledWordsArray.push(letterUnits[orientationArrayString[i]].end[rhymeKey])
				} else {
					let rhymeKey = Math.floor(
						Math.random() * letterUnits[orientationArrayString[i]].suffix.length
					)
					keyHolder2.push('') // for making keyHolder2[1] a suffix
					keyHolder2.push(rhymeKey)
					assembledWordsArray.push(letterUnits[orientationArrayString[i]].suffix[rhymeKey])
				}
				break
			case orientationPreceding:
				// This will create a key if the last grapheme is a Consonant type and the one before is a Vowel type
				if (
					orientationArrayString[i] === 'Vowels' &&
					orientationArrayString[i + 1] === 'Consonants'
				) {
					let precedingValue = Math.floor(
						Math.random() * letterUnits[orientationArrayString[i]].middle.length
					)
					precedingKey2.push(precedingValue)
					assembledWordsArray.push(letterUnits[orientationArrayString[i]].middle[precedingValue])
				} else {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].middle[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].middle.length)
						]
					)
				}
				break
			default:
				// This will be the .middle
				assembledWordsArray.push(
					letterUnits[orientationArrayString[i]].middle[
						Math.floor(Math.random() * letterUnits[orientationArrayString[i]].middle.length)
					]
				)
				break
		}
	}
}
function wordAssembleRhymes2() {
	let orientationEndIndex = orientationArrayString.length - 1
	let orientationPreceding = orientationArrayString.length - 2
	for (let i = 0; i < orientationArrayString.length; i++) {
		switch (i) {
			case 0:
				// This will be the .beginning or .prefix
				if (Math.floor(Math.random() * 4) > 0) {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].beginning[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].beginning.length)
						]
					)
				} else {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].prefix[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].prefix.length)
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
									letterUnits[orientationArrayString[i]].endRhymeGroup[keyHolder2[0]].length
							)
						]
					)
				} else {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].suffixRhymeGroup[keyHolder2[1]][
							Math.floor(
								Math.random() *
									letterUnits[orientationArrayString[i]].suffixRhymeGroup[keyHolder2[1]].length
							)
						]
					)
				}
				break

			case orientationPreceding:
				if (
					orientationArrayString[i] === 'Vowels' &&
					orientationArrayString[i + 1] === 'Consonants'
				) {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].middleRhymeGroup[precedingKey2[0]][
							Math.floor(
								Math.random() *
									letterUnits[orientationArrayString[i]].middleRhymeGroup[precedingKey2[0]].length
							)
						]
					)
				} else {
					assembledWordsArray.push(
						letterUnits[orientationArrayString[i]].middle[
							Math.floor(Math.random() * letterUnits[orientationArrayString[i]].middle.length)
						]
					)
				}
				break
			default:
				// This will be the .middle
				assembledWordsArray.push(
					letterUnits[orientationArrayString[i]].middle[
						Math.floor(Math.random() * letterUnits[orientationArrayString[i]].middle.length)
					]
				)
				break
		}
	}
	precedingKey2.pop()
	keyHolder2.pop()
	keyHolder2.pop()
}

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
		// this is vcvc
		gorientation = document.getElementById('graphemeStructure').value
	}
	orientation()
	function structureGet() {
		// this is 1122 or 1212
		structure = document.getElementById('vcvcStructure').value
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

	function structureProducer() {
		// This executes the actual generation
		structureOrientation()
	}
	structureProducer()
}

let deletedDivs = []

// 0 is modify 1 is delete
var removeOrModify = 0

function deleteRadio() {
	removeOrModify = 1
	if (dynamicTextBoxLimit) {
		// if a dynamic text input already exists replace it with it's original div then continue as normal
		let olderTextInput = document.getElementById('dynamicInput')
		if (olderTextInput.parentNode) {
			let olderDiv = originalDivs.pop()
			olderDiv.style.fontWeight = 'lighter'
			olderTextInput.parentNode.replaceChild(olderDiv, olderTextInput)
			console.log(olderDiv)
			dynamicTextBoxLimit--
		}
	}
}
function modifyRadio() {
	removeOrModify = 0
}

let originalDivs = []

var dynamicTextBoxLimit = 0

function insertWords() {
	// This creates divs, which are the individual lines, with random Id's that when clicked get deleted.
	let words = []
	for (let i = 0; i < wordInformation.line; i++) {
		words.length = 0
		for (let j = 0; j < wordInformation.count; j++) {
			// This takes the individual words of the sentence array
			words.push(assembledSentence.shift())
		}
		let div = document.createElement('div')
		div.id = Math.random()
		div.style.fontFamily = 'soleil, sans-serif'
		div.style.color = '#2f526b'
		div.style.fontWeight = 'lighter'
		div.style.fontStyle = 'normal'
		div.style.fontSize = '17px'
		div.style.lineHeight = '1.6'
		div.style.cursor = 'pointer'
		div.onmouseover = () => {
			div.style.fontWeight = 'bolder'
		}
		div.onmouseout = () => {
			div.style.fontWeight = 'lighter'
		}
		div.onclick = function () {
			// This ties a function of onclick to each div created which reads the element's id and deletes it
			if (removeOrModify) {
				let id = this.id
				let strId = id.toString()
				let divLine = document.getElementById(strId)
				let divArray = Array.from(document.getElementById('generatedWords').childNodes)
				let divIndex = divArray.filter((x) => x.id === strId)[0]
				let arrayDivIndex = divArray.indexOf(divIndex)
				deletedDivs.push([divLine, arrayDivIndex])
				divLine.remove()
			} else {
				// This creates a text input from which the text of any div can be modified
				if (dynamicTextBoxLimit) {
					// if a dynamic text input already exists replace it with it's original div then continue as normal
					let olderTextInput = document.getElementById('dynamicInput')
					let olderDiv = originalDivs.pop()
					olderDiv.style.fontWeight = 'lighter'
					olderTextInput.parentNode.replaceChild(olderDiv, olderTextInput)
					dynamicTextBoxLimit--
				}
				// This is for telling if a dynamic text input exists currently
				dynamicTextBoxLimit++
				// create the text input
				let dynamicInput = document.createElement('INPUT')
				dynamicInput.setAttribute('type', 'text')
				dynamicInput.id = 'dynamicInput'

				console.log(dynamicInput)

				// dynamicInput.style.width = '1em'
				// default is 12.5em for 23 characters
				// for every next character add 0.5em
				// max is 26em

				let id = this.id
				let strId = id.toString()
				let divLine = document.getElementById(strId)

				let length = divLine.innerText.length
				console.log(divLine.innerText, length)
				if (length / 2 > 12.5) {
					if ((length - 23) / 2 + 12.5 > 26) {
						dynamicInput.style.width = '26em'
					} else {
						dynamicInput.style.width = `${(length - 23) / 2 + 13.5}em`
					}
				}

				// console.log(divLine)
				originalDivs.push(divLine)
				// set the input value to what the text is
				dynamicInput.setAttribute('value', divLine.innerText)
				// replaces the original div with the new text input with the value filled in
				let parentDiv = divLine.parentNode
				parentDiv.replaceChild(dynamicInput, divLine)
				// adds the ability to hit enter
				document.getElementById('dynamicInput').addEventListener('keyup', (event) => {
					if (event.key === 'Enter') {
						let originalDiv = originalDivs.pop()
						originalDiv.style.fontWeight = 'lighter'
						originalDiv.innerText = dynamicInput.value
						parentDiv.replaceChild(originalDiv, dynamicInput)
						// This removes the flag for a text input existing
						dynamicTextBoxLimit--
					}
				})
			}
			let selection = document.getElementById('dynamicInput')
			selection.focus()
			let length = selection.innerText.length
			selection.setSelectionRange(length - 1, length - 1)
		}
		div.innerHTML = words.join(' ') // This will be the content of a line

		document.getElementById('generatedWords').appendChild(div)
	}
}

function deleteAll() {
	let rhymeLines = document.getElementById('generatedWords')
	let allRhymesDeletedDiv = []
	while (rhymeLines.firstChild) {
		allRhymesDeletedDiv.push([document.getElementById(rhymeLines.firstChild.id), 0, 1])
		rhymeLines.removeChild(rhymeLines.firstChild)
	}
	console.log(allRhymesDeletedDiv)
	deletedDivs.push(...allRhymesDeletedDiv)
}

function undoDeleted() {
	// deletedDiv is the single div undo is performing on;
	// it is an array with index 0 = the actual div and index 1 = the index of its original position and possibly index 2 = signal that deleteAll was used
	let undoDeleteAll = []
	let deletedDiv = deletedDivs.pop()
	if (deletedDiv[2]) {
		undoDeleteAll.push(deletedDivs.filter((x) => x[2] === 1).length)
		document
			.getElementById('generatedWords')
			.insertBefore(
				deletedDiv[0],
				document.getElementById('generatedWords').childNodes[deletedDiv[1]]
			)
		for (let i = 0; i < undoDeleteAll[0]; i++) {
			let loopDeletedDiv = deletedDivs.pop()
			document
				.getElementById('generatedWords')
				.insertBefore(
					loopDeletedDiv[0],
					document.getElementById('generatedWords').childNodes[loopDeletedDiv[1]]
				)
		}
	} else {
		document
			.getElementById('generatedWords')
			.insertBefore(
				deletedDiv[0],
				document.getElementById('generatedWords').childNodes[deletedDiv[1]]
			)
	}
	// This ensures that if undoDelete is used on a deleteAll then if a dynamic text input exists it will get replaced with its original
	if (dynamicTextBoxLimit) {
		let olderTextInput = document.getElementById('dynamicInput')
		if (olderTextInput.parentNode) {
			let olderDiv = originalDivs.pop()
			olderTextInput.parentNode.replaceChild(olderDiv, olderTextInput)
			dynamicTextBoxLimit--
		}
	}
}

function advancedSettingsSwap() {
	let graphemeStructure = document.getElementsByClassName('graphemeStructure')
	let VCOrientation = document.getElementById('graphemeStructure')
	let checkboxToggle = document.getElementById('genButton')

	console.log(graphemeStructure[0].style.display)
	if (graphemeStructure[0].style.display === '' || graphemeStructure[0].style.display === 'none') {
		graphemeStructure[0].style.display = 'block'
		graphemeStructure[1].style.display = 'block'
		checkboxToggle.style.marginTop = '2.1em'
	} else {
		// clear advanced options
		graphemeStructure[0].style.display = 'none'
		graphemeStructure[1].style.display = 'none'
		checkboxToggle.style.marginTop = '0.5em'
		VCOrientation.value = ''
	}
}

// Let's you hit enter for the putting in a youtube video
window.onload = function () {
	document.getElementById('youtubeLink').addEventListener('keyup', (event) => {
		event.key === 'Enter' ? document.getElementById('youtubeButton').click() : undefined
	})
}

let afterID = /\&.*$/
// let grabRegex = /\b\/.*/
let embedRegex = /watch\?v=/

let beforeID = /.*\//

// https://youtu.be/rmhwCYeUVbU

// https://www.youtube.com/watch?v=rmhwCYeUVbU

// https://www.youtube.com/embed/rmhwCYeUVbU

function getYoutube() {
	// initial link
	let link = document.getElementById('youtubeLink').value
	// removes everything after the video id
	let linkStep2 = link.replace(afterID, '')
	// removes everything before the video id
	let linkStep3 = linkStep2.replace(beforeID, '')
	console.log(linkStep3)
	let linkStep4 = linkStep3.replace(embedRegex, '')
	console.log(linkStep4)
	let finalLink = 'https://www.youtube.com/embed/' + linkStep4
	console.log(finalLink)
	// If a video already exists remove it before adding the new one
	if (document.getElementById('randomid')) {
		document.getElementById('randomid').remove()
	}
	// After inputting a link clear the input box
	document.getElementById('youtubeLink').value = ''
	// Create the iframe
	let iframe = document.createElement('iframe')
	iframe.width = '256'
	iframe.height = '144'
	iframe.id = 'randomid'
	iframe.allowFullscreen = 1
	iframe.setAttribute('src', finalLink)
	iframe.setAttribute(
		'allow',
		'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
	)
	document.getElementById('player').appendChild(iframe)
}

function OverlordAndInsert() {
	OVERLORD()
	// Overlord generates
	insertWords()
}
