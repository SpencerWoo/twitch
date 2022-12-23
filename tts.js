const say = require('say')

async function speak(text){
	say.speak(text)
}

module.exports = { speak }
