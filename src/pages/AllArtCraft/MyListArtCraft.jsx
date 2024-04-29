import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function MyListArtCraft() {
  const myArtCraftLoaded = useLoaderData()
  const [myArtCraft, setMyArtCraft] = useState(myArtCraftLoaded)
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myartcraft/${id}`, { method: "DELETE" })
          .then(res => res.json())
          .then(data => {
            data.acknowledged && Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            const remaing = myArtCraft.filter(item => item._id !== id)
            setMyArtCraft(remaing)
          })
      }
    });
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-3  my-10 gap-8">
     
      {
        !myArtCraft ? <div className="justify-center flex my-20"><span className="loading loading-spinner loading-lg"></span></div> : myArtCraft.map(item => {
          return (
            <div key={item._id} className="card w-96 bg-base-100 shadow-xl mx-auto">
              <figure><img className="w-full h-72 p-3" src={item.image} alt={item.item_name} /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.item_name}
                </h2>
                <p>Price : {item.price}</p>
                <p>Rating : {item.rating}</p>
                <p>Customization : {item.customization}</p>
                <p>Stock Status : {item.stock}</p>
                <div className="card-actions justify-end items-center gap-4">
                  <Link to={`/updateartcraft/${item._id}`}>
                    <div className="badge badge-primary badge-outline">Update</div>
                  </Link>
                  <button onClick={() => handleDelete(item._id)} className="badge badge-secondary badge-outline">Delete</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
