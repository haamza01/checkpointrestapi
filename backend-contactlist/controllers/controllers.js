const ContactSchema=require('../models/contact')

exports.addContact= async (req,res)=>{
    const {name,age,email}=req.body
    
    try {
        
        const contact =  new ContactSchema(req.body)
    
        
        const found =await ContactSchema.findOne({email})
        if (found){return   res.status(400).send({msg:"user alredy exist"}) }
    
        await contact.save()
        
        res.status(200).send({msg:'new contact added',contact})
    } catch (error) {
        res.status(500).send({msg:"could not add user", error})
        
    }
    
    
    }
    exports.getContact= async (req,res)=>{

        try {
            const contacts= await ContactSchema.find()
            res.status(200).send({msg:"your contact list", contacts})
        } catch (error) {
            res.status(500).send({msg:"could not find contact", error})
            
        }}

        exports.deleteContact=async(req,res)=>{


            try {
                const deleted= await ContactSchema.findByIdAndDelete(req.params.id)
                res.status(200).send({msg:"user deleted",deleted})
                
            } catch (error) {
                res.status(500).send({msg:"user not deleted",error})
                
            }
            
            }
            exports.updateContact= async (req,res)=>{

                try {
                    const update= await ContactSchema.findByIdAndUpdate(req.params.id, {$set:req.body})
                    res.status(200).send({msg:"contact update",update})
                } catch (error) {
                    
                    res.status(500).send({msg:"not update",error})
                }
            
            
            
            }
            exports.getoneContact= async (req,res)=>{


                try {
                    const findcontact= await ContactSchema.findById(req.params.id)
                    res.status(200).send({msg:"contact find",findcontact})
                    
                } catch (error) {
                    res.status(500).send({msg:"not find", error})
                    
                }
            }
            