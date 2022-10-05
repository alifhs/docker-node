const express = require('express');

const app = express();


const build_time = '10-5-2022'
app.get('/', (req, res)=> {
    res.send(`Hello ${build_time}`);
})

app.listen(5000, ()=> {
    console.log('listening to ')
})