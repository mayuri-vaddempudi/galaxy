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

const allItems = [
  ...terrestrialPlanets.map((p) => ({ ...p, type: "planet" })),
  ...mainSequenceStars.map((s) => ({ ...s, type: "star" })),
];

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
  res.render(path.join(__dirname, "/views/pages/index.ejs"), {
    pageType: "planets",
    pageType: "planets",
    sidebarItems: terrestrialPlanets,
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
