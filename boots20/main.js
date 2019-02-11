let myData = [];
let btn = document.getElementById('btn');
let name = document.getElementById('name');
let input = document.getElementById('search');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(res => {
        myData = res.slice(0, 10);
        console.log(myData);
        btn.addEventListener('click', function(){
            let inpVal = document.getElementById('search').value;
            let result = myData.find(item => item.name === inpVal);
            
            name.innerHTML += result.name;
            console.log("ok")
        })
    })

    //var name = "abdumalik";
//var lname = name.split('').map(ism => ism.toUpperCase);
//console.log(lname);

//Array.from('abdumalik', ism => ism.toUpperCase());
//name.split('').map(n => n.toUpperCase());

let str = 'Hello World';
let strIn = Array.from(str);
let index = strIn.indexOf('M');
let sd = strIn.fill('W', index, index+1);
console.log(sd);