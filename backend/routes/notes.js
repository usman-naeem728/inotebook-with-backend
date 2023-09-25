const express = require('express')
const router = express.Router()
const Notes = require('../models/Notes')
const fetchUser = require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator')

//Route1 get all notes
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes)
})

//Router 2 adding notes
router.post('/addnotes', fetchUser, [
    body('tittle', 'enter a valid tittle').isLength({ min: 3 }),
    body('description', 'enter a valid descripton').isLength({ min: 5 })
], async (req, res) => {
    const { description, tag } = req.body

    // if there are errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const note = new Notes({
        tittle, description, tag, user: req.user.id
    })

    const saveNote = await note.save()
    res.send(saveNote)

})


// Route 3 : updateing exsiting note
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    const { tittle, description, tag } = req.body;
    try {
        // Create a newNote object
        const newNote = {};
        if (tittle) { newNote.tittle = tittle };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router