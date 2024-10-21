import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import IconCloud from "./ui/icon-cloud";
import { slugs } from "@/constants/data";
const Signup = () => {
    const navigate = useNavigate();
    const [logged, setlogged] = useState(false);
    const [userdata, setUserdata] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handle = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        console.log(name, value);

        setUserdata((prevdata) => ({
            ...prevdata,
            [name]: value,
        }));
    };

    const submit = async (e) => {
        e.preventDefault();
        const { name, username, email, password, confirmPassword } = userdata;
        try {
            const response = await axios.post(
                "http://localhost:3000/auth/signup",
                {
                    name,
                    username,
                    email,
                    password,
                    confirmPassword,
                    profilePic: null,
                }
            );
            if (response) {
                navigate("/signin");
                toast.success("signed up sucessfully");
            }
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };
    // if(!logged){
    //   return < div className='flex text-center items-center'>Loading...</div>
    // }
    // else
    return (
        <div className=" h-screen flex justify-center items-center bg-black p-4 text-black">
            <div className="h-full w-full md:w-1/2 flex justify-center items-center">
                <div className="w-full h-full md:w-full sm:w-0 flex items-center justify-center">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
            <form
                className="flex flex-col space-y-4 w-full max-w-sm md:max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-lg"
                onSubmit={submit}
            >
                <h1 className="text-center font-mono font-medium text-lg md:text-xl">
                    Create Account!
                </h1>
                <div className="flex justify-center items-center text-center text-sm md:text-base space-x-2">
                    <button className="w-full py-2 flex items-center justify-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200">
                        <FaGoogle />
                        Sign in with Google
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-300 p-2 rounded-full w-full hover:border-green-400"
                    name="name"
                    value={userdata.name}
                    onChange={handle}
                />
                <input
                    type="text"
                    placeholder="Username"
                    className="border border-gray-300 p-2 rounded-full w-full  hover:border-green-400"
                    name="username"
                    value={userdata.username}
                    onChange={handle}
                />
                <input
                    type="text"
                    placeholder="Email"
                    className="border border-gray-300 p-2 rounded-full w-full  hover:border-green-400"
                    name="email"
                    value={userdata.email}
                    onChange={handle}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-300 p-2 rounded-full w-full  hover:border-green-400"
                    name="password"
                    autoComplete="off"
                    value={userdata.password}
                    onChange={handle}
                />
                <input
                    type="password"
                    autoComplete="off"
                    placeholder="Confirm Password"
                    className="border border-gray-300 p-2 rounded-full w-full  hover:border-green-400"
                    name="confirmPassword"
                    value={userdata.confirmPassword}
                    onChange={handle}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-opacity-90 transition-all"
                >
                    {logged ? "Submitting" : "Sign Up"}
                </button>
                <span className="text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/signin" className="text-violet-700">
                        Sign In
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default Signup;
