const express = require("express")
const app = express()
const cors = require("cors")
const path = require('path');

// Express Global Middlewares
app.use(cors({
    origin: "*"
}))

app.use(express.static(path.join(__dirname, "client", "build")))

// Express Routes

app.use("/api", require("./routes/scanDocsRoute"))

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

const port = 9000
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})