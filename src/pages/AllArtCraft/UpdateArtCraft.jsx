
import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

export default function UpdateArtCraft() {
  const updateArtCraft = useLoaderData()
  const { name, image, email, item_name, subcategory_Name, processing_time, description, price, rating, stock, customization } = updateArtCraft;


  const handleUpdateArtCraft = (e) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const image = form.get('image')
    const email = form.get('email')
    const item_name = form.get('item_name')
    const subcategory_Name = form.get('subcategory_Name')
    const processing_time = form.get('processing_time')
    const description = form.get('description')
    const price = form.get('price')
    const rating = form.get('rating')
    const stock = form.get('stock')
    const customization = form.get('customization')
    const updateArtcraft = { name, image, email, item_name, subcategory_Name, processing_time, description, price, rating, stock, customization }

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(``, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateArtcraft)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            data.acknowledged && Swal.fire("Saved!", "", "success");
          })
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });


  }



  return (
    <div className="min-h-svh flex items-center bg-base-200"><ToastContainer />
      <div className="card shrink-0 w-full max-w-4xl mx-auto shadow-2xl bg-base-100">
        <h2 className="text-center font-black text-4xl my-4">Add Craft Item</h2>
        <form className="card-body" onSubmit={handleUpdateArtCraft}>
          <div className="form-control">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input name="image" defaultValue={image} type="text" placeholder="image URL" className="input input-bordered w-full" />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input name="item_name" defaultValue={item_name} type="text" placeholder="Item Name" className="input input-bordered w-full" required />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Subcategory Name</span>
                </label>
                <input name="subcategory_Name" defaultValue={subcategory_Name} type="text" placeholder="Subcategory Name" className="input w-full input-bordered" required />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Processing Time</span>
                </label>
                <input name="processing_time" defaultValue={processing_time} type="text" placeholder="Processing time" className="input w-full input-bordered" required />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea name="description" defaultValue={description} type="text" placeholder="Description" className="textarea input-bordered w-full" required />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input name="price" defaultValue={price} type="text" placeholder="price" className="input w-full input-bordered" required />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input name="rating" defaultValue={rating} type="text" placeholder="rating" className="input w-full input-bordered" required />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 my-4">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Customization</span>
                </label>
                <div className="input-bordered input items-center flex gap-1">
                  <input type="radio" name="customization" defaultValue={customization} value={"Yes"} id="" /> Yes
                  <input type="radio" name="customization" defaultValue={customization} value={"No"} id="" className="ml-14" /> No
                </div>
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Stock Status</span>
                </label>
                <div className="input-bordered input items-center flex gap-1">
                  <input type="radio" name="stock" defaultValue={stock} id="" value={"In stock"} /> In stock
                  <input type="radio" name="stock" defaultValue={stock} id="" value={"Made to Order"} className="ml-5 md:ml-14  " /> Made to Order
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input name="name" defaultValue={name} type="text" placeholder="Name" className="input w-full input-bordered" required />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input name="email" defaultValue={email} type="email" placeholder="Email" className="input w-full input-bordered" required />
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="text-gray-900 bg-gradient-to-r from-teal-300 to-lime-500 hover:bg-gradient-to-l hover:from-teal-300 hover:to-lime-500 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
