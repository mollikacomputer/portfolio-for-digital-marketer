import React, { useState } from "react";
import contactImg from "../Assets/images/contact.svg";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";
import useFirebase from "../useHooks/useFirebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "./Common/Loading";
import { useNavigate } from "react-router-dom";
const auth = getAuth(app);

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {googleUser, signInWithGoogle} = useFirebase();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
 
   if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading/>;
  }
  if (user || googleUser) {
    return (navigate('/', {replace:true})
    );
  }
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
            
            Any kind of budget you can contact me. We need client smile.
            <img
              src={contactImg}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="profile pic"
            />
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                class="input input-bordered"
                placeholder="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                class="input input-bordered"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button onClick={()=> signInWithEmailAndPassword(email, password)} class="btn btn-primary">Login</button>
            </div>
            <div class="divider">OR</div>
            <div class="form-control mt-6">
              <button onClick={signInWithGoogle} class="btn btn-primary">Sign in with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
