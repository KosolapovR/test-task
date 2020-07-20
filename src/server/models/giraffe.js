const mongoose = require('mongoose');

const GiraffeSchema = mongoose.Schema({
    name: {type: String},
    height: {type: Number, min: 1, max: 1000},
    weight: {type: Number, min: 1, max: 1000},
    sex: {type: String},
    color: {type: String},
    diet: {type: String},
    temper: {type: String},
    aviary: {type: Number, default: 1},
    image: {type: String}
});

const Giraffe = mongoose.model('giraffe', GiraffeSchema);

module.exports = {
    Giraffe
};
