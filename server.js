const express = require('express');
const app = express ();
const portNumber = process.env.PORT || 3005;
require("dotenv").config();
const cors = require ('cors')
app.use(express.json());
app.use(express.urlencoded({extended:false }));
app.use (
    cors({
        origin: '*',
        credentials: true
    })
)
//is pointing to user route
app.use("/users",require("./routes/users"))
app.use("/groups",require("./routes/groups"))
app.use("/projects",require("./routes/projects"))


app.listen(portNumber, function(req, res)

















{
    console.log(`Listening on port ${portNumber}`);
})

// app.get('/', async function(req,res){
//     console.log("Arrived at homepage");
//     res.render("Homepage")
// })



