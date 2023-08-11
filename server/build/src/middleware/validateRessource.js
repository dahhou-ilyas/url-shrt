"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//pour ne pas cracher le systeme
const validateRessource = (ressource) => async (req, res, next) => {
    try {
        await ressource.validate({
            body: req.body,
        });
        next();
    }
    catch (e) {
        return res.sendStatus(401);
    }
};
exports.default = validateRessource;
