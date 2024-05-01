import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutUs from "../../components/AboutUs";
import ArtCraftCard from "../../components/ArtCraftCard";
import Blog from "../../components/Blog";
import Slider from "../../components/Slider";
import ContactUs from "../ContactUs";
import Banner from "../../components/Banner";
import { Fade } from "react-awesome-reveal";
import 'animate.css';

export default function Home() {
  const [artCraft, setArtCraft] = useState()
  const [blogs, setBlogs] = useState()
  useEffect(() => {
    fetch('https://art-craft-store-server-three.vercel.app/artcrafts')
      .then(res => res.json())
      .then(data => {
        setArtCraft(data.slice(0, 3))
      })
    fetch('https://art-craft-store-server-three.vercel.app/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data.slice(0, 3)))
  }, [])
  return (
    <>
      <Slider></Slider>
      <div className="mt-0 lg:mt-[900px]">
        <Fade delay={100} direction="up">
          <h2 className="text-center text-3xl text-[#70D2C0] my-20">Our Products</h2>
        </Fade>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {
            !artCraft ? <div className="justify-center flex my-20"><span className="loading loading-spinner loading-lg"></span></div> : artCraft?.map((artCraft) => {
              return (
                <Fade delay={150} direction="left" key={artCraft._id}>
                  <ArtCraftCard artCraft={artCraft}></ArtCraftCard>
                </Fade>
              )
            })
          }
        </div>
        <Fade delay={100} direction="up">
          <Link to='/allartcraft'><button className="border border-gray-400 px-4 py-2 mx-auto block rounded my-20">Show All</button></Link>
        </Fade>
        <Fade delay={200} direction="up">
          <Banner />
        </Fade>
        <Fade delay={400} direction="down">
          <h2 className="text-center text-3xl text-[#70D2C0] my-20">Latest News & Events</h2>
        </Fade>
        <Fade delay={400} direction="right">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              !blogs ? <div className="justify-center flex my-20"><span className="loading loading-spinner loading-lg"></span></div> : blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
            }
          </div>
        </Fade>
        <Fade delay={100} direction="up">
          <Link to='/blogs'><button className="border border-gray-400 px-4 py-2 my-20 mx-auto block rounded">Show All</button></Link>
        </Fade>
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>
      </div>
    </>
  )
}
