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
        const sex = req.body.sex;
        const color = req.body.color;
        const diet = req.body.diet;
        const temper = req.body.temper;
        const aviary = req.body.aviary;
        const image = req.body.image;

        console.log('-----------------------', req);

        const giraffe = new Giraffe({
            name,
            height,
            weight,
            sex,
            color,
            diet,
            temper,
            aviary,
            image
        });

        giraffe.save(function (err) {
            if (err) return console.log(err);
            console.log('saved ++++++++++ ', giraffe);
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
            Giraffe.findById(id, function (err, giraffe) {
                if(err) res.sendStatus(404);
                console.log('===================', giraffe);
                res.send(giraffe);
            });
        })

        .put((req, res) => {
            const id = req.body.id;
            Giraffe.findById(id, function (err, giraffe) {

                giraffe.name = req.body.name;
                giraffe.sex = req.body.sex;
                giraffe.height = req.body.height;
                giraffe.weight = req.body.weight;
                giraffe.color = req.body.color;
                giraffe.diet = req.body.diet;
                giraffe.temper = req.body.temper;
                giraffe.aviary = req.body.aviary;
                giraffe.image = req.body.image;

                console.log('in update: ', req.body.temper);

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
