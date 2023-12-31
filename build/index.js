"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
exports.__esModule = true;
var express_1 = __importStar(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var helmet_1 = __importDefault(require("helmet"));
var dotenv_1 = __importDefault(require("dotenv"));
var routes_1 = __importDefault(require("./routes"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
var DB_URI = (_b = process.env.DB_URI) !== null && _b !== void 0 ? _b : '';
app.use((0, morgan_1["default"])('dev'));
app.use((0, helmet_1["default"])());
app.use((0, cors_1["default"])({
    origin: ['http://localhost:3000', 'https://coinflare.vercel.app'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
}));
mongoose_1["default"]
    .connect(DB_URI)
    .then(function () {
    app.use((0, express_1.json)());
    app.use('/api', routes_1["default"]);
    app.listen(PORT);
    console.log("Server running on port ".concat(PORT));
})["catch"](function (err) {
    console.error(err);
});
