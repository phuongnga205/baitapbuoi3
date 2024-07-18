let arr = [5, 4, 3, 2, 1];

let tong = 0;
let cnt = 0;
for(let i = 0; i < 5; i++){
    tong += arr[i];
    cnt++;
}

console.log("Tổng 5 số là: " + tong);
console.log("Trung bình cộng của 5 số là: " + tong/cnt);