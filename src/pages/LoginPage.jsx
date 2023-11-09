import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex">
      
      <div className="w-1/2 h-screen">
        
        <img src="../src/assets/loginImage.png" alt="Login" className="object-cover w-full h-full" />
      </div>

      
      <div className="w-1/2 flex justify-center items-center ">
      <div className="w-full pl-8 ml-12">
          <h1 className="text-4xl font-bold mb-20">Login</h1>

          <form>
            <div className="mb-10">
              <label htmlFor="email" className="block text-lg font-medium text-black-600">
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
                type="password"
                id="password"
                className="w-full mt-2 p-2 border-gray-300-rounded-lg"
                placeholder="Enter your password"
              />
              <div className="flex text-sm mt-2">
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
             <h3>Haven't Registered Yet!</h3> <a href="#" className="text-purple-600">Register Now</a>
            </div>
          </form>
        </div>
        </div>
      </div>
  );
};

export default LoginPage;
