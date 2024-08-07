/**
 * Exercise Variable
 * Objective:
Memahami cara mendeklarasikan dan menggunakan variabel.
Description:
Deklarasikan empat variabel untuk menyimpan name, age, university dan citizen.
Cetak variabel-variabel tersebut ke console dengan format
Nama saya [name], saya berusia [age] tahun, saya dari universitas [univeristy] dan berasal dari [citizen].
Hint:
Gunakan let atau const untuk mendeklarasikan variabel.
 */

let name = "Nama saya Reyhan Capri Moraga";
console.log(name);

let age = "Saya berusia 19 tahun"
console.log(age);

let university = "Saya dari universitas ITERA"
console.log(university);

let citizen = "dan berasal dari Medan"
console.log(citizen);

console.log("Exercise Variable Berhasil!");

/**
 * Exercise Function
 * Objective:
Memahami cara mendefinisikan dan memanggil function.
Description:
Buatlah fungsi bernama animal yang menerima 2 argumen, name dan type.
Function tersebut harus mengembalikan string sapaan seperti 
"[name] merupakan binatang dengan jenis [type]".
Panggil Function animal dengan nama kalian dan cetak hasilnya ke console.
Hint:
Gunakan sintaks fungsi dasar untuk mendefinisikan fungsi.
 */

function greet (name, type = "animal") {
   
   return `hello, ${name}. My type is ${type} yo`;
}

const greeting = greet("kuda", "animal"); 

console.log(greeting);

console.log("Exercise Function Berhasil!");

/**
 * Exercise Loop
 * Objective:
Memahami cara menggunakan loop untuk iterasi.
Description:
Buatlah array berisi lima nama teman Anda.
Gunakan loop for untuk mencetak setiap nama ke console.
Hint:
Gunakan loop for untuk iterasi array.
 */

const teman = ["nana", "nina", "nuna","nena","nona"];
for (let i = 0; i < teman.length; i ++) {
    console.log(teman[i]);
}

console.log("Exercise Loop Berhasil!");

/**
 * Exercise Class
 * Objective:
Memahami cara mendefinisikan dan menggunakan class.
Description:
Buatlah class Mahasiswa dengan property name dan department.
Tambahkan method introduction yang mencetak string seperti 
"Halo, nama saya [name] dan saya dari jurusan [department]."
Buatlah objek dari kelas Mahasiswa dan panggil method introduction..
Hint:
Gunakan sintaks class untuk mendefinisikan class.
 */

class Mahasiswa {
    constructor(name, department) {
        this._name = name;
        this.department = department;
    }

    information() {
        return `Halo, nama saya ${this._name} dan saya dari jurusan ${this.department}`;
    }
}

const mahasiswa = new Mahasiswa("Reyhan Capri Moraga", "Teknik Informatika");
console.log(mahasiswa.information());

console.log("Exercise Class Berhasil!");

/**
 * Exercise Bonus
 * Description:
Buatlah kelas Perpustakaan dengan properti books yang merupakan array.
Tambahkan metode addBook untuk menambahkan buku ke dalam array.
Tambahkan metode showBook yang menggunakan loop untuk mencetak setiap judul buku yang ada di perpustakaan.

 */

class Perpustakaan {
    constructor() {
        this.books = [];
    }

    addBook(judulbuku) {
        this.books.push(judulbuku);
    }

    showBooks() {
        if (this.books.length == 0) {
            return;
        }
        for (const book of this.books) {
            console.log(`- ${book}`);
        }
    }
}

const perpustakaan = new Perpustakaan();
perpustakaan.addBook('Pemrograman JavaScript');
perpustakaan.addBook('Algoritma dan Struktur Data');

perpustakaan.showBooks();

console.log("Exercise Bonus Berhasil!");