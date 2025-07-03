let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let div = document.querySelector('div');
let input = document.querySelector('input');
let img = document.querySelector('img');

console.log(h1);
console.log(h2);
console.log(div);
console.log(input);
console.log(img);

h1.setAttribute('id' , 'heading1');
h1.setAttribute('style' , 'background-Color : crimson')
h1.setAttribute('style', 'text-align : center') // Value of css overrriden
console.log(h1);

h2.setAttribute('id' , 'heading2');
h2.setAttribute('style' , 'background-Color : blue')
console.log(h2);


div.setAttribute('class' , 'demo demo1 demo2 demo3');

input.setAttribute('value' , 'I am Gautam');

img.setAttribute('src',"https://cdn.pixabay.com/photo/2023/12/13/22/29/young-woman-8447841_1280.jpg")
img.setAttribute('height','400px');


// ! Read
console.log(h1.getAttribute('id'));
console.log(h2.getAttribute('id'));
console.log(h2.getAttribute('class'));
console.log(img.getAttribute('src'));
console.log(div.getAttribute('class'));

// ! update
// as as create

// ! delete
h1.removeAttribute('id');
h1.removeAttribute('style');
h2.removeAttribute('id');
h2.removeAttribute('style');
div.removeAttribute('class');
// input.removeAttribute('value')
input.removeAttribute('height')
input.removeAttribute('src');

console.log(input.getAttribute('value'));