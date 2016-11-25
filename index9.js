var date = Date;
console.log(date.now());//1

setTimeout(function(){
  console.log(date.now());//2
}, 3000)

console.log(Date.now());//3

//npm init
