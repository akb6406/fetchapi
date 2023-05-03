
const express= require("express");
const router= new express.Router();

const MenRanking = require("../models/mens");




router.post("/", async(req,res)=>{
    res.send("hello ankit baghel")
})

// handle post request or isnert the data 
router.post("/mens", async(req,res)=>{
   try{
    const addingMensRecords= new MenRanking(req.body)
    console.log(req.body);
    const insertMens=await addingMensRecords.save();
    res.status(201).send(insertMens);
   }catch(err){
res.status(400).send(err);
   }
})

// handle get request or get the full data 
router.get("/getmens", async(req,res)=>{
    try{
const getMens= await MenRanking.find({}).sort({"ranking":1});
     res.send(getMens);
     console.log(getMens);
    }catch(err){
 res.status(400).send(err);
    }
 })

 //handle get request or get individual data 
 router.get("/getmens/:id", async(req,res)=>{
    try{
        const _id= req.params.id; 
const getMan= await MenRanking.findById({_id});
     res.send(getMan);
     console.log(getMan);
    }catch(err){
 res.status(400).send(err);
    }
 })

 //hndle patch request of individual
 router.patch("/getmens/:id", async(req,res)=>{
   try{
      const _id=req.params.id;
      const updateMens= await MenRanking.findByIdAndUpdate(_id,req.body,{
         new:true
      });
      
      console.log(updateMens)
      res.status(201).send(updateMens);
      }catch(err){
         res.status(500).send(err);
         }
         })

         // handle delete request 
         router.delete("/getmens/:id", async(req,res)=>{
   try{
      const _id=req.params.id;
      const deleteMens= await MenRanking.findByIdAndDelete(_id);
      
      res.status(201).send(deleteMens);
      }catch(err){
         res.status(500).send(err);
         }
         })

module.exports=router;