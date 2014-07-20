'use strict';


/**
 * Type comparisons
 */

// Loose comparisons

var a = 5;
var b = 7;
var c = '5';

if (a == b) {
  // document.write('a == b');
}

if (a != b) {
  // document.write('a != b' + '<br/>');
}

if (a == c) {
  // document.write('a == c' + '<br/>');
}

var d = false;
var e = [];

if (d == e) {
  // document.write('d == e' + '<br/>');
}

// Strict, typed comparisons

if (d === e) {
  // document.write('d === e' + '<br/>');
}

if (d !== e) {
  // document.write('d !== e' + '<br/>');
}

/**
 * Composite comparisons
 */

var a = 5;
var b = 6;
var c = 7;

if (b > a) {
  if (b < c) {
    // document.write('B is in the middle' + '<br/>');
  }
}

if (b > a && b < c) {
  // document.write('Shit\'s still in the middle.' + '<br/>');
}

if (a > b || b < c) {
  // document.write('One of the parameters was accurate.' + '<br/>');
}

if (a === b) {
  // document.write('a === b' + '<br/>');
}
else if (a === c) {
  // document.write('a === c' + '<br/>');
}
else {
  // document.write('They\'re all different' + '<br/>');
}

if (
    (a > b) ||
    (b < c) ||
    (c === a)
   ) {
    // Really long if block
}

/**
 * Loops
 */

var i = 0;
for (i = 0; i < 10; i++) {
  // document.write('Line ' + i + '<br/>');
}

var arr = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
for (var i = 0; i < arr.length; i++) {
  var val = arr[i];
  // document.write(val + '<br/>');
}


// forEach
arr.forEach(function(num, key) {
  // document.write(key + ': ' + num + '<br />');
});


// map
var lowercaseArr = arr.map(function(num) {
  return num.toLowerCase();
});

// document.write(JSON.stringify(lowercaseArr));


// Not block scoped, so incorrect.
for (var i in arr) {
  // document.write(val + '<br/>');
}

for (var i in arr) {
  // document.write(arr[i] + '<br/>');
}

var arr2 = [0, 1, 2, 3, 4, 5, 6, 7];
// Test for even number;
for (var i in arr2) {
  if (i % 2 === 0) {
    // document.write(i + '<br/>');
  }
}

// reduce
var result = arr2.reduce(function(memo, val, key) {
  return memo + val;
}, 0);

// document.write(result);
// Similar comparision with for loop
var result = 0;
for (var i in arr2) {
  result += arr2[i];
}
// document.write(result);



var result = 0;
// Find largest divisible by 3.
for (var i in arr2) {
  if (i % 3 !== 0) continue;
  result = i;
}

// document.write(result + ' is the largest number in arr2 divisible by 3.' + '<br/>');

result = 0;

for (var i in arr2) {
  if (i % 3 === 0 && i > 0) {
    result = i;
    break;
  }
}

// document.write(result + ' is the first number in arr2 divisible by 3.' + '<br/>');

// Switch statements
// var RESULT_FORM_COMPUTATION = 5;
var RESULT_FORM_COMPUTATION = 7;

switch (RESULT_FORM_COMPUTATION) {
  case 4:
    // document.write('It\'s 4');
    break;
  case 7:
  case 5:
    // document.write('It\'s 5 or 7');
    break;
}

switch (1 === 1) {
  case RESULT_FORM_COMPUTATION > 400:
  case RESULT_FORM_COMPUTATION < -7:
    // document.write('Something happened');
    break;
  case a < -100:
    // document.write('A is also greater than 1');
    break;
  default:
    // document.write('Nothing happened');
    break;
}

// While loops.
var found = false;
var i = 0;
while (!found) {
  ++i;
  if (i < 7) {
    // document.write(i + ' is less than 7' + '<br/>');
  }
  else {
    found = true;
  }
}
// document.write('Loop done');

/**
 * FUNCTIONS
 */

// class Person {
//   constructor() {
    // document.write('New person');
//   }
// }

function Person(name) {
  this.name = name;
  document.write('New person created.' + '<br/>');
}

// Person.sayHello = function() {
//   alert('Never do this');
// };

Person.prototype.sayHello = function() {
  document.write(this.name + ' says hello.' + '<br/>');
};

// Person.sayHello(); //throws error.;
var mike = new Person('mike');
mike.sayHello();

var FunctionPackage = {
  sayHello: function() {
    alert('This is ok');
  }
};

var MyPackage2 = {};
MyPackage2.sayHello = function() {
  alert('This is also ok');
};

// MyPackage2.sayHello();

var Greetings = {};
Greetings.sayHello = function() {};
Greetings.sayGoodbye = function() {};


// Node.js sample
// File helper
//
module.exports = {
  readFile: function(file) {
    // Code to read file
  },
  deleteFile: function() {
    // Code to delete file
  },
  moveFile: function() {
    // Code to move file
  }
}

// In another nodejs file
var file = require('./file-helper');
file.readFile('./myFile.txt');
file.deleteFile('./myOtherFile.txt');
file.moveFile('./myFile.txt', './myNewFile.txt');
