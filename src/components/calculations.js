import React from "react";
import { data } from "../data/boat_ramps.json";

export const materialsObject = data.features.map((feature) => {
  return { material: feature.properties.material };
});

export const materialsCount = (materialsObject) => {
  let concreteCount = 0,
    gravelCount = 0,
    interlockCount = 0,
    bitumenCount = 0,
    otherCount = 0,
    earthCount = 0;

  for (const el of materialsObject) {
    switch (el.material) {
      case "Concrete":
        concreteCount += 1;
        break;
      case "Gravel":
        gravelCount += 1;
        break;
      case "Interlock Conc Block":
        interlockCount += 1;
        break;
      case "Bitumen":
        bitumenCount += 1;
        break;
      case "Other":
        otherCount += 1;
        break;
      case "Earth":
        earthCount += 1;
        break;
    }
  }

  return [
    {
      materialCount: concreteCount,
      colors: ["#b0e0e6", "#4169e1"],
      name: "Concrete",
    },
    {
      materialCount: gravelCount,
      colors: ["#ff47ab", "#e0064e"],
      name: "Gravel",
    },
    {
      materialCount: interlockCount,
      colors: ["#add9c0", "#1da890"],
      name: "Interlock Conc Block",
    },
    {
      materialCount: bitumenCount,
      colors: ["#cbd9ad", "#7ca81d"],
      name: "Bitumen",
    },
    {
      materialCount: otherCount,
      colors: ["#d9c1ad", "#714511"],
      name: "Other",
    },
    {
      materialCount: earthCount,
      colors: ["#ffd847", "#e0a106"],
      name: "Earth",
    },
  ];
};

export const areaBelow50 = data.features.filter(
  (feature) => feature.properties.area_ < 50
);

export const areaBelow200 = data.features.filter(
  (feature) => feature.properties.area_ >= 50 && feature.properties.area_ < 200
);

export const areaBelow526 = data.features.filter(
  (feature) => feature.properties.area_ >= 200 && feature.properties.area_ < 526
);

export const areasCount = (areaBelow50, areaBelow200, areaBelow526) => {
  return [
    {
      areaCount: areaBelow50.length,
      colors: ["#b0e0e6", "#4169e1"],
      filteredArray: areaBelow50,
      name: "Size 0 to 49",
    },
    {
      areaCount: areaBelow200.length,
      colors: ["#ff47ab", "#e0064e"],
      filteredArray: areaBelow200,
      name: "Size 50 to 199",
    },
    {
      areaCount: areaBelow526.length,
      colors: ["#ffd847", "#e0a106"],
      filteredArray: areaBelow526,
      name: "Size 200 to 526",
    },
  ];
};
