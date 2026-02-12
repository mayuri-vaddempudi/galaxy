import express from "express";
import * as path from "path";
import "dotenv/config";
import {
  mainSequenceStars,
  terrestrialPlanets,
  spiralGalaxies,
  aboutDetails,
} from "./data/data.js";
import planetRouter from "./routes/planetRouter.js";
import aboutRouter from "./routes/aboutRouter.js";

const allItems = [...terrestrialPlanets.map((p) => ({ ...p, type: "planet" }))];

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use("/planets", planetRouter);
app.use("/about", aboutRouter);


app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/index.ejs"), {
    pageType: "all",
    sidebarItems: allItems,
  });
});

app.get("/planets", (req, res) => {
  const welcomeBox = {
    title: "🌍 Welcome to the Planets Page",
    description: `Planets are celestial bodies that orbit stars. In our solar system, there are
    eight planets including Earth, Mars, Jupiter, and Saturn. Each planet has unique
    features like atmosphere, temperature, and moons.
    
    Click on a planet in the sidebar to explore its details.`
  };

  res.render(path.join(__dirname, "/views/pages/index.ejs"), {
    pageType: "planets",
    sidebarItems: terrestrialPlanets,
    welcomeBox,
    selectedItem: null,
  });
});

app.get("/stars", (req, res) => {

  res.render(path.join(__dirname, "/views/pages/index.ejs"), {
    pageType: "stars",
    sidebarItems: mainSequenceStars,
  });
});


app.get("/about", (req, res) => {
  res.render("pages/about", {
    pageType: "about",
    sidebarItems: [
      { name: "About Us", type: "info" },
      { name: "Team", type: "info" },
      { name: "Contact", type: "info" },
    ],
    aboutDetails,
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
