// const App = () => {
//   // return (
//   //   <div>App
//   //     <Color/>
//   //   </div>

//   // )

//  {
//     let x = 25;
//     let y = 56;
//     let sum = x + y;
//     return(
//       <>
//       <h1>{sum}</h1>
//       </>
//       );

//   }
// }

// export default App

// function Fruit(){
//   return(
//     <>
//     <h1>Mango</h1>
//     <h1>Papaya</h1>
//     <h1>Banana</h1>
//     <h1>Peas</h1>
//     </>
//   );
// }

// function Color(){
//   return(
//     <>
//     <h1>Red color;
//     </h1>
//     </>
//   );
// }
// // export default fruit;

// Change does not update in ui
// import React from "react";

// let fruit = "Apple";

// function update() {
//   fruit = "Banana";
//   console.log("function is called");
// }

// const App = () => {
//   return (
//     <>
//       <h1 onClick={update}>{fruit}</h1>
//       <button onClick={update}>Change fruit name</button>
//     </>
//   );
// };

// export default App;

// We have to use UI

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [fruit, setfruit] = useState("Mango");
//   function update() {
//     setfruit("Banana");
//   }
//   return (
//     <>
//       <h1>{fruit}</h1>
//       <button onClick={update}>update fruit</button>
//     </>
//   );
// };

// export default App;

//

// Counter app
// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   const [counter, setcounter] = useState(0);
//   function increment(){
//     setcounter((prevCounter)=> {
//       console.log(prevCounter);
//       return prevCounter + 1;

//     });

//   }

//   function decrement(){
//     setcounter(counter -1);
//   }

//   return (
//     <>
//     <div>Counter App</div>
//     <h1>{counter}</h1>
//     <button onClick={increment}>increment</button>
//     <button onClick={decrement}>decrement</button>
//     </>

//   )
// }

// export default App
/*
import React from "react";
import { useState } from "react";

const App = () => {
  const [toggle, settoggle] = useState(true);
return (
    <>
      <h1>Toggle The Names</h1>
      <button
        onClick={() => {
          settoggle(!toggle);
        }}
      >
        toggle
      </button>
      {toggle ? <h1>Gautam Kumar</h1> : null}
    </>
  );
};

export default App;
*/
// you ca also render component...

/*
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setcount] = useState(0);

  return (
    <div>
     <h1>{count}</h1>
     <button onClick={()=>{setcount(count+1)}}>Counter</button>
     {
       count === 0  ? <h1>Condition  1</h1>
      :count === 1 ? <h1>Condition 2</h1>
      :count === 3 ? <h1>Condition 3</h1>
      :<h1> Not selected </h1>
      
     }


    </div>
  )
}

export default App
*/
/*
import React, { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  return (
    <div>
      <h1>Controlled component</h1>
      <form action="" method="get">
        <input
          type="text"
          value={name}
          onChange={(event) => {
            return setname(event.target.value);
          }}
          name="name"
          id=""
          placeholder="Enter Name"
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setpassword(event.target.value)}
          name="password"
          id=""
          placeholder="Enter password"
        />
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(event) => {
            return setemail(event.target.value);
          }}
          placeholder="Enter email"
        />
        <br /> <br />
        <button>Submit Form</button>
        <button
          onClick={(event) => {
            setemail("");
            setname("");
            setpassword("");
          }}
        >
          Reset
        </button>
      </form>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>
    </div>
  );
};
export default App;
*/

import React from 'react'
import Skills from './Skills'

 const App = () => {
  return (
    <div>
      <Skills/>
    </div>
  )
}

export default App;