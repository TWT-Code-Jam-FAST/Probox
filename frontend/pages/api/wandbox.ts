import runWandbox from 'wandbox-api';
import * as http from "http";
import helper from "../../helper/helper";

// https://github.com/melpon/wandbox/blob/master/kennel2/API.rst

export default function (req: http.IncomingMessage, res: http.ServerResponse) {
    const queryStr = req.url.split("?")[1];
    if (!queryStr) {
        res.statusCode = 400;
        res.end(JSON.stringify({error: 400, data: "No arguments"}));
        return;
    }

    const query = helper.parseQuery(queryStr);

    res.setHeader('Content-Type', 'application/json');

    if (typeof query.code === "undefined" || typeof query.lang === "undefined") {
        res.statusCode = 400;
        res.end(JSON.stringify({error: 400, data: "Bad argument(s)"}));
        return;
    }

    res.statusCode = 200;

    const code: string = decodeURIComponent(query.code as string);
    const lang: string = decodeURIComponent(query.lang as string);

    runWandbox.fromString(code, {'compiler': lang},
        (error, results) => {
            if (error) {
                res.end(JSON.stringify({error: "ERROR: " + error.message}));
            } else {
                res.end(JSON.stringify(results));
            }
        });
};
