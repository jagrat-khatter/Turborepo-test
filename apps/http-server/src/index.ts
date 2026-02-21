import express from 'express'

const app = express();

app.post('/signup' , (req , res)=>{
    return res.send("Signed up")
})

app.post('/signin' , (req , res)=>{
    return res.send("Signed in")
})
app.post('/chat' , (req , res)=>{
    return res.send("You are chatting")
})

app.listen(3001);