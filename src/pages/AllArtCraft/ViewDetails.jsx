import { useLoaderData } from "react-router-dom"

export default function ViewDetails() {
  const detailsArtCraft = useLoaderData()
  const { name, image, email, item_name, subcategory_Name, processing_time, description, price, rating, stock, customization } = detailsArtCraft
  console.log(detailsArtCraft)
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src={image} alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
        <p>{description}</p>
        <p>Price : {price}</p>
        <p>Rating : {rating}</p>
        <p>Customization : {customization}</p>
        <p>Stock : {stock}</p>
        <p>Processing Time : {processing_time}</p>
        <p>Subcategory Name : {subcategory_Name}</p>


        <div className="card-actions justify-end">
          <div className="badge badge-outline">Name : {name}</div>
          <div className="badge badge-outline">Email : {email}</div>
        </div>
      </div>
    </div>
  )
}
