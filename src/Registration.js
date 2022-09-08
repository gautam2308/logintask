import React, { useState } from "react";
// import axios from 'axios'
function Resgistration()
{
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    async function signUp(){
    let item = {name,password,email}
    // console.log (item)
    let result = await fetch("https://api.github.com/users",{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify(item)
    });
    result = await result.json()
    console.log("result",result)
}
    return(
        <div className="col-sm-4 offset-sm-3">
            <h1>User Sign Up</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="enter your name"/>
            <br/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="enter your Password"/>
            <br/>
            <input type="Email id " value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="enter your email id"/>
             <br/>
             <button className="btn btn-primary" onClick={signUp}>SignUp</button>
        </div>
    )
}
export default Resgistration;