const router = require('express').Router();
const store = require('../db/store');

// gets all the notes from db.json file
router.get('/notes', (req, res) => {
    // getnotes function for the store.js
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

// this router will add a new note to the db.json file
router.post('/notes', (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// this router will delete a note from the db.json file by id
router.delete('/notes/:id', (req, res) => {
  store
    //this is the req.params.id from the index.js that will be deleted
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
