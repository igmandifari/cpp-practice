var reverse = function(x) {
    let output = 0;  // menginisialisasi nilai balik sebagai 0 di awal
    while(x!=0){ // untuk menghentikan perulangan while setelah kita menyelesaikan pembalikan
        output = (output * 10) + (x % 10); // rumus matematika untuk menyisipkan digit ke angka (seperti pada persamaan 2 (lihat bagian pendekatan solusi ini))
        x = (x - (x % 10))/10; // rumus matematika untuk menghapus digit terakhir menggunakan persamaan 1 (lihat bagian pendekatan solusi ini)
    }  
    return output; // mengembalikan hasilnya
};





 
