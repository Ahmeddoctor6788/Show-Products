import About from "./Pages/About"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/Notfound"
import { Route, Routes } from "react-router"
import Products from "./Pages/Products"
import Navbar from "./components/Navbar"
import SingleProduct from "./Pages/SingleProduct"
import MainStore from "./Store/MainStore"


function App() {
  return (
    <div>
      <Navbar />
<Routes>
  <Route path="/"element={<Home />}/>
  <Route path="/About"element={<About />}/>
  <Route path="/Contact"element={<Contact />}/>
  <Route path="*"element={<NotFound />}/>
  <Route path="/Products"element={<Products />}/>
  <Route path="/products/:ProductId" element={<SingleProduct />}/>
  
</Routes>


    </div>
  )
}

export default App