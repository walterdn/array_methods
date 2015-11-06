exports.push = function(myArr) {
	for (var i=1; i<arguments.length; i++) {
		myArr[myArr.length] = arguments[i];
	}
	return myArr.length;
};

exports.pop = function(myArr) {
	var popped = myArr[myArr.length - 1];
	myArr.length--;
	return popped;
};

exports.shift = function(myArr) {
	var removed = myArr[0];
	for (var i=0; i<myArr.length-1; i++) {
		myArr[i] = myArr[i+1];
	}
	myArr.length--;
	return removed;
};

exports.unshift = function(myArr) {
	var oldLength = myArr.length;
	var numberOfItems = arguments.length - 1;
	for (var i=0; i<numberOfItems; i++) {
		myArr.length++;
	}
	for (i=1; i<oldLength+1; i++) {
	 	myArr[myArr.length - i] = myArr[myArr.length - i - numberOfItems];
	}
	for (i=0; i<numberOfItems; i++) {
		myArr[i] = arguments[i+1];
	}
	return myArr.length;
};
	
exports.unique = function(myArr) {
	var uniqArr = [];
	var alreadyInUniq;
	var counter = 0;

	for (i=0; i<myArr.length; i++) {
		alreadyInUniq = false;
		for (j=0; j<uniqArr.length; j++) {
			if (myArr[i] == uniqArr[j]) alreadyInUniq = true;
		}
		if (!alreadyInUniq) {
			uniqArr[counter] = myArr[i]; 
			counter++;
		}
	}
	return uniqArr;
};

exports.frequency2 = function(wordArr) {

	function unique(myArr) {
		var uniqArr = [];
		var alreadyInUniq;
		var counter = 0;

		for (i=0; i<myArr.length; i++) {
			alreadyInUniq = false;
			for (j=0; j<uniqArr.length; j++) {
				if (myArr[i] == uniqArr[j]) alreadyInUniq = true;
			}
			if (!alreadyInUniq) {
				uniqArr[counter] = myArr[i]; 
				counter++;
			}
		}
		return uniqArr;
	}

	function setLetterCounts(myArr, letterCounts) { //works very similarly to unique function, except it keeps a count of every duplicate it finds and returns an array with the counts.
		var uniqArr = [];
		var alreadyInUniq;
		var counter = 0;

		for (i=0; i<myArr.length; i++) {
			alreadyInUniq = false;
			for (j=0; j<uniqArr.length; j++) {
				if (myArr[i] == uniqArr[j]) {
					alreadyInUniq = true;
					letterCounts[j]++;
				}	
			}
			if (!alreadyInUniq) {
				uniqArr[counter] = myArr[i]; 
				counter++;
			}
		}
		return letterCounts;
	}

	//concatenate every word in array into one string
	var string = '';
	for (var i=0; i<wordArr.length; i++) {
		string += wordArr[i];
	}

	//converts string into an array where each element is one character of string
	var letterArr = [];
	for (i=0; i<string.length; i++) {
		letterArr.push(string[i]);
	} 

	//creates an array of all letters with no duplicates
	var uniqLetters = unique(letterArr);

	//create an array which has the same number of elements as uniqLetters array. letterCounts[x] = the frequency of the letter at uniqLetters[x] within the string.
	letterCounts = [];
	for (i=0; i<uniqLetters.length; i++) {
		letterCounts.push(1);
	}
	letterCounts = setLetterCounts(letterArr, letterCounts); 

	//finds highest count in the letterCounts array. 
	var highest = 1; //(highest frequency)
	var indexOfHighest = 0;
	for (i=0; i<letterCounts.length; i++) {
		if (letterCounts[i] > highest) {
			highest = letterCounts[i];
			indexOfHighest = i;
		}
	}

	//returns the letter which had the highest count.
	return uniqLetters[indexOfHighest];
};


