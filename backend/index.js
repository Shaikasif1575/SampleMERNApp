let express=require('express');
let mongoose=require('mongoose');
let app=express();
 let hrroutes=require('./routes/hr_routes');
 let emproutes=require('./routes/emp_routes');

 //indicating server incoming json format data
 app.use(express.json());

mongoose.connect("mongodb://localhost:27017/hrmanagement").then(
    ()=>{console.log("db connect success")}).catch(
        (err)=>console.log(err));
app.use("/api/hr",hrroutes);
app.use("/api/emp",emproutes); 
//localhost:3000/api/hr/viewemployees

app.listen(3000,()=>{
    console.log("server listening on port 3000");
})