import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../auth/authReducer";

export default function RegistrationPage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // let allProfiles;
    // let userIds = [];
    // const [uniqueId, setUniqueId] = useState(0);

    const notify = () => {
        toast.success("Registration Success");
    };

    const notifyError = (msg) => {
        toast.error(msg);
    };

    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
    });

    const options = {
        method: "POST",
        url: "https://workshala-api.onrender.com/auth/register/",
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            email: formData.email.trim(),
            username: formData.name.trim(),
            password: formData.password,
        },
    };

    // const profile = async () => {
    //     const response = await axios.get(
    //         "https://workshala-api.onrender.com/auth/profiles/"
    //     );
    //     console.log(response.data);
    //     var randomNumber = Math.floor(Math.random() * 901) + 100;
    //     while (true) {
    //         response.data.forEach((element) => {
    //             if(element.id != randomNumber) {

    //             }
    //         });
    //         randomNumber = Math.floor(Math.random() * 901) + 100;
    //     }
    // };

    // const getProfiles = async () => {
    //     try {
    //         const response = await axios.get(
    //             "https://workshala-api.onrender.com/auth/profiles/"
    //         );
    //         allProfiles = response.data;
    //     } catch (error) {
    //         null;
    //     }
    // };

    // useEffect(() => {
    //     getProfiles().then(() => {
    //         allProfiles.forEach((element) => {
    //             if (!userIds.includes(element.user)) {
    //                 userIds.push(element.user);
    //             }
    //         });
    //         console.log(userIds);
    //         var unique = Math.floor(Math.random() * 100) + 1;
    //         while (unique in userIds) {
    //             unique = Math.floor(Math.random() * 100) + 1;
    //         }
    //         setUniqueId(unique);
    //     });
    //     return () => {
    //         null;
    //     };
    // }, []);

    // const profileOptions = {
    //     method: "POST",
    //     url: "https://workshala-api.onrender.com/auth/profiles/",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     data: {
    //         fullname: "user77",
    //         bio: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industries. The first use of Lorem ipsum is uncertain, though some have suggested the 1500s, when sections of Classical works were often used as dummy texts by printers to make type specimen books demonstrating different fonts. According to this account, the material was chosen based on Latin's familiarity as a lingua franca across Europe and the popularity of Classical works during the Middle Ages. Whenever it was first created, Lorem ipsum did not gain widespread popularity until the 1960s, when Letraset manufactured preprinted transfer sheets that featured the passage for use in the advertising industry. The sheets allowed typesetters and designers to cut out and rub on the text in various fonts, sizes, and formats for mock-ups and prototypes. In the 1980s, during the rise of the personal computer, Aldus Corporation developed its PageMaker desktop publishing software, which included Lorem ipsum as a word processing feature. Other word processors, including Microsoft Word, adopted the feature, and it became ubiquitous as a placeholder in Web design. Most Web content management systems, such as Joomla! and Wordpress, also feature a plug-in that generates Lorem ipsum.",
    //         phone_number: "",
    //         address: "",
    //         skills: "",
    //         experience: "",
    //         user: uniqueId,
    //     },
    // };

    const userLoggedIn = () => {
        dispatch(login());
        navigate("/welcome");
    };

    const formDataHandler = (e) => {
        setFormData((previewData) => {
            let preview = { ...previewData };
            preview[e.target.id] = e.target.value;
            return preview;
        });
    };

    const submitHandler = () => {
        // userLoggedIn();
        // axios
        //     .request(profileOptions)
        //     .then(function (response) {
        //         console.log(response.data);
        //         // setLoading(false);
        //         // notify();
        //         // userLoggedIn();
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        // console.log(getProfiles());
        if (formData.name.trim().length < 2) {
            notifyError("Username must be at least 2 characters");
            return;
        }
        if (!formData.email.includes("@")) {
            notifyError("Not a valid email address");
            return;
        }
        if (formData.password.length < 6) {
            notifyError("Password must be at least 6 characters");
            return;
        }
        if (
            !formData.phoneNumber.match(
                /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
            )
        ) {
            notifyError("Invalid Phone Number");
            return;
        }
        setLoading(true);
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setLoading(false);
                notify();
                userLoggedIn();
            })
            .catch(function (error) {
                console.log(error);
                try {
                    if (
                        error.response.data.email ==
                        "user with this email already exists."
                    ) {
                        notifyError("User with this email already exists");
                        setLoading(false);
                    }
                } catch (e) {
                    console.log(e);
                    notifyError("Error! Try again");
                }
            });
    };

    return (
        <div className="flex place-items-center justify-evenly h-[100vh] m-auto">
            {loading && (
                <div className="w-full h-[100vh] bg-white flex justify-center place-items-center opacity-75 absolute top-0">
                    <PropagateLoader
                        color={"#946cc3"}
                        loading={loading}
                        size={25}
                    />
                </div>
            )}
            <button
                onClick={() => navigate("/")}
                className="bg-[#946cc5] absolute top-[2%] left-[2%] px-5 py-3 rounded-full"
            >
                {"<"}
            </button>
            <div className="top-0 -z-10  w-[42%] min-[280px]:absolute opacity-70 min-[280px]:w-full min-[280px]:h-[100vh] md:static md:w-[48%]">
                <img
                    className="min-[280px]:w-full min-[280px]:h-full"
                    src="assets/regPageImage.png"
                    alt=""
                />
            </div>
            <div className="w-[28%] min-[280px]:w-[80%] md:w-[28%]">
                <h1 className="text-4xl font-bold pb-7">Register</h1>

                <div className="py-3 flex flex-col w-full">
                    <label htmlFor="name">Name</label>
                    <input
                        className="text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black"
                        type="text"
                        id="name"
                        onChange={formDataHandler}
                        placeholder="Enter your Name"
                    />
                </div>
                <div className="py-3 flex flex-col w-full">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        className="text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black"
                        type="tel"
                        id="phoneNumber"
                        onChange={formDataHandler}
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="py-3 flex flex-col w-full">
                    <label htmlFor="email">Email</label>
                    <input
                        className="text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black"
                        type="email"
                        id="email"
                        onChange={formDataHandler}
                        placeholder="Enter your Email"
                    />
                </div>
                <div className="py-3 flex flex-col w-full">
                    <label htmlFor="password">Password</label>
                    <input
                        className="text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black"
                        type="password"
                        id="password"
                        onChange={formDataHandler}
                        placeholder="Enter your password"
                    />
                </div>
                <button
                    onClick={submitHandler}
                    className="py-2 px-5 bg-[#946CC3] text-white text-xs w-full rounded-md mt-10"
                >
                    Sign Up
                </button>
                <div className="flex justify-center mt-3">
                    <h3 className="font-bold">Already Registered!</h3>{" "}
                    <Link to="/login" className="text-[#946CC3]">
                        Login
                    </Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}
