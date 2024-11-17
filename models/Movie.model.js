const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    plot: {
        type: String,
        required: true
    }
},
{
    virtuals: true,
});

movieSchema.virtual("cast", {
    ref: 'Celebrity',
    localField: '_id',
    foreignField: 'movies',
    justOne: false,
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;