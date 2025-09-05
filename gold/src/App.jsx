//import Slider from "./component/Slider_Ex";
import { Route, Routes } from "react-router";
import Page from "./component/Page";
import Home from "./component/Home";
import Blog from "./component/Blog";
import About from "./component/About";
import Contact from "./component/Contact";
import Process from "./component/Process";
import Portfolio from "./component/Portfolio";
import Services from "./component/Services";

function App(){
  return(
    <>
      {/* <div>
        <Slider />
      </div> */}
      <Routes>
          <Route path="/"  element={<Page />}>
            < Route index element={<Home />}/>
            < Route path="blog" element={<Blog />}/>
            < Route path="about" element={<About />}/>
            < Route path="contact" element={<Contact />}/>
            < Route path="portfolio" element={<Portfolio />}/>
            < Route path="process" element={<Process />}/>
            < Route path="services" element={<Services />}/>
         
       
           </Route>
      </Routes>
    </>
  )
}
export default App;