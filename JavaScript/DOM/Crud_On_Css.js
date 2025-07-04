let body = document.body;

let nav = document.createElement('nav');

let homeDiv = document.createElement('div');
homeDiv.innerHTML = 'Home';

let aboutDiv = document.createElement('div');
aboutDiv.innerHTML = 'about';

let contactDiv = document.createElement('div');
contactDiv.innerHTML = 'Contact';

let loginDiv = document.createElement('div');
loginDiv.innerHTML = 'Login';

let servicesDiv = document.createElement('div');
servicesDiv.innerHTML = 'Services';

nav.appendChild(homeDiv);
nav.appendChild(aboutDiv);
nav.appendChild(contactDiv);
nav.appendChild(loginDiv);
nav.appendChild(servicesDiv);

console.log(nav);

body.appendChild(nav);


// ! ======== Create ============
// ? Node.style.setProperty('propertyName' , 'propertyValue');

nav.style.setProperty('border','2px solid black')
nav.style.setProperty('display','flex')
nav.style.setProperty('justify-content','space-around')
nav.style.setProperty('font-weight','bold')
nav.style.setProperty('background-color','teal')
nav.style.setProperty('padding','10px')

// ? Node.style.PropertyName = "propertyValue"

nav.style.border = "5px solid crimson";
nav.style.display = "flex"
nav.style.justifyContent = "space-evenly"
nav.style.fontWeight = "900"
nav.style.padding = '20px'

// ? nav.style.csstext = `propertyName1 : propertyValue `

nav.style.cssText = `

border : 5px solid magenta;
display : flex;
justify-content : space-around;
font-weight : 700px;
padding : 40px;
background-color : #414141;
color : white;

`

// ! ========= Read ===========
console.log(nav.style.getPropertyValue('display'));
console.log(nav.style.getPropertyValue('border'));


// ! =========== Update ============
// same as create


// ! ======= Delete ==========

nav.style.removeProperty("border");
nav.style.removeProperty('font-weight')

// nav.style.cssText = ``;






