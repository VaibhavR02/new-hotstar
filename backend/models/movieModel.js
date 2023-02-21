import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  Title: { type: String },
  TitleImg: { type: String },
  Description: { type: String },
  CardImg: { type: String },
  BackgroundImg: { type: String },
  type: { type: String },
  Genres: { type: String },
  video: { type: String },
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;
