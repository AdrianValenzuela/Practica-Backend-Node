'use strict';

const mongoose = require('mongoose');

// schema
const adSchema = mongoose.Schema({
    name: { type: String, index: true },
    status: { type: Number, index: true },
    price: { type: Number, index: true },
    photo: String,
    tags: { type: Array, index: true }
});

// Enum for status
const statusEnum = {
    0: "On_Sale",
    1: "Wanted",
    2: "Reserved",
    3: "Sold"
}

// get ads by filters
adSchema.statics.fillByFilters = function (name, status, minPrice, maxPrice, tag, skip, limit, sort) {
    const filtro = {};

    if (name) {
        filtro.name = { $regex: name + '+' };
    }


    if (status) {
        filtro.status = status;
    }


    if (minPrice) {
        filtro.price = { $gte: minPrice };
    }


    if (maxPrice) {
        filtro.price = { $lte: maxPrice };
    }

    if (tag) {
        filtro.tags = tag
    }

    const query = Ad.find(filtro);
    query.limit(limit);
    query.skip(skip);
    query.sort(sort);
    return query.exec();
}

// build schema
const Ad = mongoose.model('Ad', adSchema);

// exports
module.exports = { Ad, statusEnum };