const availableQuestions = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let chosenQuestions = [0, 1, 2, 3, 4]

// console.log(availableQuestions)
// const newOne = [...availableQuestions]
// console.log(availableQuestions)
// console.log(newOne)
let selectedQuestion = (Math.floor(Math.random() * availableQuestions.length)) - 1;
while (chosenQuestions.includes(selectedQuestion) || selectedQuestion === -1){
  selectedQuestion = (Math.floor(Math.random() * availableQuestions.length)) - 1;
}
console.log(`${selectedQuestion} is available`)
chosenQuestions.push(selectedQuestion)
console.log(chosenQuestions)
// newOne.splice(availableQuestions.indexOf(selectedQuestion), 1);

// // console.log(availableQuestions[3]);
// console.log(availableQuestions);
// console.log(newOne)
// console.log(selectedQuestion);

// let countdown = 3
// function count(){
//   let start = 3
//   let cloth = setInterval(()=>{
//   countdown-=1
//   if (countdown === 0){
//   clearInterval(cloth)
// }
// }, 1000)
// }
// let cloth = setInterval(()=>{
//   console.log(countdown)
//   countdown-=1
//   if (countdown === 0){
//   console.log('finifh')
//   clearInterval(cloth)
// }
// }, 1000)
// if (countdown === 0){
//   clearInterval()
//   console.log('finifh')
