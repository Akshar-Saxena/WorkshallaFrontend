import React from "react";

export default function CoursesCard(props) {
    return (
        <>
            <div className="w-[367px] h-[408px] my-10 mx-10 rounded-lg shadow-xl">
                <img
                    src="assets/rectangleImage.png"
                    alt=""
                    className=" w-[366px] h-[186px] rounded-lg"
                />
                <h2 className="ml-8 mt-2 font-bold">{props.title}</h2>
                <div className="flex">
                    <img
                        src="assets/patternEllipse.png"
                        alt=""
                        className="ml-8"
                    />
                    <p>
                        Aman Kumar
                        <br />
                        IITian from BHU, 3year of experience
                    </p>
                </div>
                <hr className="h-[1px] bg-gray-600 mt-12 mb-4" />
                <div className="flex ml-8 ">
                    <h2 className="text-blue-500 font-bold">FREE</h2>
                    <div className="flex ml-28">
                        <img src="assets/starImage.png" alt="" className="" />
                        <h6 className="">3 star</h6>
                    </div>
                    <div className="flex ml-3">
                        <img src="assets/userImage.png" alt="" className="" />
                        <h6>321 enrolled</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

CoursesCard.defaultProps = {
    title: "Data Analysis Using R",
};
