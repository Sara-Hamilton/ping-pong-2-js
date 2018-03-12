export function pingPong(userNum) {
  var output = [];
  for (var i = 1; i <= userNum; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  } // for
  return output;
} // pingPong
