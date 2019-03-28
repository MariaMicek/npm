import moment from 'moment'                  //importuje zainstalowany w node_modules pakiet moment
import {Summator, multiply} from './math.js'            //importuje zmienne z math.js
import * as Operations from './test.js'

console.log('hello world')

for (let i = 0; i < 10; i++) {
    console.log(`Line ${i}`)
}

const timeNow = new Date()
console.log(timeNow.toString())

const momentNow = moment().endOf('day').fromNow()
console.log(momentNow)

let result = Summator(5, 10)
let multiplyResult = multiply(20, 50)

document.getElementById('content').innerHTML = 
`<p> The end of the day: ${momentNow} </p> 
 <p> Sum result: ${result}</p>
 <p> Multiply result: ${multiplyResult} </p>
 <p> ${JSON.stringify(Operations)}</p>`