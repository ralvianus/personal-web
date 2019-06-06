var htmlElement, text, tw, typewriter, word, _i, _len;

text = ["Hello World", "Welcome to alvianus.net", "This page is inspired by terminal window"];

htmlElement = document.getElementById("text");

typewriter = require('typewriter');

tw = typewriter(htmlElement).withAccuracy(95).withMinimumSpeed(7).withMaximumSpeed(15).build();

for (_i = 0, _len = text.length; _i < _len; _i++) {
  word = text[_i];
  tw.clear().waitRange(1000, 2000).type(word).wait(2000).clear();
}