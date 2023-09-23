// CODE STRUCTURE
console.log("Hello World");


//Javascript Variables
var nama = "Mirza";
let id = 123;
const jenisKelamin = "laki-laki";

console.log(nama);
console.log(id);
console.log(jenisKelamin);


/*Data Types*/
//Data Types: Number
let n = 25;
let jumlah = n + 25;
console.log(n);
console.log(jumlah);

//Data Types: BIGINT
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

//Data Types: String
const nama1 = "Mirza";
const nama2 = 'Ferdi';
const nama3 = `Hakim`;
console.log(nama1);
console.log(nama2);
console.log(nama3);

//Data Types: Boolean
let isLoggedIn = true;
let isAdmin = false;

let isGreater = 15 > 8;
let isLess = 15 < 8;

console.log(isGreater);
console.log(isLess);


//Data Types: Null
let nilaiAkhir = null; 
console.log(nilaiAkhir);


//Data Types: Number
let umur;
console.log(umur);


//Data Types: Symbol
let pegawai = Symbol('Budi');
console.log(pegawai);
console.log(pegawai.description);


//Data Types: Object
let mahasiswa = {
    nama : 'Abdul',
    nim : '123456789',
    semester: 5,
};
console.log(mahasiswa.nama);
console.log(mahasiswa.nim);
console.log(mahasiswa.semester);


/*Type Conversion*/
//Type Conversion: String
let angka = 123;
angka = String(angka);
console.log(`Angka adalah ${angka}`);

//Type Conversion: Numeric
let numer = "8" / "2";
console.log(numer);

let str = "321";
console.log(typeof str);

let num = Number(str);
console.log(typeof(num));


//Type Conversion: Boolean
console.log(Boolean(1)); //true
console.log(Boolean(0));//false
console.log(Boolean("Hai"));//true
console.log(Boolean(""));//false




/*JAVASCRIPT OPERATOR*/
//Aritmethic Operator
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b) ;
console.log(a * b );
console.log(a / b );
console.log(a % b);
console.log(a ** b);


//Assingment Operator
let c = 5;
console.log(c);

c+=3;
console.log(c);


//Comparison Operator
let d = 8;
let e = 3;

console.log(d == e);//false
console.log(d < e); //false
console.log(d > e); //true
console.log(d != e); //true



//Logical Operator
let f = true;
let g = false;

console.log(f && g);//false
console.log(f || g);//true
console.log(!f);//false


//Bitwise Operator
let biner1 = '0o111100';
let biner2 = '0o1101';
console.log(biner1 & biner2)
console.log(biner1 | biner2)
console.log(biner1 ^ biner2)
console.log(~biner1)

//Ternary Operator
let x = 1;
let y = 1;

console.log(x == y ? "Yes" : "No");


/* POP UP */
// Pop Up: Alert
alert("Selamat Datang di Website Saya");


// Pop Up: Prompt
let response = prompt("Apakah kamu sudah makan?");
alert("jawabannya adalah " + response);

// Pop Up: Confirm
let response1 = confirm("Mau hangout ga besok?");
alert("Jawabannya: " + response1);


/* CONDITIONAL BRANCHING */
//Conditional: IF
// let response2 = prompt("1 + 1 =");
// if (response2== 2 ) {
//     alert("Correct!!");
// }

// //Conditional: IF-ELSE
// let response3 = prompt("1 + 1 =");
// if (response3 == 2 ) {
//     alert("Correct!!");
// }else{
//     alert("Wrong!!");
// }

//Conditional: IF
let response4 = prompt("1 + 1 =");
if (response4 == 2 ) {
    alert("Correct!!");
}else if(response4 < 2){
    alert("Too Low!");
}else{
    alert("Too High!!")
}


//Conditional: SWITCH
let color = "blue";

switch (color) {
    case "blue":
        console.log("I Love blue!");
        break;
    case "red":
        console.log("I Love red!");
        break;
    default:
        alert("I don't know what color ot is!");
        break;
}


/* JAVASCRIPT LOOP */
//LOOP: FOR
for (let i = 0; i < 5; i++) {
    console.log(`Iterasi A ke ${i}`);
}

//LOOP: DO...WHILE
let j = 0;

do {
    j+=1;
    console.log(`Iterasi B ke ${j}`);
} while (j < 5);


//LOOP: WHILE
let k = 0;
while (k < 5) {
    console.log(`Iterasi C ke ${k}`);
    k++;
}

/* LOOP CONTROL */
//LOOP CONTROL: BREAK
for (let l = 0; l < 5; l++) {
    if (l == 3) {
        break;
    }
    console.log(`Iterasi D ke ${l}`);
}

//LOOP CONTROL: CONTINUE
for (let m = 0; m < 5; m++) {
    if (m == 3) {
        continue;
    }
    console.log(`Iterasi E ke ${m}`);
    
}



// Fungsi Dropdown
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }