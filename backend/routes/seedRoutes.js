import express from 'express';
import Movie from '../models/movieModel.js';
import data from '../data.js';
import User from '../models/userModel.js';
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Movie.deleteMany({});
  const createdMovies = await Movie.insertMany(data.movies);
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdMovies, createdUsers });
});

export default seedRouter;
