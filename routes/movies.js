const {Movie, validate} = require('../models/movie');
const express = require('express');
const router = express.Router();
const { Genre } = require('../models/genre');

router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.send(movies);
});

router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.send(movie);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const genre = await Genre.findById(req.body.genre);

    let movie = new Movie({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });

    movie = await movie.save();

    res.send(movie);
});

router.put('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndUpdate({_id: req.params.id}, {
        title: req.body.title,
        genre: new Genre({
            name: req.body.genre.name
        }),
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    }, { new: true });

    if(!movie) return res.send(404).status('The movie with that given ID was not found');

    res.send(movie);
});

router.delete('/:id', async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id);

    if(!movie) return res.status(404).send('There is not a movie with that given ID.');

    res.send(movie);
});

module.exports = router;