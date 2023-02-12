const { Jokes } = require('../models/jokes.models');

const getJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json({ jokes: allJokes }))
};

const getJoke = (req, res) => {
    Jokes.findOne({ id: req.params.id })
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
};

const createJokes = (req, res) => {
    const { setup, punchline, id } = req.body;
    Jokes.create({
        setup,
        punchline,
        id
    })
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err));
}

const deleteJoke = (req, res) => {
    Jokes.deleteOne({ id: req.params.id })
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err));
}

const updateJoke = (req, res) => {
    const { setup, punchline } = req.body
    Jokes.updateOne({ id: req.params.id }, { setup, punchline })
        .then(jokes => res.json(jokes))
        .catch(err => res.json(err));
}

module.exports = {
    getJoke,
    getJokes,
    createJokes,
    deleteJoke,
    updateJoke
}