import {useState} from "react"
import { useNavigate } from "react-router-dom"
function Login_page(){
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")

    let [error,setError]=useState("")

    let navigate=useNavigate()

    let handlelogin=async(event)=>{
        event.preventDefault()
        if(email=="admin@gmail.com"&& password=="admin"){
            navigate("/adminhome")
        }else{
            let req=await fetch("http://localhost:3000/api/emp/login",
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({email,password})    
                });
                let data=await req.json()
                console.log(data);
                if(data.user){
                    if(data.user.role=="HR"){
                        navigate("/hrhome");
                    }else{
                        navigate("/emphome")
                    }

                }else{
                    setError(data.message);
                }
        }
    }
    return(

        <div>
            
        <form onSubmit={handlelogin}>
        <input type="text" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter email"></input><br/>

        <input type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
         placeholder="Enter password"></input><br/>

        <button type="submit">login</button>
        </form>

        {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}
export default Login_page