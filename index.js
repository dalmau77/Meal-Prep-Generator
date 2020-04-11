const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.send({hi: 'mar mar'})
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`your server is running`))