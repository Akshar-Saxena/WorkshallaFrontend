import React from "react";
import NavBar from "../components/NavBar";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authReducer";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const profile = {
        name: document.cookie.split(";")[0].split("=")[1],
    };
    return (
        <>
            <NavBar />
            <div className="flex items-center justify-between bg-purple-500/25 p-2 rounded-lg ml-4 mr-4 min-[280px]:flex-col md:flex-row">
                <div className="flex items-center min-[280px]:flex-col md:flex-row">
                    <img
                        src="assets/profileImage.png"
                        alt="Profile"
                        className="w-30 h-30"
                    />
                    <div className="pl-4">
                        <h1 className="text-lg font-semibold">
                            {document.cookie.split(";")[0].split("=")[1]}
                        </h1>
                        <p className="text-sm text-gray-600">
                            UI/UX Designer, Web Developer <br /> Ajay Kumar Garg
                            Engineering College
                        </p>
                    </div>
                </div>

                <div className="flex items-center min-[280px]:flex-col md:flex-row">
                    <button
                        onClick={() => navigate("/profile/edit")}
                        className="bg-[#9465CC] hover:bg-[#532c84] text-white py-2 rounded-lg min-[280px]:w-[120px] min-[280px]:mt-3 md:m-0"
                    >
                        Edit
                    </button>
                    <button className="bg-[#9465CC] hover:bg-[#532c84] text-white py-2 md:mx-4 md:m-0 rounded-lg min-[280px]:w-[120px] min-[280px]:m-3">
                        Your Resume
                    </button>
                </div>
            </div>
            <div className="mt-16 ml-4 mr-4 outline outline-purple-500 outline-1 rounded-lg">
                <h1 className="text-lg font-semibold pl-8 pt-4 pb-4">
                    Your Details
                </h1>
                <p className="w-[90%] text-justify m-auto pb-6 text-xs">
                    Lorem ipsum, placeholder or dummy text used in typesetting
                    and graphic design for previewing layouts. It features
                    scrambled Latin text, which emphasizes the design over
                    content of the layout. It is the standard placeholder text
                    of the printing and publishing industries.
                    <br />
                    The first use of Lorem ipsum is uncertain, though some have
                    suggested the 1500s, when sections of Classical works were
                    often used as dummy texts by printers to make type specimen
                    books demonstrating different fonts. According to this
                    account, the material was chosen based on Latin&apos;s
                    familiarity as a lingua franca across Europe and the
                    popularity of Classical works during the Middle Ages.
                    Whenever it was first created, Lorem ipsum did not gain
                    widespread popularity until the 1960s, when Letraset
                    manufactured preprinted transfer sheets that featured the
                    passage for use in the advertising industry. The sheets
                    allowed typesetters and designers to cut out and rub on the
                    text in various fonts, sizes, and formats for mock-ups and
                    prototypes.
                    <br />
                    In the 1980s, during the rise of the personal computer,
                    Aldus Corporation developed its PageMaker desktop publishing
                    software, which included Lorem ipsum as a word processing
                    feature. Other word processors, including Microsoft Word,
                    adopted the feature, and it became ubiquitous as a
                    placeholder in Web design. Most Web content management
                    systems, such as Joomla! and Wordpress, also feature a
                    plug-in that generates Lorem ipsum.
                </p>
            </div>
            <button
                onClick={() => dispatch(logout())}
                className="p-2 my-10 ml-10 rounded-md outline outline-1 outline-black bg-white text-black w-[190px] hover:bg-[#946cc5] hover:text-white"
            >
                Log out
            </button>
        </>
    );
}
