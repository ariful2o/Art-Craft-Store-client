import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Select from 'react-select';
import { Fade } from "react-awesome-reveal";

const options = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

export default function MyListArtCraft() {
  const [selectedOption, setSelectedOption] = useState(null);

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
        fetch(`https://art-craft-store-server-three.vercel.app/myartcraft/${id}`, { method: "DELETE" })
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
  // Function to handle change in the selected option
  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption); // Update the state 
    const filter = myArtCraftLoaded.filter(item => item.customization.toLowerCase() === selectedOption.value.toLowerCase())
    setMyArtCraft(filter)
  };


  return (
    <>
      <Fade delay={200} direction="down">
        <h2 className="text-4xl text-center font-bold my-10 text-[#70D2C0]">My Art & Craft : {myArtCraft.length}</h2>
      </Fade>
      <Fade delay={250} direction="right">
        <div className="flex items-center font-bold p-9">
          Filter By Customization:
          <Select
            className="min-w-60 pl-2 font-normal"
            value={selectedOption} // Set the value prop to selectedOption
            onChange={handleOptionChange}
            options={options}
          />
        </div>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-10 gap-8">
        {!myArtCraft ? <div className="justify-center flex my-20"><span className="loading loading-spinner loading-lg"></span></div> : myArtCraft.map(item => {
          return (
            <div key={item._id} className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto">
              <Fade delay={300} direction="down">
                <figure><img className="w-full h-72 p-3" src={item.image} alt={item.item_name} /></figure>
              </Fade>
              <div className="card-body">
                <Fade delay={300} direction="down">
                  <h2 className="card-title">
                    {item.item_name}
                  </h2>
                </Fade>
                <Fade delay={350} direction="down">
                  <p>Price : {item.price}</p>
                </Fade>
                <Fade delay={400} direction="down">
                  <p>Rating : {item.rating}</p>
                </Fade>
                <Fade delay={380} direction="down">
                  <p>Customization : {item.customization}</p>
                </Fade>
                <Fade delay={430} direction="down">
                  <p>Stock Status : {item.stock}</p>
                </Fade>
                <div className="card-actions justify-end items-center gap-4">
                  <Link to={`/updateartcraft/${item._id}`}>
                    <Fade delay={500} direction="right">
                      <div className="badge badge-primary badge-outline">Update</div>
                    </Fade>
                  </Link>
                  <Fade delay={580} direction="right">
                    <button onClick={() => handleDelete(item._id)} className="badge badge-secondary badge-outline">Delete</button>
                  </Fade>
                </div>
              </div>
            </div>
          );
        })}
      </div></>
  )
}
