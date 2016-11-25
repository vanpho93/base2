var mang = [8, 10, 3, 5, 1, 9, 2];
mang.sort(function(a, b){
  return a - b
});
console.log(mang);

function Nguoi(age, salary){
  this.tuoi = age;
  this.luong = salary;
}

var A = new Nguoi(18, 5000);
var B = new Nguoi(20, 2000);
var C = new Nguoi(15, 3000);

var arr = [A, B, C]

arr.sort(function(a, b){
  if(a.luong > b.luong){
    return -1;
  }else if(a.luong < b.luong){
    return 1;
  }else{
    return 0;
  }
});

//console.log(arr);
