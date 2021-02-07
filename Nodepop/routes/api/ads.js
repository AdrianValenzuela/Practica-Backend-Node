const express = require('express');
const router = express.Router();
const { Ad, statusEnum } = require('../../models/Ad.js');

// GET /
// get all ads
router.get('/', async (req, res, next) => {
    try {
        const name = req.query.name;
        const status = parseInt(req.query.status);
        const minPrice = parseFloat(req.query.minPrice);
        const maxPrice = parseFloat(req.query.maxPrice);
        const tag = req.query.tag;
        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit);
        const sort = req.query.sort;

        const results = await Ad.fillByFilters(name, status, minPrice, maxPrice, tag, skip, limit, sort);
        res.render('index', { results, statusEnum }); // { results: results,  statusEnum: statusEnum} => { result, statusEnum }
    } catch (error) {
        next(error);
    }
});

// GET /tags
// get all tags of ads
router.get('/tags', async (req, res, next) => {
    try {
        const result = await Ad.distinct("tags");
        res.render('tags', { result }); // { result: result } => { result }
    } catch (error) {
        next(error);
    }
});

// PUT /
// create an ad
router.post('/', async (req, res, next) => {
    try {
        const data = req.body;
        const ad = new Ad(data);

        const newAd = await ad.save();
        res.status(201).json({ result: newAd });
    } catch (error) {
        next(error);
    }
});

module.exports = router;