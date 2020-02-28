const express = require('express');

//setting express app
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
  res.send('HELLO WORLD');
})

//listening
app.listen(PORT, console.log(`Server running on PORT : ${PORT}`));
