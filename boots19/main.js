
const pa = document.getElementById('add');
let myData = [];
let found = [];
const select =function(sel) {
    return document.getElementById(sel)
};
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(data => data.json())
    .then(res => {
        myData = res.slice(0, 6);
        res.slice(0, 6).forEach((item, index) => {
            
            const imgs = `<img class="img-fluid h-25" src="${item.url}" onclick="remove(${item.id})"><br>`;            
            pa.innerHTML += imgs;
            console.log(myData);
        })
    })
    .catch(err => console.log(err))

    function remove(id) {
        found = myData.find(item => item.id === id);  
       
        select('fech').style.display = 'block';
        select('bir').innerHTML = `<img class="img-fluid" src=${found.url}>`;
        select('two').innerHTML = found.title;
        select('url').innerHTML = found.url;       
    }

    function ha() {
        console.log('Close clicked');
        found = null;
        select('fech').style.display = 'none';
        select('bir').innerHTML = '';
        select('two').innerHTML = '';
        select('url').innerHTML = '';
      
    }