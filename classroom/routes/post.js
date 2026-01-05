const express=require("express");
const router=express.Router();

//posts
//Index 
router.get("/",(req,res)=>{
res.send("I am a post Route");
})

//show 
router.get("/:id",(req,res)=>{

})
//post 
router.get("/",(req,res)=>{

})
//Delete
router.get("/:id",(req,res)=>{

})
module.exports=router;