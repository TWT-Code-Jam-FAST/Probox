// for reference: https://nextjs.org/docs/api-routes/introduction

const url = require("url");
import moment from "moment-timezone";

export default (req, res) => {
    res.statusCode = 200;

    const crrTime: Date = new Date();

    const q: string = url.parse(req.url, true).query.timezone;
    const m = q && q.split("/").length == 2 ?
        q :
        moment.tz.guess(true);

    const [r, h] = moment.tz(crrTime.toString(), m).format().split("T");
    const [x, y] = h.split("+")

    res.json({timezone: q, day: r, time: x, offset: y});
}
