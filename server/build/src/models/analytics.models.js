"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    shortUrl: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "shortUrl",
        required: true,
    },
}, { timestamps: true });
const analytics = mongoose_1.default.model("analytics", schema);
exports.default = analytics;
