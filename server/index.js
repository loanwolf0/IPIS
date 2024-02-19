const express = require('express')
const app = express()
const PORT = 8000 ;


app.listen (PORT, () => {
    console.log(`Server is runnig ${PORT}`);
})

app.get('/', (req,res) => {
    res.status(200).json(`Shreya loves you Anurag from bottom of hearts ${PORT} `)
})