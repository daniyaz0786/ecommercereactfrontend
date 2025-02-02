import loginicions from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import imageTobase64 from "../helpers/imageTobase64";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const Signup = () => {
  const [showpassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imagePic = await imageTobase64(file);

      setData((prev) => ({
        ...prev,
        profilePic: imagePic,
      }));

      // Uncomment this line to see the base64 string in the console
      // console.log("imagePic", imagePic);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      try {
        const response = await fetch(SummaryApi.signUp.url, {
          method: SummaryApi.signUp.method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorMessage = `HTTP error! Status: ${response.status}`;
          console.error(errorMessage);
          toast.error(errorMessage);
          throw new Error(errorMessage);
        }

        const dataapi = await response.json();

        if (dataapi.success) {
          toast.success(dataapi.message);
          // Clear form fields or redirect here
          navigate("/login");
        } else if (dataapi.error) {
          toast.error(dataapi.message);
        }

        // console.log("data", dataapi);
      } catch (error) {
        // console.error("An error occurred:", error);
        toast.error("An unexpected error occurred. Please try again.");
      }
    } else {
      toast.error("Password and confirm password don't match!");
    }
  };

  return (
    <section id="signup">
      <div className="container mx-auto p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginicions} alt="Login Icon" />
            </div>
            <form>
              <label>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
                <div className="text-xs bg-opacity-80 bg-slate-200 py-4 pb-4 pt-2 text-center absolute bottom-0 w-full cursor-pointer">
                  Upload Photo
                </div>
              </label>
            </form>
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name : </label>
              <div className="bg-slate-100 p-2">
                <input
                  required
                  type="text"
                  placeholder="enter your name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  required
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  required
                  type={showpassword ? "text" : "password"}
                  placeholder="enter password"
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span> {showpassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <div>
              <label>Conferm Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="enter password"
                  value={data.confirmPassword}
                  name="confirmPassword"
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((preve) => !preve)}
                >
                  <span>
                    {" "}
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              SignUp
            </button>
          </form>
          <p className="my-5 text-center">
            Already have account ?{" "}
            <Link
              to={"/login"}
              className=" text-red-600 hover:text-red-700 hover:underline items-center"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
