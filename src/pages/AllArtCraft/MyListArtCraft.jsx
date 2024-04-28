import { useLoaderData } from "react-router-dom"

export default function MyListArtCraft() {
  const myArtCraft = useLoaderData()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {
        myArtCraft.map(item => {
          <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={item.image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.item_name}
              </h2>
              <p>Price : {item.price}</p>
              <p>Rating : {item.rating}</p>
              <p>Customization : {item.customization}</p>
              <p>StockStatus : {item.stockStatus}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Update</div>
                <div className="badge badge-outline">Delete</div>
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}
