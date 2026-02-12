import express from "express"
import * as path from "path"
import "dotenv/config"
import { mainSequenceStars, terrestrialPlanets, spiralGalaxies, aboutDetails } from "./data/data.js";


const allItems = [
  { name: "Terrestrial Planets", type: "title" },
  ...terrestrialPlanets.map(p => ({ ...p, type: "planet" })),
  { name: "Main-Sequence Star", type: "title" },
  ...mainSequenceStars.map(s => ({ ...s, type: "star" })),
  { name: "Spiral Galaxies", type: "title" },
  ...spiralGalaxies.map(g => ({ ...g, type: "galaxy" })),

];
 
const app = express()
const port = process.env.PORT
const __dirname = path.resolve()

app.set("view engine",'ejs')
app.set("views", path.join(__dirname, "views")); 
app.use(express.static("public"))

app.use('/data', express.static(path.join(__dirname, 'data')));

app.get("/", (req,res) => {
   res.render(path.join(__dirname, "/views/pages/index.ejs"),
   {
      pageType: "all",
      sidebarItems: allItems
   })

})

app.listen(port, ()=>{
  console.log(`Server is running on ${port}`);
  
})