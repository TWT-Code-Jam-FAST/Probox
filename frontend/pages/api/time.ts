// for reference: https://nextjs.org/docs/api-routes/introduction

const url = require("url");
import moment from "moment-timezone";

export default (req, res) => {
    res.statusCode = 200;

    const crrTime: Date = new Date();

    let q = url.parse(req.url, true).query;
    q = q.timezone && q.timezone.split("/").length == 2 ?
        q.timezone :
        moment.tz.guess(true);

    const r = moment.tz(crrTime.toString(), q).format().split("T")[0];

    res.json({timezone: q.toString(), time: r.toString()});
}
