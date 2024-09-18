// const reverseString = (str) => {
//   if (typeof(str) !== 'string') return -1
//   const wordArr = [];
//   const reversedWordArr = [];

//   for(let char of str){
//     wordArr.push(char);
//   }

//   for(let i =  wordArr.length - 1; i >= 0; i--){
//     reversedWordArr.push(wordArr[i]);
//   }

//   return reversedWordArr.join();
// };

const reverseString = (str) => {
  if (typeof(str) !== 'string') return -1

  const reversedWordArr = [];

  for(let i =  str.length - 1; i >= 0; i--){
    reversedWordArr.push(str[i]);
  }

  return reversedWordArr.join();
};

const reverseString2 = (str) => str.split('').reverse().join('');

const reverseString3 = (str) => str.split('').reverse().join('');

console.log(reverseString('Hello world'));