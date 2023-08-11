"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
async function db() {
    const dbUri = config_1.default.get("dbUri");
    try {
        await mongoose_1.default
            .connect(dbUri)
            .then(() => {
            console.log(`DB connected to ${dbUri}`);
        });
    }
    catch (e) {
        console.error(e);
    }
}
exports.default = db;
