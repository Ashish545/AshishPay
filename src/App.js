
import Home from "./Home";
import {Routes,Route} from "react-router-dom"
import About from "./Pages/About"
import Services from "./Pages/Services";


import Error from "./Pages/Error";
import ContactPage from "./Pages/ContactPage";


function App(){
  return(
    <>
       <Routes>

        
      

        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/services" element={<Services/>}></Route>
        <Route exact path="/contact" element={<ContactPage/>}></Route>
        <Route exact path="*" element={<Error/>}></Route>

          


       </Routes>


    


    </>
  )
}

export default App;