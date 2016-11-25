class Nguoi{
  constructor(ten, tuoi, luong){
    this.ten = ten;
    this.tuoi = tuoi;
    this.luong = luong;
  }

  get info(){
    return this.ten + ': ' + this.tuoi;
  }
  set t(age){
    this.tuoi = age
  }
}

var n = Nguoi;
var nguoi1 = new n('Khoa', 30, 300);
nguoi1.t = 10;
console.log(nguoi1.info);
