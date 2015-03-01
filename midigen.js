var Midi = require('jsmidgen')
  , fs = require('fs')

module.exports = function (digits, callback) {
  var l = digits.length
    , file = new Midi.File()
    , track = new Midi.Track()
  file.addTrack(track)
  track.setInstrument(0, 0x25)
  //console.log("Length: " + l);

  for (var i = 0; i < l; i++) {
    //console.log("LOGGING I: " + digits[i]);
    switch (digits[i]) { 
      case '1': 
        track.addNote(0, 'c4', 64)
        break
      case '2':
        track.addNote(0, 'd4', 64)
        break
      case '3':
        track.addNote(0, 'e4', 64)
        break
      case '4':
        track.addNote(0, 'f4', 64)
        break
      case '5':
        track.addNote(0, 'g4', 64)
        break
      case '6': 
        track.addNote(0, 'a4', 64)
        break
      case '7':
        track.addNote(0, 'b4', 64)
        break
      case '8': 
        track.addNote(0, 'c5', 64)
        break
      case '9':
        track.addNote(0, 'd5', 64)
        break
      case '*': 
        track.addNote(0, 'e5', 64)
        break
      case '0':
        track.addNote(0, 'f5', 64)
        break
      case '#': 
        track.addNote(0, 'g5', 64)
        break
    }
  }
  fs.writeFile('./public/output.mid', file.toBytes(), 'binary', function (err) { 
    if (err) {
      console.log('err : ' + err)  
      callback(err)
    } else {
      callback()
    }
  })
}
