const getMonth = (callback) => {
    setTimeout(()=>{
        let error = false;
        let month = ['january', 'february', 'march', 'april', 'may', 'juni', 'july', 'agustus', 
        'september', 'oktober', 'november', 'desember'];
        if (!error){
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

function showMonth(isError, data){
    if (isError ===null){
        let dataBaru = data.map(value=> console.log(value))
    } else {
        console.log("error")
    }
}

getMonth(showMonth)
//constructorFunction