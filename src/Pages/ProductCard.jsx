
import { Link } from "react-router"


function ProductCard({product}) {
  return (
       <Link to={`/products/${product.id}`} className="product shadow-2xl rounded-xl flex flex-col items-center gap-3 p-15 ">
          <h3 className="font-bold text-2xl">{product.title}</h3>
          <p className="text-3xl font-bold text-gray-400">${product.price}</p>
        </Link>
  )
}

export default ProductCard