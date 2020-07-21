'use strict';
const db = require("../../../database")

module.exports = {
    getLists: (req, res) => {
        return res.status(200).send(db.get("lists"));
    },
    updateLists: (req, res) => {
        db.remove("lists");
        db.set("lists", req.body);
        return res.status(200).send();
    }
};
