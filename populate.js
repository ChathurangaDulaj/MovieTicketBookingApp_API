
var mongoose = require("mongoose");
var Movie = require("./models/movie");

const movies = [

  {
    title: '10 Cloverfield Lane',
    poster: 'https://i.imgur.com/kV2BVdH.jpg',
    genre: 'Drama',
  },
  {
    title: 'Birth of a Nation',
    poster: 'https://i.imgur.com/a6HJj8S.jpg',
    genre: 'Fantasy/Myster',
  },
  {
    title: 'De Palma',
    poster: 'https://i.imgur.com/oOIa73M.jpg',
    genre: 'Documentary',
  },
  {
    title: 'Doctor Strange',
    poster: 'https://i.imgur.com/kyHDVOk.jpg',
    genre: 'Fantasy/Science Fiction',
  },
  {
    title: 'Eddie the Eagle',
    poster: 'https://i.imgur.com/GNrdAuF.jpg',
    genre: 'Drama/Sport',
  },
  {
    title: 'Pride and prejudice and zombies',
    poster: 'https://i.imgur.com/KhbG0Lw.jpg',
    genre: 'Thriller/Action',
  },

  {
    title: 'Green Room',
    poster: 'https://i.imgur.com/Q0Ysh7L.jpg',
    genre: 'Crime/Thriller',
  },
  {
    title: 'Kubo and the Two Strings',
    poster: 'https://i.imgur.com/uTFCKZc.jpg',
    genre: 'Fantasy/Adventure',
  },
  {
    title: 'In a Valley of Violence',
    poster: 'https://i.imgur.com/DTtJ62G.jpg',
    genre: 'Drama/Western',
  },
  {
    title: 'O.J.: Made in America',
    poster: 'https://i.imgur.com/T8uc6x8.jpg',
    genre: 'Documentary',
  }
 
];

mongoose.connect('mongodb://localhost/movies');
movies.map(data => {
  const movie = new Movie(data);
  movie.save();
});