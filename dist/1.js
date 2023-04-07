"use strict";

function op() {
  var ji = 10;
  var s = function s() {
    console.log("pdsodps");
    return 1, console.log("sasas"), ji && 1 == 1 || console.log("sasassa2s"), 2;
  };
  var d = s();
  console.log(d);
  return ji + d;
}

var d = op();
console.log(d);
