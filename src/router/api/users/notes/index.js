const express = require('express');
const notesRouter = express.Router({mergeParams: true});
const errors = require('../../../../common/errors');
const db = require('../../../../database');
const Note = require('../../../../model/Note');
const User = require('../../../../model/User');

notesRouter.get('/', (req, res, next) => {
    db.get()
        .then(() => {
            const userId = req.session.passport.user;
            return Note.find({'user': userId});
        })
        .then((notes) => {
            res.json(notes);
        }, (err) => {
            res.status(400).json({errorCode: errors.databaseError.errorCode, message: err.message});
        });
});

notesRouter.post('/', (req, res, next) => {
    const note = req.body;
    db.get()
        .then(() => {
            const userId = req.session.passport.user;
            return User.findOne({_id: userId});
        })
        .then((user) => {
            return Note.create({user: user, text: note.text, position: note.position}).save();
        })
        .then((note) => {
            res.json(note);
        })
        .catch((err) => {
            res.status(400).json({errorCode: errors.databaseError.errorCode, message: err.message});
        });
});

notesRouter.delete('/:noteId', (req, res, next) => {
    const noteId = req.params.noteId;

    db.get()
        .then(() => {
            return Note.findOneAndDelete({_id: noteId});
        })
        .then(() => {
            res.json({message: 'Success'});
        })
        .catch((err) => {
            res.status(400).json({errorCode: errors.databaseError.errorCode, message: err.message});
        });
});

module.exports = notesRouter;
