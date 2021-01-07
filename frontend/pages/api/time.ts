// for reference: https://nextjs.org/docs/api-routes/introduction

const url = require("url");
import moment from "moment-timezone";

export default (req, res) => {
    res.statusCode = 200;

    const crrTime: Date = new Date();

    const q: string = url.parse(req.url, true).query.timezone;
    const m: string = q !== undefined && q.split("/").length == 2 ?
        q :
        moment.tz.guess(true);

    const [r, h]: string[] = moment.tz(crrTime.toString(), m).format().split("T");
    const cache: string[] = h.split("+")
    let x: string = cache[0];
    let y: string | undefined = cache[1];
    if (y === undefined) {
        let cache_ = x.split("-")
        x = cache_[0]
        y = "-" + cache_[1]
    } else {
        y = "+" + y
    }

    if (y === undefined) {
        y = "00:00"
    }

    res.json({timezone: m.toString(), day: r.toString(), time: x.toString(), offset: y.toString()});
}
