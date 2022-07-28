const express = require('express')
const app = express()
const port = 3000

app.get('/', ({ res }) => {
    res.send(
        'hello weirld'
    )
})

app.listen(port, _ => console.log(`listening to port ${port}`))