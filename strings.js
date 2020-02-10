var message = "Good Afternoon Guys"

//to find length
console.log('length of the string is', message.length);

//to find the character at a particular index
console.log('character at index 0 is', message.charAt(0));

//to find ascii value of character at particular index
console.log('ascii value of character at index 0 is', message.charCodeAt(0));

//to get a sunstring the base string
var subString = message.substr(0,4);
console.log(subString);

//splitting the string into character array
var charArray =message.split('');
console.log(charArray);

//reversing the array
var reversedCharArray = charArray.reverse();
console.log(reversedCharArray);

//joinning the reversed array into string
var reversedMessage = reversedCharArray.join('');
console.log(reversedMessage);

//reversing the string in one line 
console.log(message.split('').reverse().join(''));

//splitting the string into string array
console.log(message.split(' '));

//splitting the string into string
console.log(message.split('  '));

//to find the character are present in our string
console.log(message.includes('Good'));
console.log(message.includes('good'));
console.log(message.toLowerCase().includes('Good'));
console.log(message.toLowerCase().includes('good'));

