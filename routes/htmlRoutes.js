const path = require('path');
const router = require('express').Router();

//gets the notes.html file
router.get('/notes', (req, res) => {
    //sends the notes.html file to the client
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// gets the index.html file
router.get('*', (req, res) => {
    //sends the index.html file to the client
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
