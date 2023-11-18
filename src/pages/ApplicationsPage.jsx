import React from "react";
import axios from "axios";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ApplicationsPage() {
    let allApplications;
    const [internships, setInternships] = React.useState([]);
    const user = document.cookie.split(";")[0].split("=")[1];

    const notify = () => {
        toast.success("Deleted Application Successfully");
    };
    const notifyError = () => {
        toast.error("Error deleting Application");
    };

    const getInternships = async (id, appli_id) => {
        try {
            const response = await axios.get(
                `https://workshala-api.onrender.com/intern/internships/${id}/`
            );
            setInternships((prev) => [
                ...prev,
                { apli_id: appli_id, ...response.data },
            ]);
            console.log(internships);
        } catch (err) {
            console.log(err);
        }
    };

    const getApplications = async () => {
        try {
            const response = await axios.get(
                "https://workshala-api.onrender.com/intern/applications/"
            );
            allApplications = response.data;
            allApplications.forEach((element) => {
                if (element.fullname == user) {
                    getInternships(element.intern_id, element.id);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    const showConfirmation = (e) => {
        confirmAlert({
            title: "Deletion Alert!",
            message:
                "Confirming to this will Remove your Application from Database",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        deleteApplication(e);
                    },
                },
                {
                    label: "Cancel",
                    onClick: () => {
                        console.log("You clicked no!");
                    },
                },
            ],
        });
    };

    const deleteApplication = async (e) => {
        try {
            const response = await axios.delete(
                `https://workshala-api.onrender.com/intern/applications/${e}`
            );
            notify();
            setInternships([]);
            getApplications();
        } catch (err) {
            notifyError(err);
        }
    };

    useEffect(() => getApplications, []);

    return (
        <>
            <NavBar />
            <ToastContainer />
            <div className="mt-10 m-auto w-[90%] justify-center flex flex-col place-items-center">
                <h1 className="font-bold min-[280px]:text-xl  min-[425px]:text-3xl mb-8">
                    Your Applications
                </h1>
                {internships.length == 0 ? (
                    <h2 className="my-32">No Applications</h2>
                ) : (
                    internships.map((element, id) => (
                        <div
                            className="outline outline-1 outline-[#9465CC] mb-8 min-[280px]:w-[250px]  min-[425px]:w-[400px] py-3 px-10 rounded-lg shadow-2xl relative"
                            key={id}
                        >
                            <h1
                                onClick={() =>
                                    showConfirmation(element.apli_id)
                                }
                                className="absolute right-2 top-2 cursor-pointer"
                            >
                                &#10060;
                            </h1>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    Internship Name :{" "}
                                </span>
                                {element.internship_name}
                            </h2>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    Job Title :{" "}
                                </span>
                                {element.job_title}
                            </h2>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    Start Date :{" "}
                                </span>
                                {element.start_date}
                            </h2>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    End Date :{" "}
                                </span>
                                {element.end_date}
                            </h2>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    Stipend : Rs.{" "}
                                </span>
                                {element.stipend}/month
                            </h2>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    Email Id :{" "}
                                </span>
                                {element.contact_email}
                            </h2>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </>
    );
}
