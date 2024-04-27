import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

export default function Root() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
