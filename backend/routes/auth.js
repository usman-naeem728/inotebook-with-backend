const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    obj = {
        name: 'usman'
    }
    res.json(obj)
})

module.exports = router