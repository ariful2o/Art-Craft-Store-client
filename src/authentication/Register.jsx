import { sendEmailVerification, updateProfile } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../authProvider/AuthProvider";
import auth from "../firebase/firebase.init";


export default function Register() {
  // const { user } = useContext(AuthContext)
  const { registerUser } = useContext(AuthContext)
  const [errorpassword, setErrorPassword] = useState(null)
  const [checkbox, setCheckboox] = useState(null)
  const [weekPassword, setWeekPassword] = useState(null)
  const [showPassword, setShowPassword] = useState(true)
  const navigate = useNavigate()
  const [name, setName] = useState(null)
  const [photoURL, setPhotoURL] = useState(null)

  const handleShowPassWord = () => {
    setShowPassword(!showPassword)
  }


  const handleRegister = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    const confirmpassword = form.get('confirmpassword')
    const checked = e.target.checked.checked;
    setName(name);
    setPhotoURL(photo);

    if (password !== confirmpassword) {
      setErrorPassword(`Confirm Password don't match`)
      return
    }
    if (password.length < 6) {
      setErrorPassword(`Password must be 6 ca`)
      return
    }

    if (!checked) {
      setCheckboox(`Please acceptd our 
            Accept Term & Conditions`)
      return
    }

    //reset errors
    setErrorPassword('')
    setCheckboox('')

    registerUser(email, password)
      .then(() => {
        e.target.reset()
        navigate('/')
        sendEmailVerification(auth.currentUser)
          .then(() => {
            toast('Email verification sent!')
          });

      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {

    updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoURL,
    }).then(() => {
      // Profile updated!
      console.log('Profile updated!')
      // ...
    }).catch(() => {
      // An error occurred
      // ...
    });
  }, [name, photoURL])


  //password type chenk strong
  const strongPasswordck = (event) => {
    const password = event.target.value
    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/;

    if (!regex.test(password)) {
      setWeekPassword(`You Password so week`)
      return
    } else {
      setWeekPassword('')
    }
  }



  return (
    <div className="max-h-svh  ">
      <Helmet>
        <title>House Rent| Register</title>
      </Helmet>
      <ToastContainer />
      <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100   top-20 left-1/4">
        <h1 className="text-center text-5xl font-bold pt-8 font-sotify">Register your account</h1>

        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input name="photo" type="text" placeholder="Photo URL" className="input-bordered  file-input file-input-ghost w-full" />
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">{weekPassword ? <small className="text-red-500 italic">{weekPassword}</small> : 'Password'}</span>
            </label>
            {

            }
            <input onChange={strongPasswordck} name="password" type={!showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
            <div className="absolute right-2 top-1/4">
              {showPassword ? <span onClick={handleShowPassWord}><FaRegEye /></span> : <span onClick={handleShowPassWord}><FaRegEyeSlash /></span>
              }
            </div>
            <label className="label relative">
              <span className="label-text">{errorpassword ? <small className="text-red-500 italic">{errorpassword}</small> : 'Confirm Password'}</span>
            </label>

            <input name="confirmpassword" type={!showPassword ? "text" : "password"} placeholder="Confirm password" className="input input-bordered relative" required />

            <div className="flex gap-4 mt-3 items-center">
              <input name="checked" type="checkbox" className="checkbox checkbox-success" />
              <a className="label-text hover:underline">Accept Term & Conditions</a>
              {
                checkbox && <small className="text-red-500 italic">{checkbox}</small>
              }
            </div>

          </div>
          <div className="form-control mt-6">
            <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Register</button>
          </div>
          <p className="text-center py-4">Already Have An Account ?<Link to="/login" className="text-[#F75B5F] font-bold"> Login</Link></p>
        </form>
      </div>
    </div>
  )
}

