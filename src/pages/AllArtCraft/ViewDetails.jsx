import { useState } from "react"
import { FaStar } from "react-icons/fa6"
import { useLoaderData } from "react-router-dom"

export default function ViewDetails() {
  const details = useLoaderData()
  const { name, image, email, item_name, subcategory_Name, processing_time, description, price, rating, stock, customization } = details
  const [count, setCount] = useState(1)
  return (
    <div className="card grid grid-cols-2 gap-4">
     
      <figure className="w-gull"><img className="min-h-full py-10 p-4 w-full" src={image} alt="Album" /></figure>
      <div className="card-body">
        <div className="flex justify-between">
          <p><span className="font-bold">Sub Category : </span>{subcategory_Name}</p>
          <p className="font-black">${price}</p>
        </div>
        <h2 className="card-title">{item_name}</h2>
        <p className="p-8 max-h-40">{description.slice(0,95)} ...</p>
        <div className="">
          <p className="font-light text-[#7DB79F]"><span className="font-bold">Stock : </span>{stock}</p>
          <div className="flex gap-8">
            {/* group button  */}
            <div className="flex">
              <button onClick={() => setCount(count - 1)} className="text-4xl border border-gray-400 px-6">-</button>
              <button className="text-4xl border border-gray-400 px-6">{count}</button>
              <button onClick={() => setCount(count + 1)} className="text-4xl border border-gray-400 px-6">+</button>
              </div>
            <button className="text-white bg-red-500 px-4 py-2">Add to Cart</button>
          </div>

        </div>
        <div className="divider"></div>
        <div className="flex justify-around items-center">
          <p className="font-bold">Customization : <span className=" font-light text-[#c25353]">{customization}</span></p>
          <p className="font-bold flex items-center  gap-2">Rating : 
          <span className="font-light text-[#c25353]">{rating}</span><FaStar className="text-red-600" />
          </p>
          <p className="font-bold ">Processing Time : <span className="font-light text-[#c25353]">{processing_time}</span></p>
        </div>
      </div>
      <div className="col-span-2 flex gap-8 my-10">
        <div className="w-1/4">
          <h2 className="text-xl">Name : {name}</h2>
          <p>{email}</p>
        </div>
        <div className="w-3/4">
          <h4 className="text-2xl">Description</h4>
          <p className="text-[#C1C3C2]">{description}</p>
        </div>
      </div>
    </div>
  )
}