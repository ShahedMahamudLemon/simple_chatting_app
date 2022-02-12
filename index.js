const express=require("express");
const app=express();
const http= require('http')
const expresServer=http.createServer(app);
const {Server}= require('socket.io');
const io=new Server(expresServer);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=>{
    console.log("New user connected");
    socket.on("chatMsg",(getMsg)=>{
        io.emit("transferMsg",getMsg);
    })
    socket.on("disconnect",function (){
        console.log("User disconnected")
    })

})


expresServer.listen(8000,()=>{
    console.log("Server running success!!")
})