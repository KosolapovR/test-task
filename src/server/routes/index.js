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
        const aviary = req.body.aviary;

        const giraffe = new Giraffe({
            name,
            height,
            weight,
            male,
            color,
            diet,
            type,
            aviary
        });

        giraffe.save(function (err) {
            if (err) return console.log(err);
            console.log('saved');
            res.send(giraffe);
        })
    });
    app.get('/api/giraffe', (req, res) => {
        const aviary = req.query.aviary;
        Giraffe.find({aviary}, function (err, giraffes) {

            if (err) return console.log(err);
            res.send(giraffes);
        });
    });
    app.route('/api/giraffe/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.send(id);
        })

        .put((req, res) => {
            const id = req.body.id;
            Giraffe.findById(id, function (err, giraffe) {

                giraffe.name = req.body.name;
                giraffe.male = req.body.male;
                giraffe.height = req.body.height;
                giraffe.weight = req.body.weight;
                giraffe.color = req.body.color;
                giraffe.diet = req.body.diet;
                giraffe.type = req.body.type;
                giraffe.aviary = req.body.aviary;

                giraffe.save(function (err) {
                    if (err) return console.log(err);
                    console.log('updated');
                    res.send(giraffe);
                })
                console.log(giraffe);
            });
        })
        .delete((req, res) => {

        })
}
