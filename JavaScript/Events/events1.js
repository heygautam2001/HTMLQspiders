function fun1(){
  console.log("I am from fun 1");
}

let demo = document.getElementById("demo");

function fun2(){
  console.log("I am from fun2");

  demo.style.cssText = `
  color: white;
  background : brown;
  `

}

function fun3(){
  console.log("I am from fun 3");

  demo.style.cssText = ``;

}
// ! ====================================================================================

let productContainer = document.getElementById("productContainer");
console.log(productContainer);

// productContainer.style.cssText = `
// height : 200px;
// width : 150px;
// border : solid blue;
// `;
let article;
function addProduct(){
  console.log(" I am from addproduct");
   article = document.createElement("article");
  article.style.cssText = `
  height : 200px;
   width : 150px;
border : solid blue;
margin: 10px ;

  `
  productContainer.appendChild(article);
}
// console.log(article);
