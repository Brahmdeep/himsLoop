const express =require('express');
const router=express.Router();
const PostAPI='http://localhost:3000/api/ZoneMsts';
const axios=require('axios');


router.get('/posts',(req,res)=>{
    axios.get(`${PostAPI}`).then(posts=>{
        res.status(200).json(posts.data);
    })
    .catch(error=>{
        res.status(500).send(error);
    })
})

module.exports=router;