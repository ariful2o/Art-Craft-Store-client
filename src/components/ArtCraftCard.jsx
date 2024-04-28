import { Link } from "react-router-dom"


export default function ArtCraftCard({ artCraft }) {
    const { item_name, image, price, rating, _id, stock } = artCraft
    console.log(artCraft)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={item_name} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item_name}
                    <div className="badge badge-secondary">{stock}</div>
                </h2>
                <p>Price : {price}</p>
                <p>Rating : {rating}</p>
                <div className="card-actions justify-end">
                    <Link to={`/allartcraft/${_id}`}>
                        <div className="badge badge-outline">Details</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
