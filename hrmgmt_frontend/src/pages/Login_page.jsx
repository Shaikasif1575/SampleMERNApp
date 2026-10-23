import {useState} from "react"
import { useNavigate } from "react-router-dom"
function Login_page(){
    let[emailid,setEmailid]=useState("")
    let[password,setPassword]=useState("")

    let [error,setError]=useState("")

    let navigate=useNavigate()

    let handlelogin=(event)=>{
        event.preventDefault()
        if(emailid=="admin@gmail.com"&& password=="admin"){
            navigate("/userhome")
        }else{
            setError("invalid credentials")
        }
    }
    return(

        <div>
            
        <form onSubmit={handlelogin}>
        <input type="text" 
        value={emailid}
        onChange={(e)=>setEmailid(e.target.value)}
        placeholder="Enter emailid"></input><br/>

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