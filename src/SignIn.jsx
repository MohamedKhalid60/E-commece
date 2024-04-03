import axios from "axios";
import { useState } from "react"

export default function SignIn(){
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const [accept,setAccept]=useState(false)
    const [emailErr,setEmailErr]=useState("");
  async function submit(e) {
    let flag=true;
    e.preventDefault();
    setAccept(true);
    if (pass.length<8){
        flag=false
    } else{
       flag=true
    }
   try
   { if (flag){
        let res= await axios.post("http://127.0.0.1:8000/api/login",{
            
            email:email,
            password:pass,
        })
        if (res.status === 200) {
            window.localStorage.setItem("email", email);
            window.location.pathname = "/";
          }
    }}
    catch(err){
        setEmailErr(err.response.status);
    }
   
  }
    
    return(
        <>
        <form className="father " onSubmit={submit}>
        <label htmlFor="email"> Email:</label>
        <input
          className="field  form-control"
          type="email"
          id="email"
          placeholder="Email..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />  
         {accept&&emailErr==422 && <p>this email is already taken</p>}
        <label htmlFor="pass">password:</label>
        <input
          className="field  form-control"
          type="password"
          id="pass"
          placeholder="password..."
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">SignIn</button>
      </form>
        </>
    )
}