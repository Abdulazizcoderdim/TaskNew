import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./pages/home/Home"
import AboutUs from "./components/AboutUs"
import Services from "./pages/services/Services"
import Contacts from "./pages/contacts/Contacts"

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
            <Route path="/projects" element={<AboutUs/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
            <Route path="*" element={<div>Not found...</div>}></Route>
         </Routes>
        </>
    )
}


export default App


