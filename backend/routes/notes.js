const express = require('express')
const router = express.Router()
const user = 

router.get('/', (req,res)=>{
    obj = {
        name: 'notes'
    }
    res.json(obj)
})

module.exports = router