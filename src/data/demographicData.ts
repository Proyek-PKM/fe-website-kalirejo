// Demographic data for Desa Kalirejo
export interface DemographicData {
  totalPopulation: number;
  malePopulation: number;
  femalePopulation: number;
  ageComposition: {
    toddlers: number; // 0-5 years
    children: number; // 6-12 years
    adults: number; // 19-59 years
    elderly: number; // 60+ years
  };
  householdData: {
    averagePerHousehold: number;
    densityPerKm2: number;
    totalHouseholds: number;
  };
  householdEconomicClassification: {
    wealthy: {
      count: number;
      percentage: number;
    };
    lessWealthy: {
      count: number;
      percentage: number;
    };
    poor: {
      count: number;
      percentage: number;
    };
    averageMembersPerHousehold: number;
  };
}

export const demographicData: DemographicData = {
  totalPopulation: 5656,
  malePopulation: 2828, // Approximately 50% of total
  femalePopulation: 2828, // Approximately 50% of total
  ageComposition: {
    toddlers: 234,
    children: 378,
    adults: 1523,
    elderly: 412
  },
  householdData: {
    averagePerHousehold: 6.95,
    densityPerKm2: 2318,
    totalHouseholds: 814 // Calculated based on total population / average per household
  },
  householdEconomicClassification: {
    wealthy: {
      count: 425,
      percentage: 65.8
    },
    lessWealthy: {
      count: 120,
      percentage: 18.6
    },
    poor: {
      count: 100,
      percentage: 15.5
    },
    averageMembersPerHousehold: 3.9
  },
};

// Calculate percentages for display
export const demographicPercentages = {
  malePercentage: ((demographicData.malePopulation / demographicData.totalPopulation) * 100).toFixed(1),
  femalePercentage: ((demographicData.femalePopulation / demographicData.totalPopulation) * 100).toFixed(1),
  toddlersPercentage: ((demographicData.ageComposition.toddlers / demographicData.totalPopulation) * 100).toFixed(1),
  childrenPercentage: ((demographicData.ageComposition.children / demographicData.totalPopulation) * 100).toFixed(1),
  adultsPercentage: ((demographicData.ageComposition.adults / demographicData.totalPopulation) * 100).toFixed(1),
  elderlyPercentage: ((demographicData.ageComposition.elderly / demographicData.totalPopulation) * 100).toFixed(1)
};