var VE_TRUNG = 123;
var count = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

for(;;){
  var ketQua = getRandomInt(0, 1000);
  console.log('Ket qua: ' + ketQua);
  if(ketQua == VE_TRUNG){
    count++;
    break;
  }else{
    count++;
  }
}

console.log(`Trung giai sau ${count} lan quay`);
