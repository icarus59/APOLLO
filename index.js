const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params

    if(name =="dog") {
        res.json({'sound' : '월월'})
    } else if(name == "cat") {
        res.json({'sound' : '먀옹'})
    } else if(name == "pig") {
        res.json({'sound' : '쿨쿨'})
    } else if(name == "cow") {
        res.json({'sound' : '음메'})
    } else {
        res.json({'sound' : '이해할수 없음'})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})