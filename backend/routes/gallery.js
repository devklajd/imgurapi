const express = require("express");
const axios = require("axios");

const router = express.Router();

const CLIENT_ID = '443cc174f434907';  // Your Imgur client ID

router.get('/:id', (req, res, next) => {
    let postId = req.params.id;
    let url = `https://api.imgur.com/3/gallery/album/${postId}`;
    console.log(url);

    axios({
        method: 'get',
        url: url,
        headers: {
            'Authorization': 'Client-ID ' + CLIENT_ID
        }
    }).then(function (response) {
        console.log(response.data);
        if (response.data) {
            res.status(200).send(response.data);
        } else {
            res.status(404).json({ error: "Data not found" });
        }
    }).catch(function (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    });
});

router.post('', (req, res, next) => {
    let { section, sort, showViral, window } = req.body;
    let url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/0?showViral=${showViral}`;
    console.log(url);

    axios({
        method: 'get',
        url: url,
        headers: {
            'Authorization': 'Client-ID ' + CLIENT_ID
        }
    }).then(function (response) {
        if (response.data) {
            res.status(200).send(response.data);
        } else {
            res.status(404).json({ error: "Data not found" });
        }
    }).catch(function (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    });
});

module.exports = router;
