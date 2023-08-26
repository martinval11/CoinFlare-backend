"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
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
