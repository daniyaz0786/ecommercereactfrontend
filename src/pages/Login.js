import React, { useContext, useState } from "react";
import loginicions from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import context from "../context";

const Login = () => {
  const [showpassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { fetchUserDetails, fetchUserAddToCart } = useContext(context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataapi = await dataResponse.json();

    if (dataapi.success) {
      toast.success(dataapi.message);
      navigate("/");
      fetchUserDetails();
      fetchUserAddToCart();
    }
    if (dataapi.error) {
      toast.error(dataapi.message);
    }
  };
  // console.log("data login", data);

  return (
    <section id="login">
      <div className="container mx-auto p-4">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto">
          <div className="w-20 mx-auto">
            <img src={loginicions} alt="Login Icon" />
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
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
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-600 mt-2"
              >
                Forgot password ?
              </Link>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>
          <p className="my-5 text-center">
            Don't have account ?{" "}
            <Link
              to={"/sign-up"}
              className=" text-red-600 hover:text-red-700 hover:underline items-center"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
