const express = require('express');
const { fetchNotes } = require('../controller/notes');
const { postNotes } = require('../controller/notes');
const { updateNotes } = require('../controller/notes');

const router = express.Router();

router.get('/',fetchNotes)
       .post('/',postNotes) 
       .patch('/:id',updateNotes); 

exports.router=router;
