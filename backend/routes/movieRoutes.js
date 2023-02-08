import express from 'express';
import Movie from '../models/movieModel.js';
const movieRouter = express.Router();

movieRouter.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});

movieRouter.get('/id/:id', async (req, res) => {
  const movie = await Movie.findOne({ _id: req.params.id });
  if (movie) {
    res.send(movie);
  } else {
    res.status(404).send({ message: 'Movie Not Found' });
  }
});

export default movieRouter;
