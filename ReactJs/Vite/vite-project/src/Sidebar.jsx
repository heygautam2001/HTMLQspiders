import React from 'react'

const Sidebar = () => {
  return (
    <>
    <section style={{
      width : "30vw",
      height : "100vh",
      display : "flex",
      flexDirection : "column",
      gap : "20px",
      margin: "10px"

    }}>
      <h3>ChatGpt</h3>
      <h3>Ghiblish</h3>
      <h3>Generate Image</h3>
      <h3>Canvas</h3>
    </section>
    </>
  )
}

export default Sidebar