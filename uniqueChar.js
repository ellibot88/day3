// const unique = (word) =>{

// for (let i = 0; i < word.length; i++){
// let answer =
// if(word[i] === word[i+1]){
//   answer = false
// }else if(word[i] !== word[i]){
//   answer = true}
// //console.log(word[i])
// return answer
// }
// }

// console.log(unique('Branndo'));
const unique = (word) => {
  let answer = true;

  // letters = word.split('')
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        answer = false;
      }
    }
  }
  return answer;
};

console.log(unique("Elliott"));
