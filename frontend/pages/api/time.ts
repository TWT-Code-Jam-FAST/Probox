// for reference: https://nextjs.org/docs/api-routes/introduction

const url = require("url");

export default (req, res) => {
    res.statusCode = 200;

    const q: string = url.parse(req.url, true).query.timezone;
    const m: string = q !== undefined && q.split("/").length == 2 ?
        q :
        new Intl.DateTimeFormat().resolvedOptions().timeZone;

    const dt = Date().toLocaleString().split(" ");
    const day = dt[0];
    const date = dt.slice(1, 4).join(" ");
    const month = dt[1];
    const dateDay = dt[2];
    const year = dt[3];
    const time = dt.slice(4).join(" ");

    res.json({
        timezone: m.toString(),
        time: time,
        day: day,
        date: date,
        month: month,
        dateDay: dateDay,
        year: year
    });
}
