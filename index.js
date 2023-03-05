const express = require('express');
const app = express();
const PORT = 3000
app.get("/", (req,res)=>{
    res.end("Hello my friend")
})

app.listen(PORT,()=>{
    console.log(`app running on url http://localhost:${PORT}`);
})