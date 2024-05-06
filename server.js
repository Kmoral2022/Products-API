const express = require('express')
const app = express()


//Routes
app.get('/', (req, res)=> {
    res.send('TodoList API by Moralist')
})

app.listen(3000, () => {
    console.log('TodoList App listening on port 3000')
})

