function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

<<<<<<< HEAD


function sayHiToGrandma(string) {
  
  if (string.toLowerCase() === string ) {
    return "I can't hear you!"
  } 
  else if (string.toUpperCase() === string ) {
    return "YES INDEED!"
  } 
  else if (string === "I love you, Grandma.") {
  return "I love you, too." 
}
}
=======
var lowercase = 'hello!'
var uppercase = "HELLO!"

function sayHiToGrandma(string) {
  if (string === lowercase) {
    return "I can't hear you!"
  }
  if (string === uppercase) {
    return "YES INDEED"
  }
  if (string === "I ")
  return string 
}
describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
>>>>>>> bab671fe269f238c887335c2c92c487c9e420e8b
