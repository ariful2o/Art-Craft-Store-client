import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import { Link } from "react-router-dom";
import ArtCraftCard from "../../components/ArtCraftCard";
import AboutUs from "../../components/AboutUs";

export default function Home() {
  const [artCraft, setArtCraft] = useState()
  useEffect(() => {
    fetch('http://localhost:5000/artcrafts')
      .then(res => res.json())
      .then(data => {

        setArtCraft(data)
      })
  }, [])
  return (
    <>
      <Slider></Slider>
      <div className="mt-0 lg:mt-[900px]">
        <h2 className="text-center text-3xl text-[#70D2C0] my-10">Our Products</h2>
        <div className="">
          {
          artCraft.map((artCraft) => {
            return (
              <ArtCraftCard key={artCraft._id} artCraft={artCraft}></ArtCraftCard>
            )
          })
          }
        </div>
        <AboutUs></AboutUs>
      </div>
    </>
  )
}
