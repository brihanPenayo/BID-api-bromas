const JokesController = require('../controllers/jokes.controllers');
module.exports = function (app) {
    app.post('/jokes', JokesController.createJokes);
    app.delete('/jokes/:id', JokesController.deleteJoke);
    app.get('/jokes/:id', JokesController.getJoke);
    app.get('/jokes', JokesController.getJokes);
    app.put('/jokes/:id', JokesController.updateJoke);
}