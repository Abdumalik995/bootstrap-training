

let first = [{id: 1}];
let second = [4, 5, 6,];
let combined = first.concat(second);
first.id = 2;
first[0].id = 7;
console.log(first);
console.log(combined);