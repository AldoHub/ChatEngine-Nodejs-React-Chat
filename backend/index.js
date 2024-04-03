const express = require('express');
const cors = require('cors');
const {default:axios} = require('axios');


const app = express();

app.use(express.json());
app.use(cors({origin: true}));


app.post("/authenticate", async(req, res) => {
    //login users on chatEngine
  
    const { username } = req.body;

    try{
        const call = await axios.put(
            "https://api.chatengine.io/users/",
            {
            username: username,
            secret:  username,
            first_name: username
            },{
                headers: {
                    "private-key": ""
                }
            }

        );


        return res.status(call.status).json(call.data);    

    }catch(err){
        return res.status(err.status).json(err.data);    
    }


});



app.listen('3001', () => {
    console.log("NODE CHAT RUNNING ON PORT 3001");
});