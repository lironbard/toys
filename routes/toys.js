const express = require('express');
const Product = require('../models/products');
const router = express.Router();

router.get('/all', (req, res) => {
    Product.find().then(data => res.json(data))
})

router.get('/', (req, res, next) => {
    let { page = 1, search = '' } = req.query;
    let mySearch = new RegExp(search, 'i');
    let limit = 5;
    Product.find({ name: mySearch })
        .limit(limit)
        .skip((page <= 0 ? 0 : page - 1) * limit)
        .then(data => res.json(data));
});

router.get('/cat/:catid', (req, res, next) => {
    Product.find({ cat: req.params.catid })
        .then(data => res.json({ status: "ok", body: data }))
});

router.post('/add', (req, res, next) => {
    Product.create(req.body)
        .then(data => res.json(data));
});

router.post('/edit', (req, res, next) =>{
    Product.findOneAndUpdate({_id: req.body.id} , rew.body)
})

router.post('/delete', (req, res, next) =>{
    Product.findByIdAndRemove({_id: req.body.id} , rew.body)
})

module.exports = router;
