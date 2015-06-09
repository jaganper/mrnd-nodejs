
describe("JSIntro Test Suite", function(){

	describe("JSIntro-Sum", function(){
		var JSIntro = require("../../git/newsfeed/JSIntro");

		it("sum of 2 and 3 is 5", function(){

			var i = JSIntro.Sum(2,3);
			expect(i).toEqual(5);
		});

		it("sum of -1 and 3 is 2", function(){

			var i = JSIntro.Sum(-1,3);
			expect(i).toEqual(2);
		});

	});

	describe("JSIntro-SumOfArray", function(){
		var JSIntro = require("../../git/newsfeed/JSIntro");

		it("sum of 2 and 3 is 5", function(){

			var i = JSIntro.SumOfArray([2,3]);
			expect(i).toEqual(5);
		});

	});

	describe("JSIntro-ReverseString", function(){
		var JSIntro = require("../../git/newsfeed/JSIntro");

		it("abc reversed is cba", function(){

			var str = JSIntro.ReverseString("abc");
			expect(str).toEqual("cba");
		});

	});
});
