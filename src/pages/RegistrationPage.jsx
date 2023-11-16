import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import PropagateLoader from "react-spinners/PropagateLoader";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../auth/authReducer';

export default function RegistrationPage() {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const notify = () => {
    toast.success("Registration Success")
  }

  const notifyError = (msg) => {
    toast.error(msg)
  }

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: ''
  })

  const options = {
    method: 'POST',
    url: 'https://workshala-api.onrender.com/auth/register/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      email: formData.email,
      username: formData.name,
      password: formData.password
    }
  }

  const userLoggedIn = () => {
    dispatch(login())
    navigate('/welcome')
  }

  const formDataHandler = (e) => {
    setFormData((previewData) => {
      let preview = { ...previewData }
      preview[e.target.id] = e.target.value
      return preview
    })
  }

  const submitHandler = (e) => {
    if (!formData.email.includes("@")) {
      alert("Not a valid email address")
      return
    }
    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters")
      return
    }
    if (!formData.phoneNumber.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
      alert("Invalid Phone Number")
      return
    }
    setLoading(true)
    axios.request(options).then(function (response) {
      console.log(response.data);
      setLoading(false)
      notify()
      userLoggedIn()
    }).catch(function (error) {
      console.log(error)
      try {
        if (error.response.data.email == "user with this email already exists.") {
          notifyError("User with this email already exists")
          setLoading(false)
        }
      }
      catch (e) {
        console.log(e)
        notifyError("Error! Try again")
      }
    })
  }

  return (
    <div className="flex place-items-center justify-evenly h-[100vh] m-auto">
      {loading && <div className='w-full h-[100vh] bg-white flex justify-center place-items-center opacity-75 absolute top-0'><PropagateLoader
        color={"#946cc3"}
        loading={loading}
        size={25} />
      </div>}
      <div className="top-0 -z-10  w-[42%] min-[280px]:absolute opacity-70 min-[280px]:w-full min-[280px]:h-[100vh] md:static md:w-[48%]">
        <img className='min-[280px]:w-full min-[280px]:h-full' src="assets/regPageImage.png" alt="" />
      </div>
      <div className="w-[28%] min-[280px]:w-[80%] md:w-[28%]">
        <h1 className='text-4xl font-bold pb-7'>Register</h1>

        <div className="py-3 flex flex-col w-full">
          <label htmlFor="name">Name</label>
          <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="text" id="name" onChange={formDataHandler} placeholder='Enter your Name' />
        </div>
        <div className="py-3 flex flex-col w-full">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="tel" id="phoneNumber" onChange={formDataHandler} placeholder='Enter your phone number' />
        </div>
        <div className="py-3 flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="email" id="email" onChange={formDataHandler} placeholder='Enter your Email' />
        </div>
        <div className="py-3 flex flex-col w-full">
          <label htmlFor="password">Password</label>
          <input className='text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black' type="password" id="password" onChange={formDataHandler} placeholder='Enter your password' />
        </div>
        <button onClick={submitHandler} className='py-2 px-5 bg-[#946CC3] text-white text-xs w-full rounded-md mt-10'>Sign Up</button>
        <div className="flex justify-center mt-3">
          <h3 className='font-bold'>Already Registered!</h3> <Link to="/login" className='text-[#946CC3]'>Login</Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}



