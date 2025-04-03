// import { BrowserRouter, Routes,Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Notfound from "./pages/Notfound";

// const App=()=>{
//   return( 
//   <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home/>}/>
//         <Route path="home" element={<Home/>}/>
//         <Route path="about" element={<About/>}/>
//         <Route path="contact" element={<Contact/>}/>
//         <Route path="*" element={<Notfound/>}/>
//       </Route>
//     </Routes>
//     </BrowserRouter>
//   </>
//   )
// }
// export default App;






//styling





import Bhopal from "./Bhopal";
import Cybrom from "./Cybrom";

// const data={color:"red",
//   fontFamily:"cursive",
//   textDecoration:"underline",
//   padding:"85px",
//   borderRadius:"50px",
//   backgroundColor:"blue",
//   height:"500px",
//   width:"500px"
// }

function App() {
  return (
    <>
      {/* <div style={{border:" 5px solid red", backgroundColor:"yellow", borderRadius:"20px", height:"500px", width:"500px",padding:"45px",margin:"auto"}}>
      <div style={{border:" 5px solid red", backgroundColor:"green", borderRadius:"20px", height:"400px", width:"400px",padding:"45px"}}>
      <div style={{border:" 5px solid red", backgroundColor:"pink", borderRadius:"20px", height:"300px", width:"300px",padding:"45px"}}>
      <h1 style={{color:"red",fontFamily:"cursive",textDecoration:"underline",padding:"85px",borderRadius:"50px",backgroundColor:"blue"}}>Cybrom </h1>
      </div>
      </div>
      </div>  */}

    {/* <h1 style={data}>Cybrom </h1> */}

    <h1>Wecome to react classes</h1>
    <Bhopal/>
    <Cybrom/>
    </>
  )
}
export default App;
