"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    name: String,
    email: String,
    password: String,
    portfolio: {
        type: Array,
        "default": []
    }
});
exports["default"] = mongoose_1["default"].model('User', userSchema, 'CoinFlare-prod');
