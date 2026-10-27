
import { useParams } from "react-router";
import {StoreContext} from "../Store/MainStore";
import { useContext } from "react";







function SingleProduct() {

const {ProductId} = useParams ();
const {products} = useContext (StoreContext);

    const product = products.find((product) => product.id == ProductId)
  return (
    <div>
<div className="container min-h-screen shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-5">

    <img src={product. image} alt={product.title} className="w-full max-w-md object-cover rounded-lg" />
    <div className="content flex flex-col gap-7 py-6 my-5">

       
        <h3 className="text-4xl text-sky-800">{product.title}</h3>
      <h3 className="text-4xl">{product.description}</h3>
        <h3 className="text-4xl text-gray-800">{product.price}</h3>
    </div>
</div>
    </div>
  )
}

export default SingleProduct