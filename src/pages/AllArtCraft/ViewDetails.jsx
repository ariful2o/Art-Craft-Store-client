import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { FaStar } from "react-icons/fa6"
import { useLoaderData } from "react-router-dom"

export default function ViewDetails() {
  const details = useLoaderData()
  const { name, image, email, item_name, subcategory_Name, processing_time, description, price, rating, stock, customization } = details
  const [count, setCount] = useState(1)
  return (
    <div className="card grid grid-cols-2 gap-4">
      <Fade delay={200} direction="left">
        <figure className="w-full"><img className="max-h-full py-10 p-4 w-full" src={image} alt="Album" /></figure>
      </Fade>
      <div className="card-body">
        <div className="flex justify-between">
          <Fade delay={200} direction="right">
            <p><span className="font-bold">Sub Category : </span>{subcategory_Name}</p>
          </Fade>
          <Fade delay={200} direction="left">
            <p className="font-black">${price}</p>
          </Fade>
        </div>
        <div className="divider"></div>
        <Fade delay={250} direction="right">
          <h2 className="card-title">{item_name}</h2>
        </Fade>
        <Fade delay={300} direction="right">
          <p className="p-8 max-h-40">{description.slice(0, 95)} ...</p>
        </Fade>
        <div className="">
          <Fade delay={350} direction="right">
            <p className="font-light text-[#7DB79F]"><span className="font-bold">Stock : </span>{stock}</p>
          </Fade>

          <div className="flex gap-8">
            {/* group button  */}
            <div className="flex">
              <Fade delay={350} direction="right">
                <button onClick={() => setCount(count - 1)} className="text-4xl border border-gray-400 px-6">-</button>
              </Fade>
              <button className="text-4xl border border-gray-400 px-6">{count}</button>
              <button onClick={() => setCount(count + 1)} className="text-4xl border border-gray-400 px-6">+</button>
            </div>
            <Fade delay={450} direction="right">
              <button className="text-white bg-red-500 px-4 py-2">Add to Cart</button>
            </Fade>
          </div>

        </div>
        <div className="divider"></div>
        <div className="flex justify-around items-center">
          <Fade delay={350} direction="right">
            <p className="font-bold">Customization : <span className=" font-light text-[#c25353]">{customization}</span></p>
          </Fade>
          <Fade delay={400} direction="right">
            <p className="font-bold flex items-center  gap-2">Rating :
              <span className="font-light text-[#c25353]">{rating}</span><FaStar className="text-red-600" />
            </p>
          </Fade>
          <Fade delay={450} direction="right">
            <p className="font-bold ">Processing Time : <span className="font-light text-[#c25353]">{processing_time}</span></p>
          </Fade>
        </div>
      </div>
      <div className="col-span-2 flex gap-8 my-10 pl-8">
        <Fade delay={500} direction="up">
          <div className="w-1/4 space-y-4">
            <h2 className="text-xl">Name : {name}</h2>
            <p>Email: {email}</p>
          </div>
        </Fade>
        <div className="divider divider-horizontal"></div>
        <Fade delay={650} direction="right">
          <div className="w-3/4">
            <h4 className="text-2xl">Description</h4>
            <p className="text-[#C1C3C2] p-4">{description}</p>
          </div>
        </Fade>
      </div>
    </div>
  )
}