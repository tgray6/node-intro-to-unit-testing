const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

	it("should return proper string values for remainders of 0, else return the number itself", function(){

		const normalCases = [
		{num: 3, expected: "fizz"},
		{num: 5, expected: "buzz"},
		{num: 15, expected: "fizz-buzz"},
		{num: 1, expected: 1}
		];

		normalCases.forEach(function(input){
			const answer = fizzBuzzer(input.num);
				answer.should.equal(input.expected);
		});
		});

	  it('should raise error if args are a string, null, or undefined', function() {
    // range of bad inputs where not both are numbers
    const badInputs =["string", true, false] ;
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });


});

