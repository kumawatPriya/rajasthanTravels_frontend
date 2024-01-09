import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(){

    const navigation = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const LoginApi = async()=>{
        const response = await fetch('http://localhost:1100/login',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        console.log("response",response);
        const fetchlogin = await response.json()
        if(fetchlogin.status===true){
          toast.success(fetchlogin.toastmessage)
          setTimeout(()=>{
            navigation('/')
          },2000)
        }
        else{
            toast.error(fetchlogin.toastmessage)
        }
    }


    return(
        <>
        <ToastContainer/>
        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter E-Mail" name="email" value={email} />
        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter Password" name="password" value={password} />
        <button onClick={LoginApi}>Log In</button>
        </>
    )
}

export {Login}