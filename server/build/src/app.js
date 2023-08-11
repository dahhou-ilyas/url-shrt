"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./db"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = config_1.default.get('port');
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.listen(port, () => {
    console.log(`app listen in ${port}`);
    (0, db_1.default)();
    (0, routes_1.default)(app);
});
