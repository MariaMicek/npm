// const moment = require('moment')     //tylko dla środowiska node, a nie dla przeglądarki (dla przeglądarki trzeba załączyc ścieżkę w scripcie)

console.log('hello world')

for (let i = 0; i < 10; i++) {
    console.log(`Line ${i}`)
}

const timeNow = new Date()
console.log(timeNow.toString())

const momentNow = moment().endOf('day').fromNow()
console.log(momentNow)

document.getElementById('content').innerHTML = `<span> The end of the day: ${momentNow} </span>`