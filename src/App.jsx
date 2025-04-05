// // import { BrowserRouter, Routes,Route } from "react-router-dom";
// // import Layout from "./Layout";
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Contact from "./pages/Contact";
// // import Notfound from "./pages/Notfound";

// // const App=()=>{
// //   return( 
// //   <>
// //     <BrowserRouter>
// //     <Routes>
// //       <Route path="/" element={<Layout />}>
// //         <Route index element={<Home/>}/>
// //         <Route path="home" element={<Home/>}/>
// //         <Route path="about" element={<About/>}/>
// //         <Route path="contact" element={<Contact/>}/>
// //         <Route path="*" element={<Notfound/>}/>
// //       </Route>
// //     </Routes>
// //     </BrowserRouter>
// //   </>
// //   )
// // }
// // export default App;






// //styling





// import Bhopal from "./Bhopal";
// import Cybrom from "./Cybrom";

// // const data={color:"red",
// //   fontFamily:"cursive",
// //   textDecoration:"underline",
// //   padding:"85px",
// //   borderRadius:"50px",
// //   backgroundColor:"blue",
// //   height:"500px",
// //   width:"500px"
// // }

// // function App() {
// //   return (
// //     <>
// //       {/* <div style={{border:" 5px solid red", backgroundColor:"yellow", borderRadius:"20px", height:"500px", width:"500px",padding:"45px",margin:"auto"}}>
// //       <div style={{border:" 5px solid red", backgroundColor:"green", borderRadius:"20px", height:"400px", width:"400px",padding:"45px"}}>
// //       <div style={{border:" 5px solid red", backgroundColor:"pink", borderRadius:"20px", height:"300px", width:"300px",padding:"45px"}}>
// //       <h1 style={{color:"red",fontFamily:"cursive",textDecoration:"underline",padding:"85px",borderRadius:"50px",backgroundColor:"blue"}}>Cybrom </h1>
// //       </div>
// //       </div>
// //       </div>  */}

// //     {/* <h1 style={data}>Cybrom </h1> */}

// //     <h1>Wecome to react classes</h1>
// //     <Bhopal/>
// //     <Cybrom/>
// //     </>
// //   )
// // }
// // export default App;


// // image 
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Carousel from 'react-bootstrap/Carousel';
// import img1 from "./Images/1.jpeg"
// import img2 from "./Images/2.jpeg"
// import img3 from "./Images/3.jpeg"

// const App=()=>{
//   return(
//     <>
//      <Navbar bg="dark" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>


//       <Carousel fade>
//       <Carousel.Item>
//         <img src={img1} height="300px" width="100%"/>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={img2} height="300px" width="100%"/>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src={img3} height="300px" width="100%"/>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>

//     </>
//   )
// }
// export default App;




//Events

const App=()=>{


  // const display=()=>{
  //   alert("this reat classes")
  // }

  // return(
  //   <>
  //   <h1>Welcome</h1>
  //   <button onClick={display}>Click here</button>
  //   </>
  // )




  // const display=(nm)=>{
  //   alert(`My name is ${nm}`)
  // }

  // return(
  //   <>
  //   <h1>Welcome</h1>
  //   <button onClick={()=>{display("Ritika Singh")}}> Click </button>
  //   </>
  // )



  // const display=(e)=>{
  //   alert("Type: "+e.type+"  Name:" +e.target.name+ "  Value:" +e.target.value)
  // }

  // return(
  //   <>
  //   <h1>Welcome</h1>
  //   <button name="btn" value="BTN" onClick={display}> Click </button>
  //   </>
  // )

  // const display=(e)=>{
  //   alert("Type: "+e.type+"  Name:" +e.target.name+ "  Value:" +e.target.value)
  // }

  // return(
  //   <>
  //   <h1>Welcome</h1>
  //   <button name="btn" value="BTN" onClick={display}> Click </button>
  //   </>
  // )


  const display=(nm , e)=>{
    alert("NAME:"+nm+" Type: "+e.type+"  Name:" +e.target.name+ "  Value:" +e.target.value)
  }

  return(
    <>
    <h1>Welcome</h1>
    <button name="Button" value="BTN" onClick={(e)=>{display("Rishika",e)}}> Click </button>
    </>
  )

  
}
export default App;