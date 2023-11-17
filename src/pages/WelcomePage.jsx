import React from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

export default function WelcomePage() {
    const navigate = useNavigate();
    let c = true;
    useEffect(() => {
        if (c) {
            toast.success("Successfully Registered, Please Verify Your Email");
        }
        c = false;
    }, []);

    return (
        <>
            <NavBar />
            <ToastContainer />
            <div className="flex bg-rose-50 min-[280px]:flex-col md:flex-row ">
                <div className="mt-1 bg-rose-50 min-[280px]:flex min-[280px]:justify-center min-[280px]:place-items-center lg:place-items-start lg:mt-[38px]">
                    <img
                        className="pt-1 pb-1 mt-12 ml-6 min-[280px]:w-[200px] min-[280px]:m-0 lg:w-[400px]"
                        src="assets/welcomeImg.png"
                        alt=""
                    />
                </div>
                <div className="ml-48 mt-12 bg-white rounded-lg pl-8 pb-8 min-[280px]:ml-8 md:ml-8 min-[280px]:w-[84%]">
                    <h1 className="text-3xl font-bold mt-4">Welcome</h1>
                    <div className="mt-4 rounded-xl bg-rose-50 p-1 w-fit pr-24 pl-8 min-[280px]:text-xs  min-[280px]:max-w-[88%] min-[280px]:p-4">
                        <p>
                            Your account is created Successfully. Let's get
                            started
                        </p>
                    </div>
                    <h3 className="mt-8 ml-6 text-lg font-semibold min-[280px]:m-0 min-[280px]:w-[200px] min-[280px]:mt-4">
                        Work Status
                    </h3>
                    <div className="flex flex-wrap ml-6 mt-8 justify-evenly min-[280px]:m-0">
                        <div className="outline outline-1 outline-black w-fit pl-5 pt-4 pb-4 pr-20 rounded-xl min-[280px]:p-7 min-[280px]:w-[160px]">
                            <h3 className="text-xl font-semibold min-[280px]:text-base">
                                I'm Experienced
                            </h3>
                            <p className="mt-2">
                                I have work experience <br />
                                (Excluding Internships)
                            </p>
                        </div>

                        <div className="outline outline-1 outline-black w-fit ml-16 pl-5 pt-4 pb-4 pr-16 rounded-lg min-[280px]:mt-2 md:pt-2 min-[280px]:m-0 md:ml-8 min-[280px]:p-7 min-[280px]:w-[160px]">
                            <h3 className="text-xl font-semibold">
                                I'm Fresher
                            </h3>
                            <p className="mt-2">
                                I am a student <br />
                                Haven't worked after Graduation
                            </p>
                        </div>
                    </div>
                    <h3 className="mt-8 ml-6 text-lg font-semibold">
                        Your Skills
                    </h3>
                    <div className="flex min-[280px]:flex-col md:flex-row">
                        <ul className="flex-col">
                            <li className="flex text-black bg-[#CAB7E180] w-fit pl-16 pr-16 pt-1 pb-1 rounded-lg min-[280px]:pl-8 ">
                                Blockchain
                            </li>
                            <li className="flex text-black bg-[#CAB7E180] w-fit pl-8 pr-8 pt-1 pb-1 rounded-lg mt-4">
                                Design
                            </li>
                            <li className="flex text-black bg-[#CAB7E180] w-fit pl-8 pr-8 pt-1 pb-1 rounded-lg mt-4">
                                Marketing
                            </li>
                        </ul>
                        <ul className="flex-col ml-8 min-[280px]:mt-4 min-[280px]:ml-1 md:mt-0">
                            <li className="flex text-black bg-[#CAB7E180] w-fit pl-16 pr-16 pt-1 pb-1 rounded-lg min-[280px]:pl-8">
                                Architecture
                            </li>
                            <li className="flex text-black bg-[#CAB7E180] w-fit  pl-8 pr-8 pt-1 pb-1 rounded-lg mt-4">
                                IT and Software
                            </li>
                            <li className="flex text-black bg-[#CAB7E180] w-fit pl-8 pr-8 pt-1 pb-1 rounded-lg mt-4">
                                Writing
                            </li>
                        </ul>
                        <ul className="flex-col ml-8 min-[280px]:mt-4 min-[280px]:ml-1 md:mt-0">
                            <li className="flex text-black bg-[#CAB7E180] w-fit pl-8 pr-16 pt-1 pb-1 rounded-lg">
                                Javascript
                            </li>
                            <li className="flex text-black bg-[#CAB7E180] w-fit pl-8 pr-8 pt-1 pb-1 rounded-lg mt-4">
                                Database
                            </li>
                            <li className="flex text-black bg-[#CAB7E180] w-fit mt-4 pl-5 pr-6 pt-1 pb-1 rounded-lg min-[280px]:pl-8">
                                Web development
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={() => navigate("/")}
                        className=" text-black bg-white outline outline-purple-600 outline-1 w-fit pl-16 pr-20 rounded-md mt-8 font-semibold hover:bg-purple-900 hover:text-white"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}
