 let name = "inder";
 let age ="24"

//console.log(name+age)//this method is old and we are use this for concadinate variables
//new mothod 
// console.log(`my name is ${name} my age is ${age}`); we have to use this method 

// there is another way of declare a string 

const gamename = new String("inder")

// there are arround 53 mothods in prototype of string

1. // anchor: f anchor() avoid this method

2. // String.prototype.at() {
   // the at() method of String values takes an integer value and returns a new String means you can check character at on the given index }


3. // String.prototype.big(). avoid this method. this for big font for string

4. //String.prototype.blink(). avoid this method. this is for giving a blink effect to string 

5.//String.prototype.bold(). avoid this method. this is for displayed string to be bold

6.//String.prototype.charAt(){
// this is used for find the character at given index value}
 
7.//String.prototype.charCodeAt(). this is used for find the chractor code at given index

8.//String.prototype.concat() this for concatinate two string example = console.log(str1.concat(str2));

9.//String.prototype.endsWith(){
//     const str1 = "Cats are the best!";

//     console.log(str1.endsWith("best!"));
//     // Expected output: true
    
//     console.log(str1.endsWith("best", 17));
//     // Expected output: true
    
//     const str2 = "Is this a question?";
    
//     console.log(str2.endsWith("question"));
//     // Expected output: false
    
// }


10.//String.prototype.fixed(). avoid this method. this is for displayed a string fixed font width 

11.//String.prototype.fontcolor(). avoid this method this is provide a string a specified font color

12.//String.prototype.fontsize(). avoid this method this is provide a string a specified font size

13.//String.prototype.includes(){
//SYNTEX = includes(searchString) for search string
//includes(searchString, position) for search string and its position
// The includes() method is case sensitive. For example = "Blue Whale".includes("blue"); // returns false

// FOR EXAMPLE =>
// const word = "fox";

// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? "is" : "is not"
//   } in the sentence`,
// );
// Expected output: "The word "fox" is in the sentence"

14.//String.prototype.indexOf(). this is for finding index of string 
// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const searchTerm = "dog";
// const indexOfFirst = paragraph.indexOf(searchTerm);

// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// // Expected output: "The index of the first "dog" is 15"

// console.log(
//   `The index of the second "${searchTerm}" is ${paragraph.indexOf(
//     searchTerm,
//     indexOfFirst +1,
//   )}`,
// );

15.//String.prototype.isWellFormed() this is allow you to test wether string is well formed(does not contain any lone surrogates). compared to a custom impletation iswellformed is more efficent,as engines can directly access the internal representation of strings. If you need to convert a string to a well-formed string, use the toWellFormed() method. isWellFormed() allows you to handle ill-formed strings differently from well-formed strings, such as throwing an error or marking it as invalid.

16.//String.prototype.italics(). (avoid this method) this causes this string to be displayed as italic.

17.//String.prototype.lastIndexOf().const paragraph = "I think Ruth's dog is cuter than your dog!"; {this will return the last index of the string}

// const searchTerm = "dog";

// console.log(
//   `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
// );
// Expected output: "Index of the last "dog" is 38"

18.//String.prototype.link() (avoid this method). {this is used as hypertext link to another url}

19.//String.prototype.localeCompare(). {this is for comparing to string if they are equal this result 0 or vise versa 1}

20.//String.prototype.match(). {it will find macth to the given value}
// for example{
   // const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
   // const regex = /[A-Z]/g;
   // const found = paragraph.match(regex);
   
   // console.log(found);
   // // Expected output: Array ["T", "I"]
   // // } 

21.//String.prototype.matchAll().he matchAll() method of String values returns an iterator of all results matching this string against a regular expression, including capturing groups.

22.//String.prototype.normalize(){this provide a normalize value of string}for example{
   // const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
   // const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";
   
   // console.log(`${name1}, ${name2}`);
   // // Expected output: "Amélie, Amélie"
   // console.log(name1 === name2);
   // // Expected output: false
   // console.log(name1.length === name2.length);
   // // Expected output: false
   
   // const name1NFC = name1.normalize("NFC");
   // const name2NFC = name2.normalize("NFC");
   
   // console.log(`${name1NFC}, ${name2NFC}`);
   // // Expected output: "Amélie, Amélie"
   // console.log(name1NFC === name2NFC);
   // // Expected output: true
   // console.log(name1NFC.length === name2NFC.length);
   // // Expected output: true
   // }

   23.//String.prototype.padEnd(). {The padding is applied from the end of this string.
   // const str1 = "Breaded Mushrooms";

   // console.log(str1.padEnd(25, "."));
   // // Expected output: "Breaded Mushrooms........"
   
   // const str2 = "200";
   
   // console.log(str2.padEnd(5));
   // // Expected output: "200  "
   // }

   24.//String.prototype.padStart().{The padding is applied from the start of this string.}
//    const str1 = "5";

// console.log(str1.padStart(2, "0"));
// // Expected output: "05"

// const fullNumber = "2034399002125581";
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

// console.log(maskedNumber);
// // Expected output: "************5581"]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

25.//String.prototype.repeat().{this repeat the given value by the given times in the string for example}
// const mood = "Happy! ";

// console.log(`I feel ${mood.repeat(3)}`);
// // Expected output: "I feel Happy! Happy! Happy! "

26.//String.prototype.replace().{The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", "my"));
// // Expected output: "I think my dog is cuter than your dog!"

// const regex = /Dog/i;
// console.log(paragraph.replace(regex, "ferret"));
// // Expected output: "I think Ruth's ferret is cuter than your dog!"
// }

27.//String.prototype.replaceAll().{he replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.const paragraph = "I think Ruth's dog is cuter than your dog!"; {this can replace all your substring which can similer to given replacemnet value}

// console.log(paragraph.replaceAll("dog", "monkey"));
// // Expected output: "I think Ruth's monkey is cuter than your monkey!"

// // Global flag required when calling replaceAll with regex
// const regex = /Dog/gi;
// console.log(paragraph.replaceAll(regex, "ferret"));
// // Expected output: "I think Ruth's ferret is cuter than your ferret!"
// }

28.//String.prototype.search().{The search() method of String values executes a search for a match between a regular expression and this string, returning the index of the first match in the string.

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// // Anything not a word character, whitespace or apostrophe
// const regex = /[^\w\s']/g;

// console.log(paragraph.search(regex));
// // Expected output: 41

