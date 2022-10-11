const { inherits } = require('util')
const { EventEmitter } = require('events');
const ev = new EventEmitter()

function Character(name){
  this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin')
chapolin.on('help', ()=>console.log("Eu! O "+chapolin.name+" Colorado"))

console.log('Oh! e agora? Quem poderá me defender?')
chapolin.emit('help')