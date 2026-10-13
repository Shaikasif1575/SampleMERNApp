import{useState} from "react"

function Contact() {
  let [name,SetName]=useState("")
  let [age,SetAge]=useState(18)
  let [phno,setPhno]=useState("")

  let RegisterData=(event)=>{
    event.preventDefault();
    console.log(name);
    console.log(age);
  }

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={RegisterData}> 
        <input type="text" value={name} onChange={(event)=>SetName(event.target.value)} placeholder="Name" ></input><br/>
        <input type="number"value={age} onChange={(e)=>SetAge(e.target.value)} placeholder="Age" ></input><br/>
        <input type="text" value={phno} onChange={(e)=>setPhno(e.target.value)} placeholder="enter your phone number"></input> <br/>
        <button type="submit">Submit</button>
      </form>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{phno}</h3>
    </div>
  );
}
export default Contact;