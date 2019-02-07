

const pa = document.getElementById('add');
let myData = [];
let el = [];
let found = [];
const select =function(sel) {
    return document.getElementById(sel)
};
fetch('https://jsonplaceholder.typicode.com/comments')
	.then(data => data.json())
	.then(res => {
        myData = res.slice(0, 6);
		res.slice(0, 6).forEach((item, index) => {
            //const li = `<li id=${item.id} onclick="remove(${item.id})">${item.userId} - ${item.id} - ${item.title}</li>`;
            const fechImg = `<p id=${item.id}> - ${item.name}</p>`;
            
            pa.innerHTML += fechImg;
            
		})console.log(myData);
    })
    .catch(err => console.log(err))

    function remove(id) {
        found = myData.find(item => item.id === id);
        // myData = myData.filter(item => item.id !== id );
       
        select('fech').style.display = 'block';
        select('one').innerHTML = found.id;
        select('two').innerHTML = found.title;
        select('three').innerHTML = found.completed;
        select('four').innerHTML = found.completed;
        select('five').innerHTML = found.completed;
        select('six').innerHTML = found.completed;
    }

    function ha() {
        console.log('Close clicked');

        found = null;
        select('fech').style.display = 'none';
        select('one').innerHTML = '';
        select('two').innerHTML = '';
        select('three').innerHTML = '';
        select('four').innerHTML = '';
        select('five').innerHTML = '';
        select('six').innerHTML = '';
    }


 	
