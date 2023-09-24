const express = require('express')
const router = express.Router()
const Notes = require('../models/Notes')
const fetchUser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')

//Route1 get all notes
router.post('/fetchallnotes',fetchUser, async (req,res)=>{
    const notes = await Notes.find({user: req.user.id});
    res.json(notes)
})

//Router 2 adding notes
router.post('/addnotes',fetchUser,[
    body('tittle','enter a valid tittle').isLength({ min: 3 }),
    body('description','enter a valid descripton').isLength({ min: 5 })
], async (req,res)=>{
    const {tittle, description, tag} = req.body

    // if there are errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const note = new Notes({
        tittle,description,tag , user:req.user.id
    })

    const saveNote = await note.save()
    res.send(saveNote)

})

module.exports = router