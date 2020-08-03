console.log("Bismillah");
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=> {
    let newData = data.map(value => console.log(value.name))})
.catch(err => console.log(err));



