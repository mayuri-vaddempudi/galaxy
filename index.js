import express from "express"
import * as path from "path"
import "dotenv/config"
import { mainSequenceStars, terrestrialPlanets, spiralGalaxies, aboutDetails } from "./data/data.js";
import planetRouter from "./routes/planetRouter.js";
import galaxyRouter from "./routes/galaxyRouter.js";
import router from "./routes/aboutRouter.js";
import starRouter from "./routes/starRouter.js";

const allItems = [
  { name: "Main-Sequence Star", type: "title" },
  ...mainSequenceStars.map(s => ({ ...s, type: "stars" })),
  { name: "Terrestrial Planets", type: "title" },
  ...terrestrialPlanets.map(p => ({ ...p, type: "planets" })),
  { name: "Spiral Galaxies", type: "title" },
  ...spiralGalaxies.map(g => ({ ...g, type: "galaxies" })),

];

const app = express()
const port = process.env.PORT
const __dirname = path.resolve()

app.set("view engine", 'ejs')
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"))

app.use('/data', express.static(path.join(__dirname, 'data')));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/index.ejs"),
    {
      pageType: "all",
      pageTitle:"Home",
      sidebarItems: allItems
    })

})

app.use("/stars", starRouter);
app.use("/planets", planetRouter);
app.use("/galaxies", galaxyRouter);
app.use("/about", router)
app.listen(port, () => {
  console.log(`Server is running on ${port}`);

})
