// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200

    const crrTime: Date = new Date()

    res.json({name: 'Hello, Probox!', time: crrTime.toDateString()})
}
