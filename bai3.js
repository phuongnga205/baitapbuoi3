function kiemTraChuoiDoiXung(chuoi) {
  for (let i = 0; i < Math.floor(chuoi.length / 2); i++) {
    if (chuoi[i] !== chuoi[chuoi.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

let chuoi = prompt("Nhập: "); 
console.log(kiemTraChuoiDoiXung(chuoi));


