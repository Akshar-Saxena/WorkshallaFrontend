import React, { useEffect } from "react";
import { useState } from "react";

export const JobCard = (props) => {
    const [view, setView] = useState(false);
    const [scrollY, setScrollY] = useState(2000);

    const viewDetails = () => {
        setView(!view);
    };

    const applyInternship = () => {
        alert(`Applied for ${props.item.id}`);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    return (
        <div className="w-[260px] my-10 mx-2 min-[768px]:mx-10 lg:w-[300px]">
            <div className="flex justify-between place-items-center">
                <div className="lg:w-[150px]">
                    <h3 className="outline outline-1 outline-gray-500 w-fit flex place-items-center mx-2 pr-2 rounded-md min-[280px]:text-sm lg:mx-0 lg:pr-2 lg:p-[1px]">
                        <div className="w-[16px] h-[16px] rounded-full mx-1 bg-[#A2E5E3] lg:mx-1"></div>
                        Actively hiring
                    </h3>
                    <h1 className="min-[280px]:text-lg text-2xl font-bold">
                        {props.item.internship_name}
                    </h1>
                    <p className="text-gray-500 min-[280px]:text-sm">
                        Odisha Development Management Programme (ODMP)
                    </p>
                </div>
                <img src="assets/tataLogo.png" alt="" />
            </div>

            <div className="lg:flex lg:justify-between lg:mt-3">
                <ul className="lg:flex lg:flex-col">
                    <li className="flex text-gray-500 py-2 lg:text-xs">
                        <img
                            className="w-[20px] mr-2"
                            src="assets/workFromHome.png"
                            alt=""
                        />
                        Work from Home
                    </li>
                    <li className="flex text-gray-500 py-2 lg:text-xs">
                        <img
                            className="w-[20px] mr-2"
                            src="assets/backInTime.png"
                            alt=""
                        />
                        1 Week
                    </li>
                </ul>
                <ul className="lg:flex lg:flex-col">
                    <li className="flex text-gray-500 py-2 lg:text-xs">
                        <img
                            className="w-[20px] mr-2"
                            src="assets/shuttle.png"
                            alt=""
                        />
                        Starts immediately
                    </li>
                    <li className="flex text-gray-500 py-2 lg:text-xs">
                        <img
                            className="w-[20px] mr-2"
                            src="assets/salary.png"
                            alt=""
                        />
                        225-5,000/week
                    </li>
                </ul>
            </div>

            <div className="lg:flex my-4">
                <h3 className="bg-[#946CC333] w-fit rounded-md px-3 py-[1px] text-gray-600 font-semibold m-1">
                    Internship
                </h3>
                <h3 className="bg-[#946CC333] w-fit rounded-md px-3 py-[1px] text-gray-600 font-semibold m-1">
                    Part time
                </h3>
            </div>

            <div>
                <h3 className="text-blue-500">5 days ago</h3>
            </div>

            <hr className="h-[1px] bg-gray-600 my-4" />

            <a onClick={viewDetails} className="text-blue-600 cursor-pointer">
                View Details
            </a>
            {view && (
                <div
                    className="absolute left-0 h-screen w-[100%] bg-transparent"
                    style={{ top: `${scrollY}px` }}
                >
                    <div className="w-full h-[540px] flex flex-col place-items-center bg-white shadow-[0_-10px_25px_-15px_rgba(0,0,0,0.3)] rounded-t-3xl sticky z-40 top-[500px]">
                        <img
                            onClick={viewDetails}
                            className="w-[50px] mt-6 cursor-pointer"
                            src="assets/downButton.png"
                            alt=""
                        />
                        <div className="flex justify-between w-[90%]">
                            <div className="flex w-fit">
                                <img
                                    className="w-[150px] mr-5 "
                                    src="assets/viewDetailsLogo.png"
                                    alt=""
                                />
                                <div>
                                    <h1 className="font-bold text-3xl">
                                        {props.item.internship_name}
                                    </h1>
                                    <h2 className="text-gray-600 text-xs">
                                        Start Date : {props.item.start_date}
                                    </h2>
                                    <h2 className="text-gray-600 text-xs">
                                        End Date : {props.item.end_date}
                                    </h2>
                                    <h2 className="text-gray-600 text-xs">
                                        Application Deadline :{" "}
                                        {props.item.application_deadline}
                                    </h2>
                                    <h2 className="text-gray-600 text-xs">
                                        Email : {props.item.contact_email}
                                    </h2>
                                    <h1 className="mt-4 font-semibold text-lg">
                                        {props.item.job_title}
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <button
                                    onClick={applyInternship}
                                    className="outline outline-1 outline-black font-semibold px-3 py-2 mx-3 rounded-lg"
                                >
                                    Apply
                                </button>
                                <button className="outline outline-1 outline-black font-semibold px-3 py-2 mx-3 rounded-lg">
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className="w-[90%] mt-5">
                            <h1 className="font-bold text-lg">Skills</h1>
                            <p className="bg-[#946CC333] px-4 p-2 rounded-lg">
                                {props.item.requirements}
                            </p>
                        </div>
                        <div className="w-[90%] mt-5">
                            <h1 className="font-bold text-2xl">
                                About the Job
                            </h1>
                            <p>{props.item.description}</p>
                        </div>
                        <div className="w-[90%] mt-5">
                            <h1 className="font-bold text-lg">Stipend</h1>
                            <p className="font-md text-green-700">
                                Rs. {props.item.stipend}/month
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
