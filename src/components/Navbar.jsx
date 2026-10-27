import { Link } from "react-router"

function Navbar() {
  return (
    
     <div className="container">
           <nav className="w-full shadow-2xl flex justify-between items-center py-3 ">
<Link to="/" className="text-4xl font-bold">Erasoft</Link>
<ul className="flex gap-10">
    <li> 
        <Link to="/" className="text-lg font-bold hover:text-sky-500 duration-300"> Home</Link>
    </li>
    <li>
        <Link to="/About" className="text-lg font-bold hover:text-sky-500 duration-300">About</Link>
    </li>
    <li>
        <Link to="/Contact" className="text-lg font-bold hover:text-sky-500 duration-300">Contact</Link></li>
    <li>
        <Link to="/Products" className="text-lg font-bold hover:text-sky-500 duration-300">Products</Link></li>
</ul>
        </nav>
   
     </div>
  )
}

export default Navbar