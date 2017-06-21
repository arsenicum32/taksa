'use strict';

setInterval(function (_) {
  var t = $('#t').text();
  $('#t').text(t + " hello");
}, 400);
