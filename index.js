import express from 'express'

const app = express()

const PORT = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    return res.json({msg : "Hello Frome server v2 with Love by veeraprasadportfolio.online"})
})

app.listen(PORT,()=>{
    console.log(`Serever is running on Port ${PORT}`);
    
})
