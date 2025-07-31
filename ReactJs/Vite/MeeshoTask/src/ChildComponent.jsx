import React from 'react'

function ChildComponent(props) {
  console.log(props);
  let {category , data} = props;
  return (
   <>
   <h1>{category}</h1>
   <section
   style={{
    border : "",
    display : "flex",
    gap: "10px",
    justifyContent:"center",
    }}
    >
      {
        data.map((val , idx)=>{
           console.log(val);
           console.log(idx);
           return (
            <article
            style={{
              
              border : "solid",
              flex:"1",
              padding:"10px"
            }}
            >
              <h1>{val.title}</h1>
              <img src={val.image} alt="" width = "80%" />
              <p>price : <span>₹</span> : {val.price}</p>
              <p>rating<span>⭐️</span> : {val.ratings} </p>

            </article>
           )
        })
      }

   </section>
   </>
  )
}

export default ChildComponent