fetch('https://jsonplaceholder.typicode.com/todos')
	.then(res => res.json())
	.then(data => {
    	var newData = data.slice(0, 10);
    	console.log(newData)
    	var num = [2, 3, 4, 5, 7, 9];
    	var k = newData.map((n, i) => {
        return n
    }).sort((a, b) => a - b);
    var task = newData.filter(item => item.completed === true);
    console.log(task);
    var about = newData.filter(b => b.title.includes('tem'))
    console.log(about)
}).catch(err => console.log(err));


//185.199.108.135


// fetch('url')
// .then(res => res.json())
// .then(data => {
//     var newData = data.slice(0, 10);
//     for (let i = 0; i < newData.length; i++) {
//         console.log(newData[i])
//     }
//     newData.forEach(element => {              //tepadagi for loop bn vazifasi bir xil
//         console.log(element)
//     });
// })
/*const hello = {name: 'baba'};
hello.age = 34;
console.log(hello);

const ism = hello.name;
console.log(ism);
 var obj = Object.assign({}, hello);
 var lo = {..hello}
 obj.age = 89;
 console.log(hello, obj, lo); //immutibality
var k = [1, 2, 3];
var p = [...k].concat(k) yoki;
p.push(k)
 */








 	
