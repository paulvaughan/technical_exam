'strict mode'

let elForm = document.getElementById('dev-form')

let CoderFile = function (name, language, school) {
  this.name = name
  this.language = language
  this.school = school
}

CoderFile.prototype.showCoderDetails = function() {
  let coders = []
  let studentDiv = document.createElement('div')
  let ulElement = document.createElement('ul')
  studentDiv.appendChild(ulElement)
  document.body.appendChild(studentDiv)
  coders.push(this.name, this.language, this.school)
  for(coder of coders){
    let liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.innerText = coder
  }
}

  let rubyCodie = new CoderFile('Jon Snow', 'Ruby', 'Winterfell')
  let pythonCodie = new CoderFile('Tyron Lannister', 'Python', 'House Lannister')

  let developers = []
  developers.push(rubyCodie, pythonCodie)

function displayCoderDetails(array){
  for(let element of array){
    element.showCoderDetails()
  }
}
displayCoderDetails(developers)

let name = elForm.name
let language = elForm.language
let school = elForm.school

elForm.addEventListener('submit', function(event) {
  event.preventDefault()
  newCoder = new CoderFile(name.value, language.value, school.value)
  developers.push(newCoder)

  console.log(newCoder) //Console log to test functionality of code
  newCoder.showCoderDetails()
  localStorage.setItem('codeDatabase', JSON.stringify(newCoder))
})