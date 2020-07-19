const mongoose = require('mongoose');

const GiraffeSchema = mongoose.Schema({
    name: {type: String, required: true},
    height: {type: Number, required: true, min: 1, max: 10},
    weight: {type: Number, required: true, min: 10, max: 1000},
    male: {type: String, enum: ['male', 'female']},
    color: {type: String, required: true},
    diet: {type: String, required: true},
    type: {type: String, required: true},
});

const Giraffe = mongoose.model('giraffe', GiraffeSchema);

module.exports = {
    Giraffe
};
