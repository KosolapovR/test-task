const mongoose = require('mongoose');

const GiraffeSchema = mongoose.Schema({
    name: String,
    height: String,
    weight: String,
    sex: String,
    color: String,
    diet: String,
    temper: String,
    aviary: {type: Number, default: 1},
    image: String
});

const Giraffe = mongoose.model('giraffe', GiraffeSchema);

module.exports = {
    Giraffe
};
