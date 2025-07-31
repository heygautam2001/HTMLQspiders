import { useState } from "react";

const Cart = ({cart}) => {
  let[counter,setCounter]= useState(1);
  return (
    <>
      <h2>Cart</h2>
      <section style={{display:"flex",flexWrap:"wrap"}}>
   {cart.map((item , index)=>(
          <article key={index} style={{
            height:"250px",
            width:"180px",
            border: "1px solid black",
            margin:"5px",
            padding: "5px",
          }}>
            <h6>{item.title}</h6>
            <img src={item.image } height="50%" width="40%"/>
            <p style={{fontSize:"small"}}>{item.price}$</p>
            <p style={{fontSize:"small"}}>Quantity:{counter}</p>
            <div>
              <button onClick={()=>{
                setCounter(counter+1)
              }} className="btn">Add +</button>
              <button onClick={()=>{
              if(counter>0) {
              setCounter(counter-1);
              }
            }}
           className="btn">Remove -</button>
            </div>
          </article>
        ))} 
        </section>
    </>
  );
};

export default Cart;