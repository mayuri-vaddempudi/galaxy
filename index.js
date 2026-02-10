import express from "express"
import path from "path"
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 4000
const __dirname = path.resolve()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("pages/index")  // No variables needed
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))