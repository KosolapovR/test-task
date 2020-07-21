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
    app.post('/api/giraffe', (req, res) => {
        if (!req.body) return res.sendStatus(400);

        const giraffe = new Giraffe({
            name: req.body.name,
            sex: req.body.sex,
            height: req.body.height,
            weight: req.body.weight,
            color: req.body.color,
            diet: req.body.diet,
            temper: req.body.temper,
            aviary: req.body.aviary,
            image: req.body.image,
            position: req.body.position
        });

        giraffe.save(function (err) {
            if (err) return console.log(err);
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
                if (err) res.sendStatus(404);
                res.send(giraffe);
            });
        })

        .put((req, res) => {
            let newGiraffe = new Giraffe({
                    _id: req.params.id,
                    name: req.body.name,
                    sex: req.body.sex,
                    height: req.body.height,
                    weight: req.body.weight,
                    color: req.body.color,
                    diet: req.body.diet,
                    temper: req.body.temper,
                    aviary: req.body.aviary,
                    image: req.body.image,
                    position: req.body.position
                });

            Giraffe.findByIdAndUpdate(req.params.id, newGiraffe, {new: true},function (err, giraffe) {
                res.send(giraffe);
            });
        })
        .delete((req, res) => {
            Giraffe.findByIdAndDelete(req.params.id, function (err, giraffe) {
                res.send(giraffe);
            });
        });
}
