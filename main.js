// function fibonacci(n) {

//     if (n <= 2) { 
//         return n
//     }else{
//         return fibonacci (n - 1 ) + fibonacci (n - 2);
//     }

// }
// console.log(fibonacci(10));

// function strreplaceStar(arg) {

//     let res = arg

//     if (res.includes('0')) {
//         res = res.replaceAll('0', '*')
//     }
//     if (res.includes('1')) {
//         res = res.replaceAll('1', '*')
//     }
//     if (res.includes('2')) {
//         res = res.replaceAll('2', '*')
//     }

//     return res;
// }

// const kitob = [
//   { nom: "Kitob A", muallif: "Said Ahmad" },
//   { nom: "Kitob B", muallif: "Zokir Khoshimov" },
//   { nom: "Kitob C", muallif: "Murodjon Abduqodirov" },
// ];
// function bookRes() {
//   let res = [];
//   for (const book of kitob) {
//     res.push({ nom: book.nom, muallif: 'Alisher Navoiy' });
//   }
//   return res;
// }
// console.log(bookRes());

// const students = [
//     { name: 'Jasur', yosh: 21, jinsi: 'Erkak'},
//     { name: 'Sardorbek', yosh: 22, jinsi: 'Erkak' },
//     { name: 'Azizbek', yosh: 20, jinsi: 'Erkak' },
//     { name: 'Aziza', yosh: 20, jinsi: 'Tr'}
// ];

/* uyga vazifa majburiy */

 // Majburiy masalalar

// 1
function Namecapitalize(arg) {
  let name = arg.toLowerCase().split(" ");
  for (let i = 0; i < name.length; i++) {
      name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
  }
  return name.join(" ");
}
console.log(Namecapitalize("ali valiyev"));

// // 2
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

// // 3
// function averageArray(arr) {
//   let sum = arr.reduce((acc, num) => acc + num, 0);
//   return sum / arr.length;
// }
// console.log(averageArray([1, 2, 3, 4, 5]));

// // 4
// function lengthOfElements(arr) {
//   return arr.map(item => item.length);
// }
// console.log(lengthOfElements(["apple", "banana", "cherry"]));

// // 5
// function oddNumbers(arr) {
//   return arr.filter(num => num % 2 !== 0);
// }
// console.log(oddNumbers([1, 2, 3, 4, 5, 6, 7]));

// // 6
// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }
// console.log(mergeObjects({a: 1}, {b: 2}));

// // 7
// function removeSpaces(str) {
//   return str.replace(/\s+/g, '');
// }
// console.log(removeSpaces("Hello World"));

// // 8
// function objectValuesToArray(obj) {
//   return Object.values(obj);
// }
// console.log(objectValuesToArray({a: 1, b: 2, c: 3}));

// // 9
// function minMaxArray(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   return { min: min, max: max };
// }
// console.log(minMaxArray([3, 5, 7, 2, 9]));

// // 10
// function countVowels(str) {
//   let vowels = 'aeiouAEIOU';
//   let count = 0;
//   for (let char of str) {
//       if (vowels.includes(char)) count++;
//   }
//   return count;
// }
// console.log(countVowels("OpenAI"));

// // 11
// function addTwoToEach(arr) {
//   return arr.map(num => num + 2);
// }
// console.log(addTwoToEach([1, 2, 3, 4]));

// // 12
// function longestWord(arr) {
//   let longest = '';
//   for (let word of arr) {
//       if (word.length > longest.length) longest = word;
//   }
//   return longest;
// }
// console.log(longestWord(["apple", "banana", "cherry", "pineapple"]));

// // 13
// function aboveAverage(arr) {
//   let avg = averageArray(arr);
//   return arr.filter(num => num > avg);
// }
// console.log(aboveAverage([1, 2, 3, 4, 5, 6]));

// // 14. Stringni bosh va oxiridagi belgini olib tashlaydigan funksiya.
// function trimEnds(str) {
//   return str.slice(1, -1);
// }
// console.log(trimEnds("hello"));

// // 15
// function sumOfSquares(arr) {
//   return arr.reduce((acc, num) => acc + num ** 2, 0);
// }
// console.log(sumOfSquares([1, 2, 3, 4]));

// // 16
// function reverseArray(arr) {
//   return arr.reverse();
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));

// // 17
// function capitalizeWords(str) {
//   return str.split(" ").map(word => word.toUpperCase()).join(" ");
// }
// console.log(capitalizeWords("hello world"));

// // 18
// function filterByAge(people, age) {
//   return people.filter(person => person.age > age);
// }
// console.log(filterByAge([{name: 'Ali', age: 25}, {name: 'Vali', age: 30}], 26));

// // 19
// function countOccurrences(arr) {
//   let occurrences = {};
//   for (let item of arr) {
//       occurrences[item] = occurrences[item] ? occurrences[item] + 1 : 1;
//   }
//   return occurrences;
// }
// console.log(countOccurrences(["apple", "banana", "apple", "cherry", "banana"]));

// // 20
// function commonLetters(str1, str2) {
//   let common = new Set();
//   for (let char of str1) {
//       if (str2.includes(char)) common.add(char);
//   }
//   return Array.from(common).join("");
// }
// console.log(commonLetters("hello", "world"));

