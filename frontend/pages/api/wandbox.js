const runWandbox = require('./node-wandbox-api/lib/index');
import url from 'url';

// https://github.com/melpon/wandbox/blob/master/kennel2/API.rst

export default function (req, res) {
    const query = url.parse(req.url, true).query

    // noinspection JSUnresolvedVariable
    if (typeof query.code === "undefined" || typeof query.lang === "undefined") {
        res.statusCode = 400;
        res.json({error: 400, data: "Bad argument(s)"})
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    // noinspection JSUnresolvedVariable
    const code = query.code
    // noinspection JSUnresolvedVariable
    const lang = query.lang

    runWandbox.fromString(code, {'compiler': lang},
        (error, results) => {
            if (error) {
                res.json({error: "ERROR: " + error.message});
            } else {
                res.json(results);
            }
        });

};
