
exports.Sum = function(num1, num2){
	return num1 + num2;
}

exports.SumOfArray = function(arrayOfNums){

	var sum = 0;

	for(var i = 0; i < arrayOfNums.length; i++){
		sum += arrayOfNums[i];
	}
	return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var sum = 0;
	var numWasSeen = new Object();

	for(var i = 0; i < arrayOfNums.length; i++)
	{
		var number = arrayOfNums[i];

		if(numWasSeen[number] == null){
			sum += number;
			numWasSeen[number] = true;
		}
	}
	return sum;


}

exports.ReverseString = function(str){

	var len = str.length;
	var temp = str.charAt(len-1);

	for(var i = len - 2; i >= 0; i--){
		temp = temp.concat(str.charAt(i));
	}

	return temp;

}


exports.ReverseArrayOfStrings = function(arrayOfStrings){


}