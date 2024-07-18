function tinhTongTu1Den100() {
    let tong = 0;
    for (let i = 1; i <= 100; i++) {
        tong += i;
    }
    return tong;
}

const ketQua = tinhTongTu1Den100();
console.log("Tổng các số từ 1 đến 100 là: " + ketQua);
