const cekHariKerja = (day) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item ===day
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// then catch
console.log(cekHariKerja("rabu")
.then(response =>console.log(response))
.catch(response => console.log(response))); 
 //then() adlh sebuah aksi untuk menangkap promise ketika promise bernilai success/resolve yg sebelumnya argumen fungsi yang diinputkan bernilai benar 
 //catch() sebuah aksiuntuk menangkap promise ketika promise bernilai failed/reject bila sebelumnya argumen fungsi yang diinputkan bernilai salah

//asyncawait
 async function cekDay(day){
    try{
        const test =  await cekHariKerja(day)
        console.log(test);
    } catch(err){
        console.log(err);
    }
}
//fungsi asinkron dibuat untuk menerima parameter day dari fungsi utama (cekHariKerja) untuk  
// mengecek apakah parameter bernilai benar / salah. Disini, suatu variabel dibuat yaitu "test" untuk menampung fungsi 
// asingkron cekHariKerja dan menambahkan await untuk menghandle catch promise yg bernilai terpenuhi/fulfilled maupun yang
//bernilai rejected
cekDay("rabu");
