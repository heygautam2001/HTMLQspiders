import React from 'react'

function ChildComponent(props) {
  // console.log(props);
  let {category , data} = props;
  return (
   <>
   <h1>{category}</h1>
   <section
   style={{
    width:"70%",
    display : "flex",
    gap: "20px",
    justifyContent:"space-around",
    flexWrap : "wrap"
    }}
    >
      {
        data.map((val , idx)=>{
           console.log(val);
          //  console.log(idx);
           return (
            <article key={idx}
            style={{
              margin:"10px",
              height:"500px",
              width:"300px",
              // border : "solid",
              padding:"5px"
            }}
            >
              <h4>{val.title}</h4>

              <img  src={val.image} alt="" width = "250px" height="200px" />
              <p>price : <span>₹</span> : {val.price}</p>
              <p>rating : <span>⭐️</span> : {val.rating.rate} </p>
              <p>Count : {val.rating.count}</p>
              <button onClick={()=>{}}>addToCart</button>

            </article>
           )
        })
      }
 </section>
   
   </>
  )
}

export default ChildComponent