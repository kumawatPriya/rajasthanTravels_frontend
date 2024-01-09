import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup(){

    const navigation = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signupApi = async()=>{
       const response = await fetch('http://localhost:1100/signup',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
       })
       const resSignUp = await response.json();
       console.log(resSignUp)
       if(resSignUp){
           toast.success("Your account has been created....please Login to continue....")
           setTimeout(()=>{
            navigation("/login" )
           },2000)
       }
       else{
        toast.error("Error")
       }
    }
    return(
        <>
        <ToastContainer position="top-center"/>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder="Enter E-Mail" name="email" /><br />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder="Enter Password" name="password" /> <br />
        <button onClick={signupApi}>Sign Up</button>
        </>
    )
}

export {Signup}