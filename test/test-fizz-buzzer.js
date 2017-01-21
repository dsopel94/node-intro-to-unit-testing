const fizzBuzzer = require('../fizzBuzzer')

require('chai').should();

describe('fizzBuzzer', function() {
	it('should return fizz for multiples of 3', function() {
		const fizz = [3,6,9,12];
		fizz.forEach(function(input){
			fizzBuzzer(input).should.equal('fizz');
		})
	});
	it('should return buzz for multiples of 5', function() {
		const buzz = [5,10,20];
		buzz.forEach(function(input){
			fizzBuzzer(input).should.equal('buzz');
		})
	});
	it('should return fizz for multiples of 3', function() {
		const fizzbuzz = [15,30,45];
		fizzbuzz.forEach(function(input){
			fizzBuzzer(input).should.equal('fizz-buzz');
		})
	});
	it('should throw error if input isnt a number', function() {
		const badInput = [true,false, function() {}, [1,2,3]] 
		badInput.forEach(function(input) {
			(function() {
				return fizzBuzzer(input)
			}).should.throw(Error);
			
		})
	})
}); 