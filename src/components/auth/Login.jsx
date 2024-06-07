import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { authSlice } from "../../store/slices/AuthSlice";
import UsePostData from "./../../hooks/api/PostHook";
import { LuLogIn } from "react-icons/lu";
import { toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState();
  const { isLoading, postData } = UsePostData(
    "http://localhost:3005/auth/login"
  );
  const navigate = useNavigate();
  // Check Login
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  let location = useLocation();
  const login = authSlice.actions.login;
  const dispatch = useDispatch();
  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  //get user email and password
  const changeHandler = (event) => {
    let key = event.target.name;
    setUser({ ...user, [key]: event.target.value });
  };
  //post data to api
  const loginHandler = (event) => {
    event.preventDefault();
    postData(user)
      .then((result) => {
        console.log(result.data.user);
        let data = {
          id: result._id,
          email: result.email,
          token: result.token,
        };

        if (result && result.data.user.email && result.data.user.token) {
          dispatch(login(data)); // Dispatch the login action with the received data
          navigate("/");
        } else {
          throw new Error(result);
        }
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
        toast.error("Error: " + error.message, {
          position: "top-center",
          hideProgressBar: false,
          autoClose: 2000,
          closeOnClick: true,
          draggable: true,
          theme: "colored",
          limit: "3",
        });
      });
  };
  return (
    <section className="auth">
      <div className="wrapper">
        <div className="form signup">
          <img src="/images/logo.png" alt="Logo" />
          <h2>Login</h2>
          <p>Access to our dashboard</p>
          <form onSubmit={loginHandler} autoComplete="off">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                onChange={changeHandler}
                placeholder="admin@example.com"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                onChange={changeHandler}
                placeholder="********"
              />
            </div>

            <button type="submit" className="form-control" disabled={isLoading}>
              {" "}
              {isLoading ? (
                "Loading..."
              ) : (
                <>
                  Login <LuLogIn />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
