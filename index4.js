var mang = [1, 2, 1, 2, 4];
// console.log(Array.isArray(mang));
// console.log(typeof mang);
//mang.reverse();
// var x = mang.push(1);
//console.log(mang.toString());

//Tat ca cac phan tu trong co deu thoa man
var dem = 0;
var b = mang.map(function(e){
  dem++;
  return e + 2
});
console.log('dem', dem);
console.log(b);
