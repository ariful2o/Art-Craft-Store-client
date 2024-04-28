import { FaStar } from "react-icons/fa6"
import { useLoaderData } from "react-router-dom"

export default function ViewDetails() {
  const details = useLoaderData()
  const { name, image, email, item_name, subcategory_Name, processing_time, description, price, rating, stock, customization } = details
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-1/2"><img className="min-h-full py-10 p-4" src={image} alt="Album" /></figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">{item_name}</h2>
          <p><span className="font-bold">Sub Category : </span>{subcategory_Name}</p>
          <p className="p-4">{description}</p>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr className="bg-base-200 my-4">
                  <th><p className="font-light"><span className="font-bold">Stock : </span>{stock}</p></th>

                  <td><p className="font-light"><span className="font-bold">Customization : </span>{customization}</p></td>
                </tr>
                <tr className="bg-base-200">
                  <th> <p className="font-light"><span className="font-bold">Price : </span>${price}</p></th>
                  <th><p className="font-light flex items-center gap-2"><span className="font-bold">Rating : </span>{rating}<FaStar className="text-[#555D66]" /></p></th>
                </tr>

              </tbody>
            </table>
          </div>
          <p className="font-light mt-8"><span className="font-bold">Processing Time : </span>{processing_time}</p>
          <p className="font-light "><span className="font-bold">Email : </span>{email}</p>
          <p className="font-light"><span className="font-bold">Name : </span>{name}</p>
        </div>
      </div>
    </div>
  )
}
