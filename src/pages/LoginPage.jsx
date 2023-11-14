import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formDataHandler = (e) => {
    setFormData((previewData) => {
      let preview = { ...previewData }
      preview[e.target.id] = e.target.value
      return preview
    })
  }

  const options = {
    method: 'POST',
    url: 'https://workshala-api.onrender.com/auth/login/',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      email: formData.email,
      password: formData.password
    }
  }

  const loginHandler = () => {
    setLoading(true)
    axios.request(options).then(function (response) {
      console.log(response.data);
      setLoading(false)
      notify()
    }).catch(function (error) {
      notifyError("Invalid Username or Password")
      setLoading(false)
    })
  }
  return (
    <div className="flex justify-evenly place-items-center h-screen md:flex-col lg:flex-row">

      {loading && <div className='w-full h-[100vh] bg-white flex justify-center place-items-center opacity-75 absolute top-0 z-40'><PropagateLoader
        color={"#946cc3"}
        loading={loading}
        size={25} />
      </div>}

      <img src="../src/assets/loginImage.png" alt="Login" className="min-[280px]:absolute min-[280px]:w-full min-[280px]:h-screen min-[280px]:opacity-30 min-[280px]:-z-10 md:w-[68%] md:h-fit md:static md:opacity-100 lg:w-[42%]"/>

      <div className="min-[280px]:w-[80%] flex justify-center items-center lg:w-[32%]">
        <div className="w-full">
          <h1 className="text-4xl font-bold pb-7">Login</h1>
          <div className=''>
            <div className="py-3">
              <label htmlFor="email" className="block text-md text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-2 border-gray-300-rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-10">
              <label htmlFor="password" className="block text-lg font-medium text-black-600">
                Password
              </label>
              
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full mt-2 p-2 border-gray-300-rounded-lg"
                placeholder="Enter your password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="cursor-pointer absolute right-2 top-[41px]"
              >
                {showPassword ? (
                  <img src="../src/assets/openEye.png" className='animate-pulse w-[24px]' alt="" />
                ) : (
                  <img src="../src/assets/closeEye.png" className='animate-pulse w-[24px]' alt="" />
                )}
              </span>
              <div className="flex text-sm mt-2">
                <img src="../src/assets/rectangleTickBox.png" className="m-1"/>
                <h3>Remember me</h3>
                <h3 className="pl-40">Forgot Password?</h3>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-2 p-2 border-gray-300-rounded-lg hover:bg-rgba(255, 255, 255, 1)- transition duration-300"
            >
              Sign in
            </button>
        
            <div className=" flex text-sm font-bold mt-6 ml-14">
             <h3>Haven't Registered Yet!</h3> <Link to="/register" className="text-purple-600">Register Now</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default LoginPage;
