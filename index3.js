function Diem(x, y){
  this.x = x;
  this.y = y;
}

function TamGiac(A, B, C){
  this.A = A;
  this.B = B;
  this.C = C;
  this.getChuVi = function(){
    return getDistance(A, B) + getDistance(B, C) + getDistance(A, C)
  }
}

// function TamGiac(A, B, C){
//   this.A = A;
//   this.B = B;
//   this.C = C;
//   this.inChuVi = function(){
//     console.log('Chu vi la',getCV());
//   };
//
//   var that = this;
//   function getCV(){
//     return getDistance(that.A, that.B) + getDistance(that.B, that.C) + getDistance(that.A, that.C);
//   }
// }

var diemA = new Diem(1, 0);
var diemB = new Diem(0, 0);
var diemC = new Diem(0, 0);
var diemD = new Diem(1, 1);
var tg1 = new TamGiac(diemA, diemB, diemC);
var tg2 = new TamGiac(diemA, diemB, diemD);
var tg3 = new TamGiac(diemD, diemB, diemC);
var tg4 = new TamGiac(diemA, diemD, diemC);

var mang = [tg1, tg2, tg3, tg4];

var mangFiltered = mang.filter(function(tamGiac){
  return tamGiac.getChuVi() > 3;
});

console.log(JSON.stringify(mangFiltered));

// console.log(tg1.inChuVi());

function getDistance(diem1, diem2){
  var dx = diem1.x - diem2.x;
  var dy = diem1.y - diem2.y;
  return Math.sqrt(dx*dx + dy*dy)
}

console.log(getDistance(diemA, diemB));
