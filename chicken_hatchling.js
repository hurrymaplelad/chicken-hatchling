var frames = [
  ['       ',
   ' .-=-. ',
   '(     )',
   ' ~-=-~ '],
  ['       ',
   ' .-=-, ',
   "(  ,' )",
   ' ~-=-~ '],
  ['       ',
   ' .-=-, ',
   "(  ,^ )",
   ' ~-=-~ '],
  // ['   V   ',
  //  '  ( )  ',
  //  "(`\~/'')",
  //  ' ~-=-~ '],
  ['       ',
   '  (^)  ',
   "(`\~/')",
   ' ~-=-~ '],
  // ['       ',
  //  '  -@)  ',
  //  "(\(~)/)",
  //  ' ~-=-~ '],
  ['       ',
   '  (@<  ',
   "(\(~)/)",
   ' ~-=-~ '],
  ['       ',
   '  (@<  ',
   " (< )  ",
   '  ^^   '],

];


function write(string) {
  process.stdout.write(string);
}

function cursorUp(n) {
  write('\u001b[' + n + 'A');
}

function drawFrame(frame) {
  frame.forEach(function(row) {
    write(row+'\n');
  });
}

module.exports = function(duration, done) {
  var frameTime = duration / frames.length;
  var i = 0
  var frame = frames[i];
  drawFrame(frame);
  var id = setInterval(function() {
    frame = frames[++i];
    if(frame) {
      cursorUp(frame.length);
      drawFrame(frame);
    } else {
      clearInterval(id);
      done();
    }
  }, frameTime);
}
