'use strict';
//in the shortest amount of code possible, loop through 1-100; if a # is divisible by 3 --> fizz to the browser. if /5, buzz. if /15 fizzbuzz, but not fizz or buzz
// document.write('Hello?');
// for (var i=0; i<=100; i++) {
//   if (i%15===0) {
//     document.write(i + ': fizz-buzz' +'<br/>')
//   }
//   else if(i%3===0){
//     document.write(i + ': fizz' + '<br/>');
//   }
//   else if (i%5===0) {
//     document.write(i + ': buzz' + '<br/>')
//   }
// }

// var things='This is a long string of words with (parentheses) and some other ones (.'
var tests = ['(ghghj(jmn))n', 'mm0(()', ')jnh00()', '(kkj()l,k())', '(kjhnjkh()(()', '))((', ')()('];

function compareParen(string) {
  var counter=0;
  for (var i=0; i<string.length; i++){
    var letter=string.charAt(i)
    // document.write(letter);
    if (letter==='('){
      counter++;
    }
    else if (letter===')'){
      counter--;
    }
    if (counter < 0) {
      return 'Nope!';
    }
  }
  if (counter===0) {
    return 'Yes';
  }
  else {
    return 'Sorry, missing one.'
  }

}

for (var i in tests) {
  var test = tests[i];
  document.write(test + ': ' + compareParen(test) + '<br/>');
}
