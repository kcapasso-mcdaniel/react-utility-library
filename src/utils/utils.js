const watchList = [
   {
      Title: "Inception",
      Year: "2010",
      Rated: "PG-13",
      Released: "16 Jul 2010",
      Runtime: "148 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer: "Christopher Nolan",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      Metascore: "74",
      imdbRating: "8.8",
      imdbVotes: "1,446,708",
      imdbID: "tt1375666",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "910,366",
      imdbID: "tt0816692",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "The Dark Knight",
      Year: "2008",
      Rated: "PG-13",
      Released: "18 Jul 2008",
      Runtime: "152 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer:
         "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      Metascore: "82",
      imdbRating: "9.0",
      imdbVotes: "1,652,832",
      imdbID: "tt0468569",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Batman Begins",
      Year: "2005",
      Rated: "PG-13",
      Released: "15 Jun 2005",
      Runtime: "140 min",
      Genre: "Action, Adventure",
      Director: "Christopher Nolan",
      Writer:
         "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      Metascore: "70",
      imdbRating: "8.3",
      imdbVotes: "972,584",
      imdbID: "tt0372784",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "876,575",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
   },
];

export default class utils {
   // transfer all functions from out utility libraries
   static add(input1, input2) {
      // A1: any JavaScript value
      // A2: any JavaScript value
      // R: a single JavaScript value
      return input1 + input2;
   }
   static subtract(input1, input2) {
      // A1: any Javascript value
      // A2: any Javascript value
      // R: a single JavaScript value
      return input1 - input2;
   }
   static multiply(input1, input2) {
      // A1: any Javascript value
      // A2: any Javascript value
      // R: a single JavaScript value
      return input1 * input2;
   }
   static divide(input1, input2) {
      // A1: any Javascript value
      // A2: any Javascript value
      // R: a single JavaScript value
      return input1 / input2;
   }
   static increment(input) {
      // A1: any Javascript numeric value
      // R: a single JavaScript numeric value plus one
      input++;
      return input;
   }
   static decrement(input) {
      // A1: any Javascript numeric value
      // R: a single Javascript numeric value minus one
      input--;
      return input;
   }
   static decimalMultiply(input1, input2) {
      // A1: any Javascript numeric decimal value
      // A2: any Javascript numeric decimal value
      // R: a single JavaScript numeric decimal value
      return input1 * input2;
   }
   static decimalDivide(input1, input2) {
      // A1: any Javascript numeric decimal value
      // A2: any Javascript numeric decimal value
      // R: a single JavaScript numeric decimal value
      return input1 / input2;
   }
   static concatenatePlus(input1, input2) {
      // A1: indicates input1 is the beginning of a string
      // R: returns two strings together with proper spacing
      input1 = String(input1);
      return input1 + " " + input2;
   }
   static concatenatePlusEquals(input1, input2) {
      // A1: indicates input1 is the beginning of a string
      // A2: uses the plusequals operator to combine the strings
      // R: one line with both strings
      input1 = String(input1);
      input1 += " " + input2;
      return input1;
   }
   static concatenateVariable(input1, input2, input3) {
      // A1: indicates input1 is the beginning of a string
      // A2: input1 and input2 concatenate
      // R: input1 and input1 concatenated with an additional variable
      input1 = String(input1);
      return input1 + " " + input2 + " " + input3;
   }
   static stringLength(input) {
      // A1: any JavaScript string
      // R: the length of the string
      return input.length;
   }
   static findFirstCharacter(input) {
      // A1: any JavaScript string !important! JavaScripts index begins at 0
      // R: the first character of string
      return input[0];
   }
   static findNthCharacter(input1, input2) {
      // A1: any Javascript string
      // A2: a number used to find a index location in the string
      // R: the letter associated with the number within the string
      input1 = String(input1);
      input2 = Number(input2);
      return input1[input2 - 0];
   }
   static findLastCharacter(input) {
      // A1: any JavaScript string !important! JavaScripts index begins at 0
      // R: the last character of the string
      return input[input.length - 1];
   }
   static findNthLastCharacter(input) {
      // A1: any Javascript string
      // R: the nth to last letter of the string
      // This is alternate code that I believe is more accurate
      // input1 = String(input1);
      // input2 = Number(input2);
      // return input1[input.length - input2];
      return input[input.length - 3];
   }
   static push(array, item) {
      // A1: new Array is pushed to the end of the array
      // R: array now has the new array at the end
      array.push(item);
      console.log(array);
      return array;
   }
   static pop(array) {
      // A1: target the end of the array to pop off
      // R: array with end popped off
      array.pop();
      console.log(array);
      return array;
   }
   static shift(array) {
      // A1: remove first element of the array
      // R: new array with new first element
      array.shift();
      console.log(array);
      return array;
   }
   static unshift(array, addedValue) {
      // A1: the array
      // A2: the value we want to add at the beginning of the array
      // R: new array with new first element
      array.unshift(addedValue);
      console.log(array);
      return array;
   }

   static makeshoppingList(item, quantity) {
      let shoppingList = [];
      // A1: a new item and quantity begins the shopping list(var shopping list declared above=array)
      // A2: each new item and quantity is added to the end of the list
      // R: a shopping list with items and quantities
      shoppingList.push([item, quantity]);
      console.log(shoppingList);
      return shoppingList;
   }

   static nextInLine(arr, item) {
      // A1: a new item is pushed to the end of the array
      // A2: the first item in the array is shifted off the array
      // R: a new array less the original first element
      arr.push(item);
      console.log(arr);
      arr.shift();
      return arr;
   }
   // Card counting function
   // var count = 0
   //each card assigned a value
   static countingCards(card) {
      let count = 0;
      switch (card) {
         // // 2-6 = [(+1) or increment]
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            ++count;
            break;
         // 7-9 = 0 not necessary to have case count//
         // 10 + highCard = [(-1) or decrement]
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            --count;
            break;
         default:
      }
      let holdBet = "Hold";
      if (count > 0) {
         holdBet = "Bet";
         // //when the count is positive bet high
         // // when the count is zero or negative bet low
      }
      console.log(4);
      return count + " " + holdBet;
   }

   // Profile Lookup Function

   static lookUpProfile(name, prop) {
      const contacts = [
         {
            firstName: "Akira",
            lastName: "Laine",
            number: "0543236543",
         },
         {
            firstName: "Harry",
            lastName: "Potter",
            number: "0994372684",
         },
         {
            firstName: "Sherlock",
            lastName: "Holmes",
            number: "0487345643",
         },
         {
            firstName: "Kristian",
            lastName: "Vos",
            number: "unknown",
         },
      ];
      for (var i = 0; i < contacts.length; i++) {
         let singleContactObj = contacts[i];
         let firstName = singleContactObj.firstName;
         if (firstName === name) {
            if (singleContactObj.hasOwnProperty(prop)) {
               console.log(firstName);
               return singleContactObj[prop];
            } else {
               return "No such propery.";
            }
         }
      }
      return "No such contact.";
   }

   // Generate a random whole number
   // Math.floor(math.random() * number;
   static randomWholeNumber() {
      return Math.floor(Math.random() * 200);
   }

   // Generate a randrom whole number within a range
   // Math.floor(math.random() * (max - min + 1)) + min;
   static randomWholeNumberRange(myMax, myMin) {
      //   console.log(randomWholeNumber);
      //   var randomWholeNumber = randomWholeNumberRange(myMin, myMax0);
      return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
   }

   //Remove items using splice()
   // any number of consecutive elements can be removed
   static removeItemSplice(array, start, end) {
      //  element will be removed at start input up to and end input
      array.splice(start, end);
      console.log(array);
      return array;
   }

   // Add items using splice()
   // add new elements
   static addItemSplice(array, start, end, addOn) {
      //  elements in start to end range will be removed and replaced with addOn
      array.splice(start, end, addOn);
      console.log(array);
      return array;
   }

   // Check for the presence of an element with indexOf()
   static checkArray(array, element) {
      console.log(array);
      // target the array through the index and check if element exists
      // inequality operater used here because index starts at 0 so anything equal to -1 would be undefined
      return array.indexOf(element) !== -1;
   }
   // Use typeof to Check the type of variable
   static checkVariable(variable) {
      return typeof variable;
   }
   // Return Array Slice Function
   // A1: slicing a portion of the array and making it a new array
   // R: the new array
   static arraySlice(array, beginSlice, endSlice) {
      const selection = array.slice(beginSlice, endSlice);
      return selection;
   }

   // Remove Element from Array Slice Function
   // A1: input 1 and 2 define the parameters of the slice
   // R: the element selection removed from the array
   static arrayRemoveSlice(array, input1, input2) {
      const selectionSliced = array.slice(input1, input2);
      return selectionSliced;
   }

   // Combine two arrays using concat()
   // A1: array1 and array2 are being calling to combine
   // R: concatenated array
   static concatMethod(array1, array2) {
      const newArrConcat = array1.concat(array2);
      return newArrConcat;
   }

   // Add Elements to the End of an Array with concat()
   // A1: the new item is being added to the end of the original
   // R: the new array with the new item on the end
   static concatAddEnd(originalItem, newItem) {
      const arrAddEndNew = originalItem.concat(newItem);
      return arrAddEndNew;
   }

   // Reduce Method to Analyze Data
   // A1: filter the names of the movie director from the array
   // A2: map pulls a new array of the ratings, parseInt changes the rating from a string to an integer
   // A3: reduce method is used to find the average sum of the ratings divided by the filtered director list
   // R: the average sum of the rating
   static reduceMethod(name) {
      let averageRating =
         watchList
            .filter((film) => film["Director"] === name)

            .map((rating) => parseInt(rating["imdbRating"]))

            .reduce((sumRatingOf, rating) => sumRatingOf + rating) /
         watchList.filter((film) => film["Director"] === name).length;

      return averageRating;
   }

   // High Order-Functions to Solve Square of Array
   // A1: using filter to remove negative numbers - parseInt is used to account for items being a string
   // A2: using filter to remove decimals
   // R: the square of only the positive numbers
   static higherOrder(arr) {
      const highOrderArr = arr.filter((num) => parseInt(num) > 0);
      const nonDecimalArr = highOrderArr.filter((num) => Number.isInteger(num));
      console.log(nonDecimalArr);
      return nonDecimalArr.map((num) => Math.pow(num, 2));
   }

   // Sort an Array Alphabetically
   // A1: the callback function of alphabetically Order is being used for the array
   // R: elements of the array are returned in alphabetical order
   static alphabeticalOrder(array) {
      console.log(array);
      return array.sort();
   }

   // Split a string into an Array Using the split Method
   // A1: the string is split into seprate strings - using the \W Character expression to define where to split the string
   // R: the string is returned as an array with each word separate
   static splitify(string) {
      const sepString = string.split(/\W/);
      console.log(sepString);
      return sepString;
   }

   // Convert a string into a sentence with Join Method
   // A1: joining a string into a sentence - again using the \W to define where the separation should occur
   // R: the string is returned as a sentence with no additional punctuation
   static sentensify(string) {
      const sepString = string.split(/\W/).join(" ");
      console.log(sepString);
      return sepString;
   }

   // Apply Functional Programminig to Convert String to URL Slugs
   // split function into each step and then achieve result - order should be
   // lowercase, trim - this is the extra white space on the edges, split the array, filter for anything that is larger than zero, then join -
   static convertStringUrl(title) {
      let newTitle = title.toLowerCase().trim().split(" ");
      // console.log(newTitle);
      let newerTitle = newTitle.filter((i) => i.length > 0).join("-");
      console.log(newerTitle);
      return newerTitle;
   }

   // Use the every() method to check that every element in the array meets a criteria
   // A1: scans the element of the input to see if it meets the criteria
   // - note the criteria for the below is for positive numbers in an array  -
   // R: the function returns a boolean value
   static everyMethod(input) {
      console.log(input);
      return input.every((value) => value > 0);
   }

   // Use the some() method to check that any element in an array meet a criteria
   // A1: scans the element of the input to see if it meets the criteria
   // - note the criteria for the below function is for negative numbers in an array
   // R: the function returns a boolean value
   static someMethod(input) {
      console.log(input);
      return input.every((value) => value < 0);
   }
   // Convert Celsius to Fahrenheit
   // A1: using the mathematical conversion of celsius to fahrenheit
   // R: the fahrenheit temperature
   static convertMe(celsius) {
      // conversion method from celsius to fahrenehit
      let fahrenheit = (celsius * 9) / 5 + 32;
      console.log(fahrenheit);
      // temperatrue in fahrenheit
      return fahrenheit;
   }

   // Reverse the order of an string
   // A1: we must split the array, reverse the order of the elements, then join them back together
   // R:  reserve Array
   static reverseMe(string) {
      // split the string in order to manipulate it
      const splitStr = string.split("");
      console.log(splitStr);
      // reverse the order of the elements
      const reverseStr = splitStr.reverse();
      console.log(reverseStr);
      // join the elements back together into a string
      const reversedArr = reverseStr.join("");
      // new reverse ordered string
      return reversedArr;
   }

   // Factorialize a Number - multiply number by each consecutive number minus one
   // A1: newNum is where the consecutive numbers begin
   // A2: using a for loop we are iterate through the consecutive numbers and on each iteration the newNum is multiplied by 2
   // R: new number
   static factorialize(num) {
      // newNum represents the first number we test
      let newNum = 1;
      // 2 is used as the multiplier because it is the second number therefore the first number to be multiplied by
      for (let multiplyBy = 2; multiplyBy <= num; multiplyBy++) {
         newNum *= multiplyBy;
      }
      console.log(newNum);
      // return one number that is a result of it being multiplied by itself
      return newNum;
   }

   // Find the Longest Word in a String
   // A1: in order to compare something like a sentence we must first split the elements before we can compare them
   // A2: the sort function is used to compare the elements to each other
   // R: numerical value of the longest element of the string
   static longestElement(string) {
      // split the string to compare
      var strSplit = string.split(" ");
      // use sort to compare the length of the words
      var words = strSplit.sort(function (word1, word2) {
         var length1 = word1.length;
         var length2 = word2.length;
         // return the words sorted from largest to smallest
         return length2 - length1;
      });
      // gives us a number representing the number of characters in the longest word
      var result = words[0].length;
      console.log(result);
      return result;
   }

   // Return Largest Numbers in Arrays
   // A1: set an empty array that we will push the largest number to
   // A2: iterate through the array to access the sub arrays beginning with the index of (0)
   // A3: iterate through the sub array beginning with the index of (1) to find the largest number reducing one step and increasing the speed
   // A4: push the largest number to the new array
   // R: a new array containing the largest numbers from each sub array
   static largestNumber(arr) {
      const bigNumArr = [];
      for (let i = 0; i < arr.length; i++) {
         var largestNumber = null;
         for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber || largestNumber == null)
               largestNumber = arr[i][j];
         }
         bigNumArr.push(largestNumber);
      }
      return bigNumArr;
   }

   // Slice a String
   // A1: slice examines the targeted element of a given string to see if it exisits within the string
   // R: returns a boolean value of true or false
   static confirmEnding(str, target) {
      const isPresentInStr = str.slice(str.length - target.length) === target;
      return isPresentInStr;
   }

   // Repeat a String
   // A1: using a for loop we run the function through the string according to the given number
   // R: string repeated according to the parameters given
   static repeatStringNumTimes(str, numOfTimes) {
      let repeatedStr = " ";
      for (let repeatNum = 0; repeatNum < numOfTimes; repeatNum++) {
         repeatedStr += str;
      }
      return repeatedStr;
   }

   // Truncate a String
   // A1: using an if statement compare the length of the string to the target index number
   // R1: if length is greater than number return slice portion of string with ("...") appended to it
   // R2: if length is less than number return string
   static truncateString(str, num) {
      if (str.length > num) {
         console.log(str);
         return str.slice(0, num) + "...";
      } else {
         console.log(str);
         return str.slice(0, num);
      }
   }

   // Finders Keepers
   //A1: each element of an array is tested against the function
   // R: the first element in the array that passes the function
   static findElement(arr, func = (num) => num % 2 === 0) {
      const numberIsNotPrime = arr.filter(func);
      console.log(numberIsNotPrime);
      return numberIsNotPrime[0];
   }

   // Boolean
   // A1: check is value is boolean
   // R: return true if true or return false if not
   static booWho(bool) {
      console.log(bool);
      return bool === true || bool === false;
   }

   // Title a Case Sentence - syntax is everything
   static titleCase(str) {
      const newStr = str
         // make all characters lowercase
         .toLowerCase()
         // split the string up to manipulate the elements
         .split(" ")
         // make the first letter uppercase
         .map(function (letters) {
            return letters[0].toUpperCase() + letters.slice(1);
         });
      console.log(newStr);
      // return the sentence with the first letter of each word capitalized
      return newStr.join(" ");
   }

   // Slice and Splice
   // given two arrays copy each element of the first array to the second array in order
   static frankenSplice(arr1, arr2, n) {
      const combinedCopiedArr = [];
      // slice the elements of the second array beginning at 0 and ending at the value of n and push to combinedCopiedArr
      combinedCopiedArr.push(...arr2.slice(0, n));
      // push all the elements of the first array to the end of the combinedCopiedArr
      combinedCopiedArr.push(...arr1);
      // pushes the remaining elements of the second array beginning at the value of n
      combinedCopiedArr.push(...arr2.slice(n, arr2.length));
      // return the new array with the all elements
      return combinedCopiedArr;
   }

   // function frankenSplice(arr1, arr2, n) {
   //    let localArr = arr2.slice();
   //    localArr.splice(n, 0, ...arr1);
   //    return localArr;
   // }

   // Falsey Bouncer
   // A1: filter through an array for Falsey Values - [false, null, 0, "", undefined, and NaN]
   // R: return true or false
   static bouncer(arr) {
      console.log(arr);
      return arr.filter((falsey) => falsey);
   }

   // Where do I belong - return the index where the given num should go in a sorted array
   // A1: first sort the given array
   // A2: run for loop to determine at which index the given number belongs
   // R1: return index position
   // R2: if num falls at the end of the array must use length to get the value of the index
   static getIndexToIns(arr, num) {
      arr.sort(function (a, b) {
         console.log(arr);
         return a - b;
      });
      for (let i = 0; i < arr.length; i++) {
         if (num <= arr[i]) {
            console.log(i);
            return i;
         }
      }
      return arr.length;
   }

   // Mutations - given two words find out if the second word contains all the letters of the first word
   // A1: set variables to lowercase for ease of comparison
   // A2: use a for loop to iterate through the letter
   // R1: if the current letter does not exist in the first word return false
   // R2: if the current letter does exist return true
   static mutation(arr) {
      // set both words to lower case to compare
      let wordOne = arr[0].toLowerCase();
      let wordTwo = arr[1].toLowerCase();

      for (var i = 0; i < wordTwo.length; i++) {
         if (wordOne.indexOf(wordTwo[i]) === -1) return false;
      }
      return true;
   }
   // Chunky Monkey - given array return two dimensional array based on the size
   // A1: while loop runs while length of the array is greater than 0
   // A2: splice at the first index to the given size
   // R: the new array
   static chunkArrayInGroups(arr, size) {
      let newArr = [];
      while (arr.length > 0) {
         newArr.push(arr.splice(0, size));
      }
      return newArr;
   }
}
