import Cybrome from "./Cybrome";

const collage={
  clgname:"Mpu",
  name:"ritika",
  fee:45600
}

const App=()=>{
  return( 
  <>
    <h1>Hello this is cybrome classes!</h1>
    <Cybrome clgname={collage.clgname}  name={collage.name}  fee={collage.fee}/>
  </>
  )
}
export default App;
