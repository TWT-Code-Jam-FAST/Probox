import runWandbox from 'wandbox-api';
import url from 'url';
import * as http from "http";

// https://github.com/melpon/wandbox/blob/master/kennel2/API.rst

export default function (req: http.IncomingMessage, res: http.ServerResponse) {
    const query = url.parse(req.url, true).query;

    res.setHeader('Content-Type', 'application/json');

    if (typeof query.code === "undefined" || typeof query.lang === "undefined") {
        res.statusCode = 400;
        res.end(JSON.stringify({error: 400, data: "Bad argument(s)"}));
        return
    }

    res.statusCode = 200;

    const code: string = query.code as string;
    const lang: string = query.lang as string;

    runWandbox.fromString(code, {'compiler': lang},
        (error, results) => {
            if (error) {
                res.end(JSON.stringify({error: "ERROR: " + error.message}));
            } else {
                res.end(JSON.stringify(results));
            }
        });
};
