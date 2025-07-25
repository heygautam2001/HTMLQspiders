/* 
-fetch(url)
- it  will return a promise
- to consume use then or await keyword
- fetch promise object contains response object we have  to use readableStream methods like .text() or .json() or etc.
- again readable stream method will return a promise 
- this promise object contains actual data.
*/

// ? case 1: 
function getData(url){
  let res = fetch(url);
  console.log(res);

  res.then((data)=>{
    console.log(data);
    // it will get the response object

    // res.body contains the actual data

    data.json().then((val)=>{
      console.log(object);
    })
  })
}
getData("https://fakestoreapi.com/products");

// ? Case 2:

async function getData(url) {
  let res = await fetch(url);
  console.log(res);

  let data = res.json();
  console.log(data);

  // code
  data.map(product =>{
    let img = document.createElement('img');
    img.src = product.image;
    img.setAttribute("height","200px")
    img.setAttribute("width","200px")
    console.log(image);
    document.body.appendChild(img);
  })
}

getData("https://fakestoreapi.com/products");

// Case 3:
const student_data_file = "";

const getStudents = async url => {let result = await fetch(url)
  console.log(res);

  let data = await res.json();
  console.log(data);
  //code
  data.map((student)=>{
    console.log(student);

    let div  = document.createElement("div");
    div.innerHTML = `
    <p> : <b> Name : </b> ${student.first_name} ${student.last_name} </p>
    <p><b>Email : </b>:${student.email}</p>
    <hr/>
    `
    document.body.appendChild(div);
  });
};

getStudents(student_data_file);