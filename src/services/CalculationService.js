// This is a simplified calculation logic
// You should replace with actual construction formulas and current market rates
export const calculatePossibleBhks = (area) => {
  // Minimum area requirements per BHK configuration
  const bhkRequirements = {
    1: 300, // 1 BHK requires at least 300 sq.ft
    2: 600, // 2 BHK requires at least 600 sq.ft
    3: 900, // 3 BHK requires at least 900 sq.ft
    4: 1200, // 4 BHK requires at least 1200 sq.ft
    5: 1500, // 5 BHK requires at least 1500 sq.ft
  };

  const possible = [];
  for (const [bhk, minArea] of Object.entries(bhkRequirements)) {
    if (area >= minArea) {
      possible.push(parseInt(bhk));
    }
  }

  // If area is too small even for 1BHK, still offer 1BHK as minimum
  if (possible.length === 0 && area > 0) {
    possible.push(1);
  }

  return possible;
};
export const calculateMaterials = (formData) => {
  const { bhk, area, floors, quality } = formData;

  // Calculate total construction area (simplified)
  const totalArea = area * floors * 0.8; // Assuming 80% of plot is built

  // Quality multipliers
  const qualityMultipliers = {
    economy: 0.9,
    standard: 1.0,
    premium: 1.3,
    luxury: 1.8,
  };
  const qualityFactor = qualityMultipliers[quality] || 1.0;

  // Material calculations (simplified examples)
  const materials = [
    {
      name: "Cement",
      quantity: Math.ceil(totalArea * 0.5 * qualityFactor),
      unit: "bags",
      unitPrice: 400,
      totalCost: 0,
    },
    {
      name: "Bricks",
      quantity: Math.ceil(totalArea * 8 * qualityFactor),
      unit: "pieces",
      unitPrice: 8,
      totalCost: 0,
    },
    {
      name: "Steel",
      quantity: Math.ceil(totalArea * 1.2 * qualityFactor),
      unit: "kg",
      unitPrice: 80,
      totalCost: 0,
    },
    {
      name: "Sand",
      quantity: Math.ceil(totalArea * 0.2 * qualityFactor),
      unit: "truck",
      unitPrice: 8000,
      totalCost: 0,
    },
    {
      name: "Aggregate",
      quantity: Math.ceil(totalArea * 0.25 * qualityFactor),
      unit: "truck",
      unitPrice: 9000,
      totalCost: 0,
    },
    {
      name: "Tiles",
      quantity: Math.ceil(totalArea * 1.1 * (quality === "luxury" ? 1.5 : 1.0)),
      unit: "sq. ft.",
      unitPrice: quality === "luxury" ? 120 : quality === "premium" ? 80 : 50,
      totalCost: 0,
    },
    {
      name: "Paint",
      quantity: Math.ceil(totalArea * 0.15 * qualityFactor),
      unit: "liters",
      unitPrice: quality === "luxury" ? 600 : quality === "premium" ? 400 : 250,
      totalCost: 0,
    },
  ];

  // Calculate total costs for each material
  materials.forEach((material) => {
    material.totalCost = material.quantity * material.unitPrice;
  });

  // Calculate total construction cost
  const totalCost = materials.reduce(
    (sum, material) => sum + material.totalCost,
    0
  );

  return {
    ...formData,
    totalArea: Math.round(totalArea),
    materials,
    totalCost,
    quality: quality.charAt(0).toUpperCase() + quality.slice(1),
  };
};
