const {Genre, validate} = require('../models/genre');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const genres = await Genre.find().sort('name');

    res.send(genres);
});

router.get('/:id', async (req, res) => {
    const genreFound = await Genre.findById(req.params.id);

    if (!genreFound) return res.status(404).send('The genre with the given ID does not exist');

    res.send(genreFound);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    let genre = new Genre({name: req.body.name});

    try {
        genre = await genre.save();
    } catch (error) {
        return res.status(400).send(error.message);
    }
    res.send(genre);
})

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(req.params.id, {name: req.body.name}, {
        new: true
    });

    if (!genre) return res.status(404).send("Sorry, i guess we don't have a genre with that given ID");

    res.send(genre);
})

router.delete('/:id', async (req, res) => {
    const removedGenre = await Genre.findByIdAndDelete(req.params.id);

    if (!removedGenre) return res.status(404).send("Sorry, i guess we don't have a genre with that given ID");

    res.send(removedGenre);
})

module.exports = router;