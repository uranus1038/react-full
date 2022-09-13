const express = require('express') ;
const app = express();
const cors = require('cors')
const db = require('./DBConnect');


app.use(express.json());
app.use(cors());
app.post('/login', (req,res)=>
{
    const name  = req.body.name; 
    const pass = req.body.pass; 
    console.log(name);
    console.log(pass);
    db.query("SELECT * FROM users WHERE username = ? AND pass = ? ",[name,pass] ,
    (err,result)=>
    {
        if(err)
        {
            res.send({err : err})
        }
        if(result.length > 0)
        {
            res.send(result)
        }else
        {
            res.send({message : "Wrong user"})
        }
    } );
});

app.listen("8080",()=>{
    console.log("server starting prot 8080");
});