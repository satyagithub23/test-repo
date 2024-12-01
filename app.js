const express = require('express')
const app = express()

const PORT = process.env.PORT || 3700

app.get('/', (req, res) => {
    res.json({ message: "Hello From express server" })
})

app.listen(PORT, () => { console.log(`Server running on PORT ${PORT}`); })