
function HrHome(){
    let naviagte=useNavigate()
    let correntuser=JSON.parse(localStorage.getItem("ci=urrentuser"))
    let handleLogout=(e)=>{
        localStorage.removeItem("currentuser")
    }

    return(<div>
        <h1>HR home page</h1>
        <h2>Welcome {currentuser.name}</h2>
        <button onClick={handlelogout}>logout</button>
    </div>)
}
export default HrHome