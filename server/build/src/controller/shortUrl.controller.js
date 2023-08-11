"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalytics = exports.handleRedirect = exports.createShortUrl = void 0;
const shortUrl_model_1 = __importDefault(require("../models/shortUrl.model"));
const analytics_models_1 = __importDefault(require("../models/analytics.models"));
async function createShortUrl(req, res) {
    // Get the destination from the request body
    const { destination } = req.body;
    console.log(destination);
    // Create a shortUrl
    const newUrl = await shortUrl_model_1.default.create({ destination });
    // Return the shortUrl
    return res.send(newUrl);
}
exports.createShortUrl = createShortUrl;
async function handleRedirect(req, res) {
    const { shortId } = req.params;
    const short = await shortUrl_model_1.default.findOne({ shortId }).lean(); // lean pour retourner des objet js simple 
    if (!short) {
        return res.sendStatus(400);
    }
    const sel = await analytics_models_1.default.create({ shortUrl: short._id });
    console.log(sel);
    return res.redirect(short.destination);
}
exports.handleRedirect = handleRedirect;
async function getAnalytics(req, res) {
    const data = await analytics_models_1.default.find({}).lean();
    return res.send(data);
}
exports.getAnalytics = getAnalytics;
