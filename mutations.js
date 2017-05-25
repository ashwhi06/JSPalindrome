// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
	var firstCheck = arr[0].toLowerCase().split(''); 
	var secondCheck = arr[1].toLowerCase().split('');

for (var i = 0; i < secondCheck.length; i++) { //loop through the secondCheck in order to compare with the firstCheck
	if (firstCheck.indexOf(secondCheck[i]) == -1) { //use indexOf to check if letters in the index match
		return false;
	}
}
  return true;
}