import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./pages/home/Home"
import AboutUs from "./components/AboutUs"

const App = () => {
  return (
    <div>
      <Content/>
      <Footer/>
    </div>
  )
}


function Content() {
    return(
        <>
         <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about-us" element={<AboutUs/>}></Route>
         </Routes>
        </>
    )
}


export default App


