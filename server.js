const express = require('express')
const app = express()


//Routes
app.get('/', (req, res)=> {
    res.send('Product API by Moralist')
})

app.listen(3000, () => {
    console.log('Product App listening on port 3000')
})

