import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const guestLoginHandler = async () => {
    setLoading(true);
    const { data } = await axios.post(backendUrl + "/api/user/login", {
      email: "guest@gmail.com",
      password: "a1b2c3d4",
    });
    if (data.success) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      toast.success("Guest login successful!");
    } else {
      toast.error(data.message);
    }
    setLoading(false);
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success("Registration successful!");
        } else {
          console.log("data dekho ", data);
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success("Login successful!");
        } else {
          toast.error(data.message);
        }
      }
      console.log("came here in submit handler");
    } catch (error) {
      console.log("error", error);
      // Handle both API errors and network errors
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <button
            className="bg-green-200 p-4 rounded-xl hover:bg-green-400"
            onClick={guestLoginHandler}
          >
            Login as Guest
          </button>
          <p className="text-2xl font-semibold">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </p>
          <p>
            Please {state === "Sign Up" ? "sign up" : "log in"} to book
            appointment
          </p>
          {state === "Sign Up" && (
            <div className="w-full">
              <p>Full Name</p>
              <input
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          )}

          <div className="w-full">
            <p>Email</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded-md text-base"
          >
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>
          {state === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-primary underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Create a new account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-primary underline cursor-pointer"
              >
                click here
              </span>
            </p>
          )}
        </div>
      )}
    </form>
  );
};

export default Login;
