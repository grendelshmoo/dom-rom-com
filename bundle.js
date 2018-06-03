(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// const movies = [
//   { title: 'Say Anything...', year: 1989, score: '98%', starring: 'John Cusack, Ione Skye, John Mahoney, Lili Taylor' },
//   { title: 'Groundhog Day', year: 1993, score: '96%', starring: 'Bill Murray, Andie MacDowell, Chris Elliott, Stephen Tobolowsky' },
//   { title: 'Obvious Child', year: 2014, score: '90%', starring: 'Jenny Slate, Gaby Hoffmann, David Cross, Jake Lacy' }
// ]
//
// module.exports = movies


const movies = [
  { title: 'Say Anything...', year: 1989, score: '98%', starring: 'John Cusack, Ione Skye, John Mahoney, Lili Taylor' },
  { title: 'Groundhog Day', year: 1993, score: '96%', starring: 'Bill Murray, Andie MacDowell, Chris Elliott, Stephen Tobolowsky' },
  { title: 'Obvious Child', year: 2014, score: '90%', starring: 'Jenny Slate, Gaby Hoffmann, David Cross, Jake Lacy' },
  { title: 'The Big Sick', year: 2017, score: '98%', starring: 'Kumail Nanjiani, Zoe Kazan, Holly Hunter, Ray Romano' },
  { title: 'Roman Holiday', year: 1953, score: '98%', starring: 'Audrey Hepburn, Gregory Peck, Eddie Albert, Tullio Carminati' },
  { title: 'City Lights', year: 1931, score: '98%', starring: 'Charles Chaplin, Virginia Cherrill, Harry Myers, Florence Lee' },
  { title: 'The Princess Bride', year: 1987, score: '97%', starring: 'Cary Elwes, Robin Wright, Mandy Patinkin, Chris Sarandon' },
]

module.exports = movies

},{}],2:[function(require,module,exports){
// const movies = require('./data')
// const movieTemplate = require('./templates')
//
// movies.forEach(movie => {
//   const tbody = document.querySelector('tbody')
//   tbody.innerHTML += movieTemplate(movie)
//
// })

// This works

// const h2 = document.querySelector('h2')
// h2.addEventListener('click', () => {
//   alert(h2.textContent)
// })


// This does not
// function is invoked when the page loads, after which the function value is set to undefined.  remove the trailing parens at the invocation and it will work.

// const h2 = document.querySelector('h2')
// const alertFn = () => {
//   alert(h2.textContent)
// }
// h2.addEventListener('click', alertFn())

//querySelectorAll returns a nodelist.  eventlistener will not act upon a list, only on an individual node.
//
// const th = document.querySelectorAll('th')
// const alertFn = () => {
//   alert(th.textContent)
// }
// th.addEventListener('click', alertFn)

// same as above
//
// const th = document.querySelectorAll('th')
// const alertFn = () => {
//   alert(th.textContent)
// }
// Array.from(th).forEach(element => element.addEventListener('click', alertFn))

// returns info from the targeted node.
//
//
// const th = document.querySelectorAll('th')
// const alertFn = (event) => {
//   alert(event.target.textContent)
// }
// Array.from(th).forEach(element => element.addEventListener('click', alertFn))
//


const movies = require('./data')
const generateRow = require('./templates')

const th = document.querySelectorAll('th')
const sortFn = (event) => {
  console.log('Getting ready to sort by:', event.target.textContent)
}

Array.from(th).forEach(element => {
  element.addEventListener('click', sortFn)
})

function render () {
  const newRows = movies.map(generateRow)
  document.querySelector('tbody').innerHTML = newRows.join('')
}

render()






//DOMContentLoaded - alternative to defer or adding your script at the end of your body.

//const heading = document.querySelector('h1')

// const h1element = document.querySelector('h1').textContent
// const tableRows = document.querySelector('tbody').textContent

// document.querySelector("h1").innerHTML = "DOM Romantic Comedies"
// //const yearArray = document.getElementsByTagName("TR")[1].children[1].textContent
//
//
// const trsElements = document.querySelectorAll('tbody tr')
// const trs = Array.from(trsElements)
//
// trs.forEach((element) => {
//
// let array = element.children[3].textContent.split(',')
// element.children[3].innerText = `${array} (${array.length})`
//
//
//
// console.log(array)
//
//
//
// })
// console.log(heading)
// console.log(h1element)
// console.log(tableRows)

// array.from

},{"./data":1,"./templates":3}],3:[function(require,module,exports){
function movieTemplate (movie) {
  return `
  <tr>
    <td>${movie.title}</td>
    <td>${movie.year}</td>
    <td>${movie.score}</td>
    <td>${movie.starring}</td>
  </tr>
`
}

module.exports = movieTemplate
  

},{}]},{},[2]);
