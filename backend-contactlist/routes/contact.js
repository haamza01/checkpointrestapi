const express =require('express')
const { addContact, getContact, deleteContact, updateContact, getoneContact } = require('../controllers/controllers')

const contactRoute = express.Router()
const ContactSchema=require('../models/contact')
// method post 
// req.body
contactRoute.post('/addContact',addContact)

contactRoute.get('/', getContact)
    //req.params
contactRoute.delete('/:id',deleteContact)

// method put  (update)
// req.params // req.bady

contactRoute.put('/:id',updateContact)
// method get
// req.params
contactRoute.get('/:id' ,getoneContact)


module.exports=contactRoute