//import { Header } from "./Components/Header";

/*
// const Myfunc=({name,nameForClass,income=10})=>{
//   return(
//     <div className={nameForClass}>
//       {name}:${income}
      
//       <hr/>
//       </div>
//   )
// }

function App() {
  return (
    <div className="App">
      hello
      <Myfunc name={"Abhi"} nameForClass="div1" income={200}/>
      <Myfunc name={"bhaskar"} nameForClass="div2" />
      <Myfunc name={"kartik"} nameForClass="div3" income={700}/>
      BHaskar is a good boy
    </div>
  );
}
*/
/*
const b=23;

function App(){
  const a=333
  return (
  <>
  <div>
    hello
    <Header/>
    <hr/>
    Ans is : {a+b}
    <hr/>
    Hey
  </div>
  
  </>
  )
}

export default App;
 */
//*we can write js anywhere except in return.In Return we use {curly brackets}.


// const App = () => {
//   return (
//     <div><Header/></div>
//   )
// }

// export default App
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import User from "./Components/User";
import './App.css'

function App() {
  return (
    <Router>
    <Navbar/>

      <Routes>
        {/* Routes is Used SO that only One element is Rendered if two routes are Same.*/}
        < Route path="/about" element={<About/>} />
        < Route path="/contacts" element={<Contacts/>} />
        <Route path="/user/abcd" element={<Contacts/>} />
        <Route path="/user/:id" element={<User/>} />
      </Routes>

    </Router>
    
    
  )
}

export default App