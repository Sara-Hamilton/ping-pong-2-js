import { pingPong } from './ping-pong';

$(document).ready(function(){
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var userNum = $('#userNum').val();
    var output = pingPong(userNum);
    output.forEach(function(item) {
      $('#solution').append("<li>" + item + "</li>");
    });
  });
});
