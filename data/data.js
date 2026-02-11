export const galaxy = [
  {
    type: "Main-Sequence Star",
    icon: "⭐",
    description:
      "Stars that fuse hydrogen into helium in their cores. Most common type of star.",
    examples: [
      {
        name: "Sun",
        spectralType: "G-type",
        distanceLightYears: 0,
        color: "Yellow",
        size: "1.4 million km",
        temperature: "5500°C",
      },
      {
        name: "Sirius",
        spectralType: "A-type",
        distanceLightYears: 8.6,
        color: "White",
        size: "2.38 million km",
        temperature: "9940°C",
      },
      {
        name: "Proxima Centauri",
        spectralType: "M-type",
        distanceLightYears: 4.24,
        color: "Red",
        size: "200,000 km",
        temperature: "3042°C",
      },
    ],
  },
  {
    type: "Terrestrial Planet",
    icon: "🪐",
    description:
      "Terrestrial planets are rocky worlds composed primarily of silicate rocks, metals, and a solid surface, distinguishing them from gas giants.",
    examples: [
      {
        name: "Venus",
        planetType: "Terrestrial",
        distanceFromSun_AU: 0.72,
        color: "Yellowish-white",
        diameter: "12104 km",
        surfaceTempRange: "~462°C (constant, extremely hot)",
      },
      {
        name: "Earth",
        planetType: "Terrestrial",
        distanceFromSun_AU: 1.0,
        color: "Blue, white, brown, green",
        diameter: "12742 km",
        surfaceTempRange: "-88°C to 58°C",
      },
      {
        name: "Mars",
        planetType: "Terrestrial",
        distanceFromSun_AU: 1.52,
        color: "Reddish-brown",
        diameter: "6779 km",
        surfaceTempRange: "-143°C to 35°C",
      },
    ],
  },
  {
    type: "Sprial Galaxy",
    icon: "🌌",
    description:
      "A spiral galaxy is a type of galaxy characterized by a rotating, flat disk featuring spiral arms of gas, dust, and young stars that curve outward from a dense, central bulge of older stars.",
    examples: [
      {
        name: "Milky Way",
        morphologicalType: "Barred Spiral (SBbc)",
        diameterLightYears: 105700,
        stars: "100-400 billion",
        distanceFromUs: 0,
      },
      {
        name: "Andromeda Galaxy (M31)",
        morphologicalType: "Spiral (Sb)",
        diameterLightYears: 220000,
        stars: "~1 trillion",
        distanceFromUs: 2.537,
      },
      {
        name: "Triangulum Galaxy (M33)",
        morphologicalType: "Spiral (Sc)",
        diameterLightYears: 60000,
        stars: "40 billion",
        distanceFromUs: 2.723,
      },
    ],
  },
];

