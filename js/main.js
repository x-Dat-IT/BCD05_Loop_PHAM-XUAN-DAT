// ---------------------------Bài Tập 1--------------------------
// CÁCH 1:for
document.getElementById("btnInt").onclick = function () {
    var soChan = "";
    var soLe = "";
    for (var i = 0; i < 100; i++) {
        //Kiểm tra biến số chẵn hay lẻ 
        //Tạo 2 biến chứa kết quả 
        // nếu số dư = 0 thì chắc chắn sẽ là số chẵn
        if (i % 2 == 0) {
            //số chẵn
            soChan += " " + i;
        } else {
            soLe += " " + i;
        }
    }
    document.getElementById("txtInt").innerHTML = "Số Chẵn Là: " + soChan + "<br>" + "Số Lẻ là: " + soLe;
}
// CÁCH 2 : while 
document.getElementById("btnInt1").onclick = function () {
    var soChan1 = "";
    var soLe1 = "";
    var i = 0;
    while (i < 100) {
        if (i % 2 == 0) {
            soChan1 += " " + i;
        } else {
            soLe1 += " " + i;
        }
        i++;
    }
    document.getElementById("txtInt1").innerHTML = "Số Chẵn Là: " + soChan1 + "<br>" + "Số Lẻ là: " + soLe1;
}
// ---------------------------Bài 2----------------------------

document.getElementById("btnInt2").onclick = function () {
    var demSo = "";
    for (var i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            demSo++;
        }
    }
    document.getElementById("txtInt2").innerHTML = "Số Chia hết cho 3 nhỏ hơn 100: " + demSo + " số";
}

//Cách 2: While
document.getElementById("btnInt10").onclick = function () {
    var demSo = "";
    var i = 0;
    while (i < 1000) {
        if (i % 3 == 0) {
            demSo++;
        }
        i++;
    }
    document.getElementById("txtInt10").innerHTML = "Số Chia hết cho 3 nhỏ hơn 100: " + demSo + " số";
}

// -------------------------Bài 3------------------------------
document.getElementById("btnInt3").onclick = function () {
    var tong = 0;
    for (var i = 0; i < 10000; i++) {

        if (tong < 10000) {
            tong += i;
        } else {
            i -= 1;
            break;
        }
    }
    document.getElementById("txtInt3").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
}
// ----------------------Bài 4------------------------------
document.getElementById("btnInt4").onclick = function () {
    var nhapN = Number(document.getElementById("inputInt2").value);
    var nhapX = Number(document.getElementById("inputInt1").value);
    var total = 0;
    for (var i = 1; i <= nhapN; i++) {
        total += nhapX ** i;
    }
    document.getElementById("txtInt4").innerHTML = "Tổng là: " + total;
}
// --------------------Bài 5---------------------------------
document.getElementById("btnInt5").onclick = function () {
    var nhapSoN = Number(document.getElementById("inputInt3").value);
    var factorial = 1;
    for (var i = 1; i <= nhapSoN; i++) {
        factorial *= i;
    }
    document.getElementById("txtInt5").innerHTML = "Giai Thừa: " + factorial;
}
//------------------Bài 6----------------------------
document.getElementById("btnDiv").onclick = function () {
    var content = "";
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            content += "<div style='background-color:red;color:#fff;margin-bottom:3px;padding:10px;'>Div chẵn</div>";
        } else {
            content += "<div style='background-color:blue;color:#fff;margin-bottom:3px;padding:10px'>Div lẻ</div>";
        }
    }
    document.getElementById("txtDiv").innerHTML = content;

}

// ------------------Bài 7-------------------------
document.getElementById("btnIn").onclick = function () {
    var inSoNguyenTo = Number(document.getElementById("inputIn").value);
    var ketQua = "";
    var count = 0;
    if (inSoNguyenTo < 2) {
        ketQua = "Không có"
    }
    else {
        for (var i = 2; i <= inSoNguyenTo; i++) {
            for (var j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count == 0) {
                ketQua += " " + i;
            }
            count = 0;
        }
    }
    document.getElementById("txtIn").innerHTML = "Chuỗi số nguyên tố: " + ketQua;
}
