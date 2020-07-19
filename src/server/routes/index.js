const multer = require('multer');
const path = require('path');
const express = require('express');
const jsonParser = express.json();
const {Giraffe} = require('../models/giraffe');
const storage = multer.diskStorage({
    destination: './uploads/' /* relative to root dir of project */,
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

module.exports = (app) => {
    // Upload image
    app.post('/uploadImage', upload.single('file'), async (req, res) => {
        if (req.file) {
            res.send({success: true})
        } else {
            res.sendStatus(500)
        }
    })

    // Giraffe API
    app.post('/api/giraffe', jsonParser, (req, res) => {
        if (!req.body) return res.sendStatus(400);

        const name = req.body.name;
        const height = req.body.height;
        const weight = req.body.weight;
        const male = req.body.male;
        const color = req.body.color;
        const diet = req.body.diet;
        const type = req.body.type;

        const giraffe = new Giraffe({
            name: name,
            height: height,
            weight: weight,
            male: male,
            color: color,
            diet: diet,
            type: type
        });
        giraffe.save(function (err) {
            if (err) return console.log(err);
            res.send(giraffe);
        })
    });
    app.get('/api/giraffe', (req, res) => {
        const aviaryNum = req.query.aviaryNum;
        console.log('aviaryNum =', aviaryNum);
        Giraffe.find({aviaryNum}, function(err, giraffes){

            if(err) return console.log(err);
            res.send(giraffes);
        });
    });
    app.route('/api/giraffe/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.send(id);
        })

        .put((req, res) => {

        })
        .delete((req, res) => {

        })
}
