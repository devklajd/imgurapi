const express = require("express");
const axios = require("axios");
const Constants = require('../constants/constants');

const router = express.Router();

router.get('/:id', (req, res, next) => {
    let postId = req.params.id,
        url = 'https://api.imgur.com/3/gallery/album/' + postId;
    console.log(url);
    axios({
        method: 'get',
        url: url,
        headers: Constants["CLIENT_ID"]
    }).then(function (response) {
        console.log(response.data);
        res.status(200).send(response.data);
    }).catch(function (error) {
        console.log(error);
        res.status(404).json({ error: "rerer" });
    });
    //res.status(200).send({ "response": "hai" });
    // https://api.imgur.com/3/gallery/image/{id}
});

router.post('', (req, res, next) => {

    let { section, sort, showViral, window } = req.body;

    // console.log(req);

    let url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/0?showViral=${showViral}`;

    console.log(url);

    axios({
        method: 'get',
        url: url,
        headers: Constants["CLIENT_ID"]
    }).then(function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        console.log(error);
    });

});

module.exports = router;