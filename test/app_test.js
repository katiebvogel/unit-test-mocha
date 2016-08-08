var addOne = require('../src/app.js').addOne;
var expect = require('chai').expect;



//tests will always start with a describe function which takes two arguments
//the "describe block" can contain many tests (a suite of tests)
describe('testing the addOne function', function(){

  it('should add 1 to the argument', function(){
    //here is where actual test code lives
    var number = -42.1;
    var result = addOne(number);
    expect(result).to.equal(-41.1);
  });

  //it(...);   other tests ..

  //describe()    you can add another describe block within the original describe block



});


//you will run the test using the command line ... enter mocha ...
//   or...  node_modules/.bin/mocha


//or npm install -g mocha ..  which I just did .   so just enter "mocha" on command line.  It will run a test in the terminal for you.  Pretty neat!
