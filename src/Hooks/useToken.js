import { useEffect, useState } from 'react';
const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const currentUser = {email:email};
        if(email){
            fetch(`http://localhost:5000/users/${email}`, {
                method:"PUT",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=> res.json())
            .then(data => {
                console.log('token inside useToken hooks', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    }, [user])
    return [token];
};

export default useToken;

// import { useState } from "react";
// import { useEffect } from "react";

// const useToken = (user) =>{
//     const [token, setToken] = useState("");
//     useEffect(()=>{
//         const email = user?.user?.email;
//         const currentUser = {email:email};
//         if(email){
//             const url = `http://localhost:5000/users/${email}`
//             fetch(url,{
//             method:"PUT",
//             headers:{
//                 'content-type':'application/json'
//             },
//             body:JSON.stringify(currentUser)
//         })
//         .then(res=> res.json())
//         .then(data =>{
//             console.log("use token inside TokenHook", data);
//         })
//     },[user]});

//     return [token]
// }
// export default useToken;