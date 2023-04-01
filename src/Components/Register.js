
import React from "react";
import registerImage from "../Assets/images/registerImage.jpg";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import app from "../firebase.init";
import useFirebase from "../useHooks/useFirebase";
import { useState } from "react";
import Loading from "./Common/Loading";
import { useNavigate } from "react-router-dom";
import useToken from '../Hooks/useToken';

const auth = getAuth(app);


const Register = () => {
  const navigate = useNavigate();
  const {googleUser, signInWithGoogle} = useFirebase();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  console.log(user);

  const [token] = useToken(user || googleUser);

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
  if (token) {
      navigate('/');
  }


  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Register now!</h1>
          <p class="py-6">

            Register now to get update news letter.
            <img
              src={registerImage}
              className="max-w-sm rounded-lg shadow-2xl py-6"
              alt="profile pic"
            />
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                value={name}
                placeholder="Write Your Name"
                class="input input-bordered"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                placeholder="email"
                class="input input-bordered"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                placeholder="password"
                class="input input-bordered"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button onClick={()=>createUserWithEmailAndPassword(email, password, name)} class="btn btn-primary">Register</button>
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

export default Register;

// import React from "react";
// import registerImage from "../Assets/images/registerImage.jpg";
// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
// import app from "../firebase.init";
// import useFirebase from "../useHooks/useFirebase";
// import { useState } from "react";
// import Loading from "./Common/Loading";
// import { useNavigate } from "react-router-dom";
// import useToken from '../Hooks/useToken';

// const auth = getAuth(app);


// const Register = () => {

//   const navigate = useNavigate();
//   const {googleUser, signInWithGoogle} = useFirebase();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [name, setName] = useState();
//   const [
//     createUserWithEmailAndPassword,
//     user,
//     loading,
//     error,
//   ] = useCreateUserWithEmailAndPassword(auth);
//   console.log(user);
//   const [token] = useToken(user || googleUser);
//   if (error) {
//     return (
//       <div>
//         <p>Error: {error.message}</p>
//       </div>
//     );
//   }
//   if (loading) {
//     return <Loading/>;
//   }
//   if (user || googleUser) {
//     return (
//       // navigate('/', { replace: true })
//       {token}
//     );
//   }

//   return (
//     <div class="hero min-h-screen bg-base-200">
//       <div class="hero-content flex-col lg:flex-row-reverse">
//         <div class="text-center lg:text-left">
//           <h1 class="text-5xl font-bold">Register now!</h1>
//           <p class="py-6">

//             Register now to get update news letter.
//             <img
//               src={registerImage}
//               className="max-w-sm rounded-lg shadow-2xl py-6"
//               alt="profile pic"
//             />
//           </p>
//         </div>
//         <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//           <div class="card-body">
//             <div class="form-control">
//               <label class="label">
//                 <span class="label-text">Name</span>
//               </label>
//               <input
//                 type="text"
//                 value={name}
//                 placeholder="Write Your Name"
//                 class="input input-bordered"
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div class="form-control">
//               <label class="label">
//                 <span class="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 placeholder="email"
//                 class="input input-bordered"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div class="form-control">
//               <label class="label">
//                 <span class="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 value={password}
//                 placeholder="password"
//                 class="input input-bordered"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <label class="label">
//                 <a href="#" class="label-text-alt link link-hover">
//                   Forgot password?
//                 </a>
//               </label>
//             </div>
//             <div class="form-control mt-6">
//               <button onClick={()=>createUserWithEmailAndPassword(email, password, name)} class="btn btn-primary">Register</button>
//             </div>
//             <div class="divider">OR</div>
//             <div class="form-control mt-6">
//               <button onClick={signInWithGoogle} class="btn btn-primary">Sign in with Google</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
