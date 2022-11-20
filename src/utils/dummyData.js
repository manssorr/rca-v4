export const eventsArr = [
  {
    id: 1,
    problem: "Struck Against (Running or Bumping Into)",
    dcs: [1, 2, 4, 5, 6, 11, 14, 15, 16, 21, 22, 23, 24, 25, 27, 31, 39, 40],
  },
  {
    id: 2,
    problem: "Struck By (Hit By Moving Object)",
    dcs: [
      1, 2, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 27, 31, 39, 40,
    ],
  },
  {
    id: 3,
    problem: "Fall from Elevation to Lower Level",
    dcs: [3, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 27, 33, 36, 40],
  },
  {
    id: 4,
    problem: "Fall on Same Level (Slip and Fall, Trip Over)",
    dcs: [4, 9, 11, 13, 14, 15, 16, 17, 19, 23, 26, 27, 31, 33],
  },
  {
    id: 5,
    problem: "Caught In (Pinch and Nip Points)",
    dcs: [5, 6, 11, 15, 16, 17, 19, 21, 22, 23, 34],
  },
  {
    id: 6,
    problem: "Caught On (Snagged, Hung)",
    dcs: [4, 5, 6, 9, 10, 11, 12, 15, 16, 17, 18, 21, 23, 35],
  },
  {
    id: 7,
    problem: "Caught Between or Under (Crushed or Amputated)",
    dcs: [
      2, 3, 5, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19, 20, 21, 24, 25, 34, 36, 37,
    ],
  },
  {
    id: 8,
    problem:
      "Contact With (Electricity, Heat, Cold, Radiation, Caustics, Toxics, Biological, Noise)",
    dcs: [
      2, 3, 5, 6, 7, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
      25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 40,
    ],
  },
  {
    id: 9,
    problem: "Abnormal Operation",
    dcs: [
      1, 2, 3, 6, 9, 11, 12, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 27, 31, 33,
      34, 35, 36, 37, 38,
    ],
  },
  {
    id: 10,
    problem: "Product Contamination",
    dcs: [
      1, 2, 3, 5, 6, 9, 11, 12, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 27, 31,
      34, 35, 36, 37, 38,
    ],
  },
  {
    id: 11,
    problem: "Overstress, Overpressure, Overexertion, Ergonomic",
    dcs: [
      3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 24, 25, 35, 37,
      40,
    ],
  },
  {
    id: 12,
    problem: "Equipment Failure",
    dcs: [1, 4, 6, 8, 16, 18, 23, 25, 30, 32, 33, 34, 35, 37, 38, 40],
  },
  {
    id: 13,
    problem: "Environmental Release",
    dcs: [
      1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 17, 18, 19, 20, 23, 25, 26, 30, 32, 33,
      34, 35, 36, 38,
    ],
  },
];

export const directCauses = [
  {
    id: 1,
    cause: "Operating Equipment Without Authority",
    rcs: [2, 4, 5, 7, 8, 9, 13, 14, 16],
    category: "substandard acts",
  },
  {
    id: 2,
    cause: "Failure to Warn",
    rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 15, 16],
    category: "substandard acts",
  },
  {
    id: 3,
    cause: "Failure to Secure",
    rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14],
    category: "substandard acts",
  },
  {
    id: 4,
    cause: "Operating at Improper Speed",
    rcs: [2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14],
    category: "substandard acts",
  },
  {
    id: 5,
    cause: "Making Safety Devices Inoperative",
    rcs: [2, 4, 5, 6, 7, 8, 9, 10],
    category: "substandard acts",
  },
  {
    id: 6,
    cause: "Using Defective Equipment",
    rcs: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    category: "substandard acts",
  },
  {
    id: 7,
    cause: "Failing to Use PPE Properly",
    rcs: [1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16],
    category: "substandard acts",
  },
  {
    id: 8,
    cause: "Improper Loading",
    rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    category: "substandard acts",
  },
  {
    id: 9,
    cause: "Improper Placement",
    rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14],
    category: "substandard acts",
  },
  {
    id: 10,
    cause: "Improper Lifting",
    rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14],
    category: "substandard acts",
  },
  {
    id: 11,
    cause: "Improper Position for Task",
    rcs: [1, 2, 3, 4, 5, 6, 7, 9, 10, 13, 14, 16],
    category: "substandard acts",
  },
  {
    id: 12,
    cause: "Servicing Equipment in Operation",
    rcs: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16],
    category: "substandard acts",
  },
  {
    id: 13,
    cause: "Horseplay",
    rcs: [2, 3, 4, 5, 7, 8, 9, 14],
    category: "substandard acts",
  },
  {
    id: 14,
    cause: "Under Influence of Alcohol and/or Other Drugs",
    rcs: [1, 2, 3, 4, 5, 7, 8, 9, 14],
    category: "substandard acts",
  },
  {
    id: 15,
    cause: "Using Equipment Improperly",
    rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16],
    category: "substandard acts",
  },
  {
    id: 16,
    cause: "Failure to Follow Procedure/Policy/Practice",
    rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 16],
    category: "substandard acts",
  },
  {
    id: 17,
    cause: "Failure to Identify Hazard/Risk",
    rcs: [3, 4, 5, 6, 7, 9, 14],
    category: "substandard acts",
  },
  {
    id: 18,
    cause: "Failure to Check/Monitor",
    rcs: [2, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 15, 16],
    category: "substandard acts",
  },
  {
    id: 19,
    cause: "Failure to React/Correct",
    rcs: [1, 2, 3, 4, 5, 6, 7, 9, 13, 14, 16],
    category: "substandard acts",
  },
  {
    id: 20,
    cause: "Failure to Communicate/Coordinate",
    rcs: [3, 4, 5, 7, 9, 10, 16],
    category: "substandard acts",
  },
  {
    id: 21,
    cause: "Inadequate Guards or Barriers",
    rcs: [5, 9, 10, 11, 12, 13, 15],
    category: "substandard conditions",
  },
  {
    id: 22,
    cause: "Inadequate or Improper Protective Equipment",
    rcs: [5, 7, 8, 9, 10, 11, 12, 13, 15],
    category: "substandard conditions",
  },
  {
    id: 23,
    cause: "Defective Tools, Equipment or Materials",
    rcs: [8, 9, 10, 11, 12, 13, 15],
    category: "substandard conditions",
  },
  {
    id: 24,
    cause: "Congestion or Restricted Action",
    rcs: [9, 10, 11, 14],
    category: "substandard conditions",
  },
  {
    id: 25,
    cause: "Inadequate Warning System",
    rcs: [8, 9, 10, 11, 12, 13, 15, 16],
    category: "substandard conditions",
  },
  {
    id: 26,
    cause: "Fire & Explosion Hazards",
    rcs: [5, 6, 7, 8, 9, 10, 11, 12, 13, 15],
    category: "substandard conditions",
  },
  {
    id: 27,
    cause: "Poor Housekeeping/Disorder",
    rcs: [7, 8, 9, 10, 12, 14, 16],
    category: "substandard conditions",
  },
  {
    id: 28,
    cause: "Noise Exposure",
    rcs: [5, 7, 8, 9, 10, 11, 12, 13, 14, 16],
    category: "substandard conditions",
  },
  {
    id: 29,
    cause: "Radiation Exposure",
    rcs: [5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    category: "substandard conditions",
  },
  {
    id: 30,
    cause: "Temperature Extremes",
    rcs: [5, 7, 9, 10, 14],
    category: "substandard conditions",
  },
  {
    id: 31,
    cause: "Inadequate or Excess Illumination",
    rcs: [5, 7, 9, 10, 11, 12, 13, 15],
    category: "substandard conditions",
  },
  {
    id: 32,
    cause: "Inadequate Ventilation",
    rcs: [5, 7, 9, 10, 12, 13, 15],
    category: "substandard conditions",
  },
  {
    id: 33,
    cause: "Presence of Harmful Materials",
    rcs: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    category: "substandard conditions",
  },
  {
    id: 34,
    cause: "Inadequate Instructions/Procedures",
    rcs: [5, 6, 7, 9, 10, 14, 16],
    category: "substandard conditions",
  },
  {
    id: 35,
    cause: "Inadequate Information/Data",
    rcs: [5, 6, 9, 10, 11, 12, 16],
    category: "substandard conditions",
  },
  {
    id: 36,
    cause: "Inadequate Preparation/Planning",
    rcs: [5, 6, 7, 9, 14, 16],
    category: "substandard conditions",
  },
  {
    id: 37,
    cause: "Inadequate Support/Assistance",
    rcs: [7, 9, 11, 12, 16],
    category: "substandard conditions",
  },
  {
    id: 38,
    cause: "Inadequate Communications Hardware/Software/Process",
    rcs: [7, 9, 10, 11, 12, 13, 15, 16],
    category: "substandard conditions",
  },
  {
    id: 39,
    cause: "Road Conditions",
    rcs: [5, 7, 8, 9, 10, 12, 13, 14, 15],
    category: "substandard conditions",
  },
  {
    id: 40,
    cause: "Weather Conditions",
    rcs: [5, 7, 9, 13, 14, 16],
    category: "substandard conditions",
  },
];
export const rootCauses = [
  {
    id: 1,
    cause: "Inadequate Physical/Physiological Capability",
    cas: [4, 6, 11, 12, 13, 15, 18],
    category: "personal factors",
    subCategory: [
      {
        id: 0,
        title: "Inappropriate height, weight, size, strength, reach, etc",
      },
      {
        id: 1,
        title: "Restricted range of body movement",
      },
      {
        id: 2,
        title: "Limited ability to sustain body positions",
      },
      {
        id: 3,
        title: "Substance sensitivities or allergies",
      },
      {
        id: 4,
        title: "Sensitivities to sensory extremes (temperature, sound, etc.)",
      },
      {
        id: 5,
        title: "Vision deficiency",
      },
      {
        id: 6,
        title: "Hearing deficiency",
      },
      {
        id: 7,
        title: "Other sensory deficiency (touch, taste, smell, balance)",
      },
      {
        id: 8,
        title: "Respiratory incapacity",
      },
      {
        id: 9,
        title: "Other permanent physical capabilities",
      },
      {
        id: 10,
        title: "Temporary disabilities",
      },
    ],
  },
  {
    id: 2,
    cause: "Inadequate Mental/Psychological Capability",
    cas: [1, 4, 6, 8, 12, 13, 15, 18, 20],
    category: "personal factors",
    subCategory: [
      {
        id: 0,
        title: "Fears and phobias",
      },
      {
        id: 1,
        title: "Emotional disturbance",
      },
      {
        id: 2,
        title: "Mental illness",
      },
      {
        id: 3,
        title: "Intelligence level",
      },
      {
        id: 4,
        title: "Inability to comprehend",
      },
      {
        id: 5,
        title: "Poor coordination",
      },
      {
        id: 6,
        title: "Slow reaction time",
      },
      {
        id: 7,
        title: "Low mechanical aptitude",
      },
      {
        id: 8,
        title: "Low learning aptitude",
      },
      {
        id: 9,
        title: "Memory failure",
      },
    ],
  },
  {
    id: 3,
    cause: "Physical or Physiological Stress",
    cas: [4, 5, 6, 7, 9, 11, 12, 15, 18, 20, 22],
    category: "personal factors",
    subCategory: [
      {
        id: 0,
        title: "Injury or illness",
      },
      {
        id: 1,
        title: "Fatigue due to task load or duration",
      },
      {
        id: 2,
        title: "Fatigue due to lack of rest",
      },
      {
        id: 3,
        title: "Fatigue due to sensory overload",
      },
      {
        id: 4,
        title: "Exposure to health hazards",
      },
      {
        id: 5,
        title: "Exposure to temperature extremes",
      },
      {
        id: 6,
        title: "Oxygen deficiency",
      },
      {
        id: 7,
        title: "Atmospheric pressure variation",
      },
      {
        id: 8,
        title: "Constrained movement",
      },
      {
        id: 9,
        title: "Blood sugar insufficiency",
      },
      {
        id: 10,
        title: "Drugs",
      },
    ],
  },
  {
    id: 4,
    cause: "Mental or Psychological Stress",
    cas: [1, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20, 21, 22],
    category: "personal factors",
    subCategory: [
      {
        id: 0,
        title: "Emotional overload",
      },
      {
        id: 1,
        title: "Fatigue due to mental task load or speed",
      },
      {
        id: 2,
        title: "Extreme judgment/decision demands",
      },
      {
        id: 3,
        title: "Routine, monotony, demand for uneventful vigilance",
      },
      {
        id: 4,
        title: "Extreme concentration/perception demands",
      },
      {
        id: 5,
        title: "“Meaningless” or “degrading” activities",
      },
      {
        id: 6,
        title: "Confusing directions/demands",
      },
      {
        id: 7,
        title: "Conflicting demands/directions",
      },
      {
        id: 8,
        title: "Preoccupation with problems",
      },
      {
        id: 9,
        title: "Frustration",
      },
      {
        id: 10,
        title: "Mental illness",
      },
    ],
  },
  {
    id: 5,
    cause: "Lack of Knowledge",
    cas: [2, 4, 5, 6, 8, 9, 10, 11, 14, 15, 16, 17, 18, 21, 22],
    category: "personal factors",
    subCategory: [
      {
        id: 0,
        title: "Lack of experience",
      },
      {
        id: 1,
        title: "Inadequate orientation",
      },
      {
        id: 2,
        title: "Inadequate initial training",
      },
      {
        id: 3,
        title: "Inadequate update training",
      },
      {
        id: 4,
        title: "Misunderstood directions",
      },
      {
        id: 5,
        title: "Lack of situational awareness",
      },
    ],
  },
  {
    id: 6,
    cause: "Lack of Skill",
    cas: [2, 4, 6, 7, 9, 10, 13, 15, 16, 18, 21, 22],
    category: "personal factors",
    subCategory: [
      {
        id: 0,
        title: "Inadequate initial instruction",
      },
      {
        id: 1,
        title: "Inadequate practice",
      },
      {
        id: 2,
        title: "Infrequent performance",
      },
      {
        id: 3,
        title: "Lack of coaching",
      },
      {
        id: 4,
        title: "Inadequate review instruction",
      },
    ],
  },
  {
    id: 7,
    cause: "Improper Motivation",
    cas: [1, 2, 4, 5, 6, 8, 10, 11, 13, 15, 16, 17, 20, 21, 22],
    category: "personal factors",
    subCategory: [
      {
        id: 0,
        title: "Improper performance is rewarded (tolerated)",
      },
      {
        id: 1,
        title: "Proper performance is punished",
      },
      {
        id: 2,
        title: "Lack of incentives",
      },
      {
        id: 3,
        title: "Excessive frustration",
      },
      {
        id: 4,
        title: "Inappropriate aggression",
      },
      {
        id: 5,
        title: "Improper attempt to save time or effort",
      },
      {
        id: 6,
        title: "Improper attempt to avoid discomfort",
      },
      {
        id: 7,
        title: "Improper attempt to gain attention",
      },
      {
        id: 8,
        title: "Inadequate discipline",
      },
      {
        id: 9,
        title: "Inappropriate peer pressure",
      },
      {
        id: 10,
        title: "Improper supervisory example",
      },
      {
        id: 11,
        title: "Inadequate performance feedback",
      },
      {
        id: 12,
        title: "Inadequate reinforcement of proper behavior",
      },
      {
        id: 13,
        title: "Improper production incentives",
      },
    ],
  },
  {
    id: 8,
    cause: "Abuse or Misuse",
    cas: [1, 2, 3, 4, 5, 6, 8, 10, 13, 14, 15, 21, 22],
    category: "personal factors",
    subCategory: [
      {
        id: 0,
        title:
          "Improper conduct that is condoned [Intentional / Unintentional]",
      },
      {
        id: 1,
        title:
          "Improper conduct that is not condoned [Intentional / Unintentional]",
      },
    ],
  },
  {
    id: 9,
    cause: "Inadequate Leadership and/or Supervision",
    cas: [1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    category: "job/system factors",
    subCategory: [
      {
        id: 0,
        title: "Unclear or conflicting reporting relationships",
      },
      {
        id: 1,
        title: "Unclear or conflicting assignment of responsibility",
      },
      {
        id: 2,
        title: "Improper or insufficient delegation",
      },
      {
        id: 3,
        title: "Giving inadequate policy, procedure, practices or guidelines",
      },
      {
        id: 4,
        title: "Giving objectives, goals or standards that conflict",
      },
      {
        id: 5,
        title: "Inadequate work planning or programming",
      },
      {
        id: 6,
        title: "Inadequate instructions, orientation and/or training",
      },
      {
        id: 7,
        title:
          "Providing inadequate reference documents, directives and guidance publications",
      },
      {
        id: 8,
        title: "Inadequate identification and evaluation of loss exposures",
      },
      {
        id: 9,
        title: "Lack of supervisory/management job knowledge",
      },
      {
        id: 10,
        title:
          "Inadequate matching of individual qualifications and job/task requirements",
      },
      {
        id: 11,
        title: "Inadequate performance measurement and evaluation",
      },
      {
        id: 12,
        title: "Inadequate or incorrect performance feedback",
      },
    ],
  },
  {
    id: 10,
    cause: "Inadequate Engineering",
    cas: [1, 3, 4, 12, 13, 14, 19, 21, 22],
    category: "job/system factors",
    subCategory: [
      {
        id: 0,
        title: "Inadequate assessment of loss exposures",
      },
      {
        id: 1,
        title: "Inadequate consideration of human factors/ergonomics",
      },
      {
        id: 2,
        title: "Inadequate standards, specifications and/or design criteria",
      },
      {
        id: 3,
        title: "Inadequate monitoring of construction",
      },
      {
        id: 4,
        title: "Inadequate assessment of operational readiness",
      },
      {
        id: 5,
        title: "Inadequate or improper controls",
      },
      {
        id: 6,
        title: "Inadequate monitoring of initial operation",
      },
      {
        id: 7,
        title: "Inadequate evaluation of changes",
      },
    ],
  },
  {
    id: 11,
    cause: "Inadequate Purchasing",
    cas: [1, 3, 6, 11, 12, 13, 14, 19, 21, 22],
    category: "job/system factors",
    subCategory: [
      {
        id: 0,
        title: "Inadequate specifications on requisitions",
      },
      {
        id: 1,
        title: "Inadequate research on materials/equipment",
      },
      {
        id: 2,
        title: "Inadequate specifications to vendors",
      },
      {
        id: 3,
        title: "Inadequate mode or route of shipment",
      },
      {
        id: 4,
        title: "Inadequate receiving inspection and acceptance",
      },
      {
        id: 5,
        title: "Inadequate communication of safety and health data",
      },
      {
        id: 6,
        title: "Improper handling of materials",
      },
      {
        id: 7,
        title: "Improper storage of materials",
      },
      {
        id: 8,
        title: "Improper transporting of materials",
      },
      {
        id: 9,
        title: "Inadequate identification of hazardous materials",
      },
      {
        id: 10,
        title: "Improper salvage and/or waste disposal",
      },
      {
        id: 11,
        title: "Inadequate contractor selection",
      },
    ],
  },
  {
    id: 12,
    cause: "Inadequate Maintenance",
    cas: [3, 4, 6, 8, 10, 13, 14, 19, 21, 22],
    category: "job/system factors",
    subCategory: [
      {
        id: 0,
        title:
          "Inadequate preventive [Assessment of needs / Lubrication and servicing / Adjustment/assembly / Cleaning or resurfacing]",
      },
      {
        id: 1,
        title:
          "Inadequate reparative [Communication of needs / Scheduling of work /Examination of units / Part substitution]",
      },
    ],
  },
  {
    id: 13,
    cause: "Inadequate Tools and Equipment",
    cas: [1, 3, 4, 6, 7, 8, 11, 12, 13, 19, 21, 22],
    category: "job/system factors",
    subCategory: [
      {
        id: 0,
        title: "Inadequate assessment of needs and risks",
      },
      {
        id: 1,
        title: "Inadequate human factors/ergonomics considerations",
      },
      {
        id: 2,
        title: "Inadequate standards or specifications",
      },
      {
        id: 3,
        title: "Inadequate availability",
      },
      {
        id: 4,
        title: "Inadequate adjustment/repair/maintenance",
      },
      {
        id: 5,
        title: "Inadequate salvage and reclamation",
      },
      {
        id: 6,
        title: "Inadequate removal and replacement of unsuitable items",
      },
    ],
  },
  {
    id: 14,
    cause: "Inadequate Work Standards",
    cas: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22],
    category: "job/system factors",
    subCategory: [
      {
        id: 0,
        title:
          "Inadequate development of standards [Inventory and evaluation of exposures and needs / Coordination with process design / Employee involvement / Procedures/practices/rules]",
      },
      {
        id: 1,
        title:
          "Inadequate communication of standards [Publication / Distribution / Translation of appropriate languages / Training / Reinforcing with signs, color codes and job aids]",
      },
      {
        id: 2,
        title:
          "Inadequate maintenance of standards [Tracking of work flow / Updating / Monitoring use of procedures/practices/rules]",
      },
      {
        id: 3,
        title: "Inadequate monitoring of compliance",
      },
    ],
  },
  {
    id: 15,
    cause: "Excessive Wear and Tear",
    cas: [3, 4, 6, 9, 11, 12, 13, 14, 19, 21, 22],
    category: "job/system factors",
    subCategory: [
      {
        id: 0,
        title: "Inadequate planning of use",
      },
      {
        id: 1,
        title: "Improper extension of service life",
      },
      {
        id: 2,
        title: "Inadequate inspection and/or monitoring",
      },
      {
        id: 3,
        title: "Improper loading or rate of use",
      },
      {
        id: 4,
        title: "Inadequate maintenance",
      },
      {
        id: 5,
        title: "Use by unqualified or untrained people",
      },
      {
        id: 6,
        title: "Use for wrong purpose",
      },
    ],
  },
  {
    id: 16,
    cause: "Inadequate Communications",
    cas: [1, 2, 4, 5, 6, 7, 9, 10, 12, 14, 15, 16, 17, 19, 21, 22],
    category: "job/system factors",
    subCategory: [
      {
        id: 0,
        title: "Inadequate horizontal communication between peers",
      },
      {
        id: 1,
        title:
          "Inadequate vertical communication between supervisor and person",
      },
      {
        id: 2,
        title: "Inadequate communication between different organizations",
      },
      {
        id: 3,
        title: "Inadequate communication between work groups",
      },
      {
        id: 4,
        title: "Inadequate communication between shifts",
      },
      {
        id: 5,
        title: "Inadequate communication methods",
      },
      {
        id: 6,
        title: "No communication method available",
      },
      {
        id: 7,
        title: "Incorrect instructions",
      },
      {
        id: 8,
        title: "Inadequate communication due to job turnover",
      },
      {
        id: 9,
        title:
          "Inadequate communication of safety and health data, regulations or guidelines",
      },
      {
        id: 10,
        title: "Standard terminology not used",
      },
      {
        id: 11,
        title: "Verification/repeat feedback techniques not used",
      },
      {
        id: 12,
        title: "Messages too long",
      },
      {
        id: 13,
        title: "Speech interference",
      },
    ],
  },
];
export const correctiveActionsArr = [
  {
    id: 1,
    title: "LEADERSHIP AND ADMINISTRATION",
    subCategory: [
      {
        id: 0,
        title: "General policy statement",
      },
      {
        id: 1,
        title: "Loss control coordinator qualifications",
      },
      {
        id: 2,
        title:
          "Senior and middle management participation in loss control activities",
      },
      {
        id: 3,
        title: "Loss control performance standards for all personnel",
      },
      {
        id: 4,
        title: "Loss control reference manual",
      },
      {
        id: 5,
        title: "Annual loss control objectives established",
      },
      {
        id: 6,
        title: "Joint safety and health committees and/or representatives",
      },
      {
        id: 7,
        title: "Policy on refusal to work due to hazards",
      },
      {
        id: 8,
        title: "Applicable regulations, codes and standards identified",
      },
      {
        id: 9,
        title: "Communication with external parties",
      },
    ],
  },
  {
    id: 2,
    title: "LEADERSHIP TRAINING",
    subCategory: [
      {
        id: 0,
        title: "Training needs analysis",
      },
      {
        id: 1,
        title: "Loss control orientation/induction for new leaders/managers",
      },
      {
        id: 2,
        title: "Initial training of senior management",
      },
      {
        id: 3,
        title: "Update training of senior management",
      },
      {
        id: 4,
        title: "Initial loss control training for leaders/managers",
      },
      {
        id: 5,
        title: "Update loss control training for leaders/managers",
      },
      {
        id: 6,
        title: "Formal training of loss control coordinator",
      },
    ],
  },
  {
    id: 3,
    title: "PLANNED INSPECTIONS AND MAINTENANCE",
    subCategory: [
      {
        id: 0,
        title: "Planned general inspections",
      },
      {
        id: 1,
        title: "Follow-up system",
      },
      {
        id: 2,
        title: "Critical parts/items inspection",
      },
      {
        id: 3,
        title: "Preventive maintenance system",
      },
      {
        id: 4,
        title: "Special systems inspections",
      },
      {
        id: 5,
        title: "Pre-use equipment inspections",
      },
      {
        id: 6,
        title:
          "System for employees to report substandard conditions in writing",
      },
      {
        id: 7,
        title: "Compliance with regulatory requirements for inZspections",
      },
    ],
  },
  {
    id: 4,
    title: "CRITICAL TASK ANALYSIS AND PROCEDURES",
    subCategory: [
      {
        id: 0,
        title: "Task analysis system established",
      },
      {
        id: 1,
        title: "Critical tasks identified",
      },
      {
        id: 2,
        title: "Controls developed for potential losses",
      },
      {
        id: 3,
        title: "Controls incorporated into procedures and practices",
      },
      {
        id: 4,
        title: "Critical task procedures/practices updated",
      },
    ],
  },
  {
    id: 5,
    title: "INCIDENT INVESTIGATION",
    subCategory: [
      {
        id: 0,
        title: "Incident investigation system",
      },
      {
        id: 1,
        title: "Operating management participation",
      },
      {
        id: 2,
        title: "Review of major and high-potential accidents/incidents",
      },
      {
        id: 3,
        title: "Remedial action and follow-up",
      },
      {
        id: 4,
        title: "Near-miss reporting and investigation",
      },
    ],
  },
  {
    id: 6,
    title: "TASK OBSERVATION",
    subCategory: [
      {
        id: 0,
        title: "System for partial/spot task observations",
      },
      {
        id: 1,
        title: "System for complete task observations",
      },
      {
        id: 2,
        title: "Critical task observations performed",
      },
      {
        id: 3,
        title: "Follow-up system",
      },
    ],
  },
  {
    id: 7,
    title: "EMERGENCY PREPAREDNESS",
    subCategory: [
      {
        id: 0,
        title: "System for partial/spot task observations",
      },
      {
        id: 1,
        title: "Identification of potential emergencies",
      },
      {
        id: 2,
        title: "Emergency plan",
      },
      {
        id: 3,
        title: "Off-site emergencies",
      },
      {
        id: 4,
        title: "Sources of energy controls",
      },
      {
        id: 5,
        title: "Protective and rescue systems",
      },
      {
        id: 6,
        title: "Emergency teams",
      },
      {
        id: 7,
        title: "Lessons learned system",
      },
      {
        id: 8,
        title: "First aid",
      },
      {
        id: 9,
        title: "Organized outside help and mutual aid",
      },
      {
        id: 10,
        title: "Post-event planning",
      },
      {
        id: 11,
        title: "Emergency communication",
      },
      {
        id: 12,
        title: "Communications with the community",
      },
    ],
  },
  {
    id: 8,
    title: "RULES AND WORK PERMITS",
    subCategory: [
      {
        id: 0,
        title: "General loss control rules",
      },
      {
        id: 1,
        title: "Specialized work rules",
      },
      {
        id: 2,
        title: "Specialized work permit systems",
      },
      {
        id: 3,
        title: "Regulatory permit-to-operate systems",
      },
      {
        id: 4,
        title: "Rule education and review",
      },
      {
        id: 5,
        title: "Rule education and review",
      },
      {
        id: 6,
        title: "Use of educational signs and color codes",
      },
    ],
  },
  {
    id: 9,
    title: "INCIDENT ANALYSIS",
    subCategory: [
      {
        id: 0,
        title: "Consequence measurements",
      },
      {
        id: 1,
        title: "Cause and control analysis",
      },
      {
        id: 2,
        title: "Property damage/process loss identification and analysis",
      },
      {
        id: 3,
        title: "Near-miss analysis",
      },
      {
        id: 4,
        title: "Problem-solving project teams",
      },
    ],
  },
  {
    id: 10,
    title: "KNOWLEDGE AND SKILL TRAINING",
    subCategory: [
      {
        id: 0,
        title: "Training needs analysis",
      },
      {
        id: 1,
        title: "Instructor qualifications",
      },
      {
        id: 2,
        title: "Training systems",
      },
      {
        id: 3,
        title: "Training system evaluation and follow-up",
      },
    ],
  },
  {
    id: 11,
    title: "PERSONAL PROTECTIVE EQUIPMENT",
    subCategory: [
      {
        id: 0,
        title: "Identification of personal protective equipment needs",
      },
      {
        id: 1,
        title: "Personal protective equipment available",
      },
      {
        id: 2,
        title: "Enforcement of standards",
      },
    ],
  },
  {
    id: 12,
    title: "HEALTH AND HYGIENE CONTROL",
    subCategory: [
      {
        id: 0,
        title: "Health hazard identification and evaluation",
      },
      {
        id: 1,
        title: "Health hazard control",
      },
      {
        id: 2,
        title: "Occupational health and industrial hygiene monitoring",
      },
      {
        id: 3,
        title: "Information and training",
      },
      {
        id: 4,
        title: "Healthcare system",
      },
      {
        id: 5,
        title: "Ergonomic program",
      },
      {
        id: 6,
        title: "Professional assistance",
      },
      {
        id: 7,
        title: "Internal communications",
      },
    ],
  },
  {
    id: 13,
    title: "HEALTH AND HYGIENE CONTROL",
    subCategory: [
      {
        id: 0,
        title: "Assessment of loss control requirements",
      },
      {
        id: 1,
        title: "Regular loss control system monitoring",
      },
      {
        id: 2,
        title: "Evaluation of compliance with loss control system standards",
      },
      {
        id: 3,
        title: "Employee perception surveys",
      },
    ],
  },
  {
    id: 14,
    title: "ENGINEERING AND CHANGE MANAGEMENT",
    subCategory: [
      {
        id: 0,
        title: "Hazard identification and risk assessment",
      },
      {
        id: 1,
        title: "Project review and change manageme",
      },
      {
        id: 2,
        title: "Operational and work process change management",
      },
    ],
  },
  {
    id: 15,
    title: "PERSONAL COMMUNICATIONS",
    subCategory: [
      {
        id: 0,
        title: "Training in personal communication techniques",
      },
      {
        id: 1,
        title: "Individual job orientation/induction",
      },
      {
        id: 2,
        title: "Task instruction",
      },
      {
        id: 3,
        title: "Planned personal contacts",
      },
    ],
  },
  {
    id: 16,
    title: "GROUP COMMUNICATIONS",
    subCategory: [
      {
        id: 0,
        title: "Quantity and quality of group loss control meetings",
      },
      {
        id: 1,
        title: "Management involvement",
      },
    ],
  },
  {
    id: 17,
    title: "GENERAL PROMOTION",
    subCategory: [
      {
        id: 0,
        title: "Loss control bulletin boards",
      },
      {
        id: 1,
        title: "Use of incident statistics",
      },
      {
        id: 2,
        title: "Critical topic promotion",
      },
      {
        id: 3,
        title: "Individual awards and recognition",
      },
      {
        id: 4,
        title: "Loss control information publications",
      },
      {
        id: 5,
        title: "Group awards and recognition",
      },
      {
        id: 6,
        title: "Housekeeping promotion systems",
      },
      {
        id: 7,
        title: "Communications with the public about loss contro",
      },
    ],
  },
  {
    id: 18,
    title: "HIRING AND PLACEMENT",
    subCategory: [
      {
        id: 0,
        title: "Job capability requirements established",
      },
      {
        id: 1,
        title: "Medical examination",
      },
      {
        id: 2,
        title: "General orientation/induction",
      },
      {
        id: 3,
        title: "Pre-employment/pre-placement qualification checks",
      },
    ],
  },
  {
    id: 19,
    title: "MATERIALS AND SERVICES MANAGEMENT",
    subCategory: [
      {
        id: 0,
        title: "Procurement of goods",
      },
      {
        id: 1,
        title: "Contractor selection",
      },
      {
        id: 2,
        title: "Management of contractors",
      },
    ],
  },
  {
    id: 20,
    title: "OFF-THE-JOB SAFETY",
    subCategory: [
      {
        id: 0,
        title: "Problem identification and analysis",
      },
      {
        id: 1,
        title: "Off-the-job safety education",
      },
    ],
  },
  {
    id: 21,
    title: "ENVIRONMENTAL MANAGEMENT",
    subCategory: [],
  },
  {
    id: 22,
    title: "QUALITY MANAGEMENT",
    subCategory: [],
  },
];

const data = {
  events: eventsArr,
  directCauses: directCauses,
  rootCauses: rootCauses,
  correctiveActions: correctiveActionsArr,
};
export default data;

// getDirectCauses
export const getDirectCauses = (searchQuery) => {
  // if array search for array of ids
  if (Array.isArray(searchQuery)) {
    return data.directCauses.filter((item) => searchQuery.includes(item.id));
  }
  // if string search for string
  return data.directCauses.filter((item) => item.id === searchQuery);
};

// getRootCauses
export const getRootCauses = (searchQuery) => {
  // if array search for array of ids
  if (Array.isArray(searchQuery)) {
    return data.rootCauses.filter((item) => searchQuery.includes(item.id));
  }
  // if string search for string
  return data.rootCauses.filter((item) => item.id === searchQuery);
};

// getCorrectiveActions
export const getCorrectiveActions = (searchQuery) => {
  // if array search for array of ids
  if (Array.isArray(searchQuery)) {
    return data.correctiveActions.filter((item) =>
      searchQuery.includes(item.id)
    );
  }
  // if string search for string
  return data.correctiveActions.filter((item) => item.id === searchQuery);
};

/*
  {
    1: {
      id: 1,
      title: "srring",
      category: "string",
      rcs: [numbers],
      causes: [{
        id: 1,
        cause: "string",
        rcs: [numbers],
      }],
    }
  }
*/
export const directCausesCategoried = {
  1: {
    id: 1,
    title: "Substandard Acts",
    category: "substandard acts",
    rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    causes: [
      {
        id: 1,
        cause: "Operating Equipment Without Authority",
        rcs: [2, 4, 5, 7, 8, 9, 13, 14, 16],
      },
      {
        id: 2,
        cause: "Failure to Warn",
        rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 15, 16],
      },
      {
        id: 3,
        cause: "Failure to Secure",
        rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14],
      },
      {
        id: 4,
        cause: "Operating at Improper Speed",
        rcs: [2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14],
      },
      {
        id: 5,
        cause: "Making Safety Devices Inoperative",
        rcs: [2, 4, 5, 6, 7, 8, 9, 10],
      },
      {
        id: 6,
        cause: "Using Defective Equipment",
        rcs: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      },
      {
        id: 7,
        cause: "Failing to Use PPE Properly",
        rcs: [1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16],
      },
      {
        id: 8,
        cause: "Improper Loading",
        rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      },
      {
        id: 9,
        cause: "Improper Placement",
        rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14],
      },
      {
        id: 10,
        cause: "Improper Lifting",
        rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14],
      },
      {
        id: 11,
        cause: "Improper Position for Task",
        rcs: [1, 2, 3, 4, 5, 6, 7, 9, 10, 13, 14, 16],
      },
      {
        id: 12,
        cause: "Servicing Equipment in Operation",
        rcs: [3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16],
      },
      {
        id: 13,
        cause: "Horseplay",
        rcs: [2, 3, 4, 5, 7, 8, 9, 14],
      },
      {
        id: 14,
        cause: "Under Influence of Alcohol and/or Other Drugs",
        rcs: [1, 2, 3, 4, 5, 7, 8, 9, 14],
      },
      {
        id: 15,
        cause: "Using Equipment Improperly",
        rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16],
      },
      {
        id: 16,
        cause: "Failure to Follow Procedure/Policy/Practice",
        rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 16],
      },
      {
        id: 17,
        cause: "Failure to Identify Hazard/Risk",
        rcs: [3, 4, 5, 6, 7, 9, 14],
      },
      {
        id: 18,
        cause: "Failure to Check/Monitor",
        rcs: [2, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 15, 16],
      },
      {
        id: 19,
        cause: "Failure to React/Correct",
        rcs: [1, 2, 3, 4, 5, 6, 7, 9, 13, 14, 16],
      },
      {
        id: 20,
        cause: "Failure to Communicate/Coordinate",
        rcs: [3, 4, 5, 7, 9, 10, 16],
      },
    ],
  },
  2: {
    id: 2,
    title: "Substandard Conditions",
    category: "substandard conditions",
    rcs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    causes: [
      {
        id: 21,
        cause: "Inadequate Guards or Barriers",
        rcs: [5, 9, 10, 11, 12, 13, 15],
      },
      {
        id: 22,
        cause: "Inadequate or Improper Protective Equipment",
        rcs: [5, 7, 8, 9, 10, 11, 12, 13, 15],
      },
      {
        id: 23,
        cause: "Defective Tools, Equipment or Materials",
        rcs: [8, 9, 10, 11, 12, 13, 15],
      },
      {
        id: 24,
        cause: "Congestion or Restricted Action",
        rcs: [9, 10, 11, 14],
      },
      {
        id: 25,
        cause: "Inadequate Warning System",
        rcs: [8, 9, 10, 11, 12, 13, 15, 16],
      },
      {
        id: 26,
        cause: "Fire & Explosion Hazards",
        rcs: [5, 6, 7, 8, 9, 10, 11, 12, 13, 15],
      },
      {
        id: 27,
        cause: "Poor Housekeeping/Disorder",
        rcs: [7, 8, 9, 10, 12, 14, 16],
      },
      {
        id: 28,
        cause: "Noise Exposure",
        rcs: [5, 7, 8, 9, 10, 11, 12, 13, 14, 16],
      },
      {
        id: 29,
        cause: "Radiation Exposure",
        rcs: [5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      },
      {
        id: 30,
        cause: "Temperature Extremes",
        rcs: [5, 7, 9, 10, 14],
      },
      {
        id: 31,
        cause: "Inadequate or Excess Illumination",
        rcs: [5, 7, 9, 10, 11, 12, 13, 15],
      },
      {
        id: 32,
        cause: "Inadequate Ventilation",
        rcs: [5, 7, 9, 10, 12, 13, 15],
      },
      {
        id: 33,
        cause: "Presence of Harmful Materials",
        rcs: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      },
      {
        id: 34,
        cause: "Inadequate Instructions/Procedures",
        rcs: [5, 6, 7, 9, 10, 14, 16],
      },
      {
        id: 35,
        cause: "Inadequate Information/Data",
        rcs: [5, 6, 9, 10, 11, 12, 16],
      },
      {
        id: 36,
        cause: "Inadequate Preparation/Planning",
        rcs: [5, 6, 7, 9, 14, 16],
      },
      {
        id: 37,
        cause: "Inadequate Support/Assistance",
        rcs: [7, 9, 11, 12, 16],
      },
      {
        id: 38,
        cause: "Inadequate Communications Hardware/Software/Process",
        rcs: [7, 9, 10, 11, 12, 13, 15, 16],
      },
      {
        id: 39,
        cause: "Road Conditions",
        rcs: [5, 7, 8, 9, 10, 12, 13, 14, 15],
      },
      {
        id: 40,
        cause: "Weather Conditions",
        rcs: [5, 7, 9, 13, 14, 16],
      },
    ],
  },
};

export const rootCausesCategoried = {
  1: {
    id: 1,
    title: "PERSONAL FACTORS",
    category: "personal factors",
    causes: [
      {
        id: 1,
        cause: "Inadequate Physical/Physiological Capability",
        cas: [4, 6, 11, 12, 13, 15, 18],
        subCategory: [
          {
            id: 0,
            title: "Inappropriate height, weight, size, strength, reach, etc",
          },
          {
            id: 1,
            title: "Restricted range of body movement",
          },
          {
            id: 2,
            title: "Limited ability to sustain body positions",
          },
          {
            id: 3,
            title: "Substance sensitivities or allergies",
          },
          {
            id: 4,
            title:
              "Sensitivities to sensory extremes (temperature, sound, etc.)",
          },
          {
            id: 5,
            title: "Vision deficiency",
          },
          {
            id: 6,
            title: "Hearing deficiency",
          },
          {
            id: 7,
            title: "Other sensory deficiency (touch, taste, smell, balance)",
          },
          {
            id: 8,
            title: "Respiratory incapacity",
          },
          {
            id: 9,
            title: "Other permanent physical capabilities",
          },
          {
            id: 10,
            title: "Temporary disabilities",
          },
        ],
      },
      {
        id: 2,
        cause: "Inadequate Mental/Psychological Capability",
        cas: [1, 4, 6, 8, 12, 13, 15, 18, 20],

        subCategory: [
          {
            id: 0,
            title: "Fears and phobias",
          },
          {
            id: 1,
            title: "Emotional disturbance",
          },
          {
            id: 2,
            title: "Mental illness",
          },
          {
            id: 3,
            title: "Intelligence level",
          },
          {
            id: 4,
            title: "Inability to comprehend",
          },
          {
            id: 5,
            title: "Poor coordination",
          },
          {
            id: 6,
            title: "Slow reaction time",
          },
          {
            id: 7,
            title: "Low mechanical aptitude",
          },
          {
            id: 8,
            title: "Low learning aptitude",
          },
          {
            id: 9,
            title: "Memory failure",
          },
        ],
      },
      {
        id: 3,
        cause: "Physical or Physiological Stress",
        cas: [4, 5, 6, 7, 9, 11, 12, 15, 18, 20, 22],

        subCategory: [
          {
            id: 0,
            title: "Injury or illness",
          },
          {
            id: 1,
            title: "Fatigue due to task load or duration",
          },
          {
            id: 2,
            title: "Fatigue due to lack of rest",
          },
          {
            id: 3,
            title: "Fatigue due to sensory overload",
          },
          {
            id: 4,
            title: "Exposure to health hazards",
          },
          {
            id: 5,
            title: "Exposure to temperature extremes",
          },
          {
            id: 6,
            title: "Oxygen deficiency",
          },
          {
            id: 7,
            title: "Atmospheric pressure variation",
          },
          {
            id: 8,
            title: "Constrained movement",
          },
          {
            id: 9,
            title: "Blood sugar insufficiency",
          },
          {
            id: 10,
            title: "Drugs",
          },
        ],
      },
      {
        id: 4,
        cause: "Mental or Psychological Stress",
        cas: [1, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 20, 21, 22],

        subCategory: [
          {
            id: 0,
            title: "Emotional overload",
          },
          {
            id: 1,
            title: "Fatigue due to mental task load or speed",
          },
          {
            id: 2,
            title: "Extreme judgment/decision demands",
          },
          {
            id: 3,
            title: "Routine, monotony, demand for uneventful vigilance",
          },
          {
            id: 4,
            title: "Extreme concentration/perception demands",
          },
          {
            id: 5,
            title: "“Meaningless” or “degrading” activities",
          },
          {
            id: 6,
            title: "Confusing directions/demands",
          },
          {
            id: 7,
            title: "Conflicting demands/directions",
          },
          {
            id: 8,
            title: "Preoccupation with problems",
          },
          {
            id: 9,
            title: "Frustration",
          },
          {
            id: 10,
            title: "Mental illness",
          },
        ],
      },
      {
        id: 5,
        cause: "Lack of Knowledge",
        cas: [2, 4, 5, 6, 8, 9, 10, 11, 14, 15, 16, 17, 18, 21, 22],

        subCategory: [
          {
            id: 0,
            title: "Lack of experience",
          },
          {
            id: 1,
            title: "Inadequate orientation",
          },
          {
            id: 2,
            title: "Inadequate initial training",
          },
          {
            id: 3,
            title: "Inadequate update training",
          },
          {
            id: 4,
            title: "Misunderstood directions",
          },
          {
            id: 5,
            title: "Lack of situational awareness",
          },
        ],
      },
      {
        id: 6,
        cause: "Lack of Skill",
        cas: [2, 4, 6, 7, 9, 10, 13, 15, 16, 18, 21, 22],

        subCategory: [
          {
            id: 0,
            title: "Inadequate initial instruction",
          },
          {
            id: 1,
            title: "Inadequate practice",
          },
          {
            id: 2,
            title: "Infrequent performance",
          },
          {
            id: 3,
            title: "Lack of coaching",
          },
          {
            id: 4,
            title: "Inadequate review instruction",
          },
        ],
      },
      {
        id: 7,
        cause: "Improper Motivation",
        cas: [1, 2, 4, 5, 6, 8, 10, 11, 13, 15, 16, 17, 20, 21, 22],

        subCategory: [
          {
            id: 0,
            title: "Improper performance is rewarded (tolerated)",
          },
          {
            id: 1,
            title: "Proper performance is punished",
          },
          {
            id: 2,
            title: "Lack of incentives",
          },
          {
            id: 3,
            title: "Excessive frustration",
          },
          {
            id: 4,
            title: "Inappropriate aggression",
          },
          {
            id: 5,
            title: "Improper attempt to save time or effort",
          },
          {
            id: 6,
            title: "Improper attempt to avoid discomfort",
          },
          {
            id: 7,
            title: "Improper attempt to gain attention",
          },
          {
            id: 8,
            title: "Inadequate discipline",
          },
          {
            id: 9,
            title: "Inappropriate peer pressure",
          },
          {
            id: 10,
            title: "Improper supervisory example",
          },
          {
            id: 11,
            title: "Inadequate performance feedback",
          },
          {
            id: 12,
            title: "Inadequate reinforcement of proper behavior",
          },
          {
            id: 13,
            title: "Improper production incentives",
          },
        ],
      },
      {
        id: 8,
        cause: "Abuse or Misuse",
        cas: [1, 2, 3, 4, 5, 6, 8, 10, 13, 14, 15, 21, 22],

        subCategory: [
          {
            id: 0,
            title:
              "Improper conduct that is condoned [Intentional / Unintentional]",
          },
          {
            id: 1,
            title:
              "Improper conduct that is not condoned [Intentional / Unintentional]",
          },
        ],
      },
    ],
  },
  2: {
    id: 2,
    title: "JOB/SYSTEM FACTORS",
    category: "job/system factors",
    causes: [
      {
        id: 9,
        cause: "Inadequate Leadership and/or Supervision",
        cas: [
          1, 2, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
        ],
        subCategory: [
          {
            id: 0,
            title: "Unclear or conflicting reporting relationships",
          },
          {
            id: 1,
            title: "Unclear or conflicting assignment of responsibility",
          },
          {
            id: 2,
            title: "Improper or insufficient delegation",
          },
          {
            id: 3,
            title:
              "Giving inadequate policy, procedure, practices or guidelines",
          },
          {
            id: 4,
            title: "Giving objectives, goals or standards that conflict",
          },
          {
            id: 5,
            title: "Inadequate work planning or programming",
          },
          {
            id: 6,
            title: "Inadequate instructions, orientation and/or training",
          },
          {
            id: 7,
            title:
              "Providing inadequate reference documents, directives and guidance publications",
          },
          {
            id: 8,
            title: "Inadequate identification and evaluation of loss exposures",
          },
          {
            id: 9,
            title: "Lack of supervisory/management job knowledge",
          },
          {
            id: 10,
            title:
              "Inadequate matching of individual qualifications and job/task requirements",
          },
          {
            id: 11,
            title: "Inadequate performance measurement and evaluation",
          },
          {
            id: 12,
            title: "Inadequate or incorrect performance feedback",
          },
        ],
      },
      {
        id: 10,
        cause: "Inadequate Engineering",
        cas: [1, 3, 4, 12, 13, 14, 19, 21, 22],
        subCategory: [
          {
            id: 0,
            title: "Inadequate assessment of loss exposures",
          },
          {
            id: 1,
            title: "Inadequate consideration of human factors/ergonomics",
          },
          {
            id: 2,
            title:
              "Inadequate standards, specifications and/or design criteria",
          },
          {
            id: 3,
            title: "Inadequate monitoring of construction",
          },
          {
            id: 4,
            title: "Inadequate assessment of operational readiness",
          },
          {
            id: 5,
            title: "Inadequate or improper controls",
          },
          {
            id: 6,
            title: "Inadequate monitoring of initial operation",
          },
          {
            id: 7,
            title: "Inadequate evaluation of changes",
          },
        ],
      },
      {
        id: 11,
        cause: "Inadequate Purchasing",
        cas: [1, 3, 6, 11, 12, 13, 14, 19, 21, 22],
        subCategory: [
          {
            id: 0,
            title: "Inadequate specifications on requisitions",
          },
          {
            id: 1,
            title: "Inadequate research on materials/equipment",
          },
          {
            id: 2,
            title: "Inadequate specifications to vendors",
          },
          {
            id: 3,
            title: "Inadequate mode or route of shipment",
          },
          {
            id: 4,
            title: "Inadequate receiving inspection and acceptance",
          },
          {
            id: 5,
            title: "Inadequate communication of safety and health data",
          },
          {
            id: 6,
            title: "Improper handling of materials",
          },
          {
            id: 7,
            title: "Improper storage of materials",
          },
          {
            id: 8,
            title: "Improper transporting of materials",
          },
          {
            id: 9,
            title: "Inadequate identification of hazardous materials",
          },
          {
            id: 10,
            title: "Improper salvage and/or waste disposal",
          },
          {
            id: 11,
            title: "Inadequate contractor selection",
          },
        ],
      },
      {
        id: 12,
        cause: "Inadequate Maintenance",
        cas: [3, 4, 6, 8, 10, 13, 14, 19, 21, 22],
        subCategory: [
          {
            id: 0,
            title:
              "Inadequate preventive [Assessment of needs / Lubrication and servicing / Adjustment/assembly / Cleaning or resurfacing]",
          },
          {
            id: 1,
            title:
              "Inadequate reparative [Communication of needs / Scheduling of work /Examination of units / Part substitution]",
          },
        ],
      },
      {
        id: 13,
        cause: "Inadequate Tools and Equipment",
        cas: [1, 3, 4, 6, 7, 8, 11, 12, 13, 19, 21, 22],
        subCategory: [
          {
            id: 0,
            title: "Inadequate assessment of needs and risks",
          },
          {
            id: 1,
            title: "Inadequate human factors/ergonomics considerations",
          },
          {
            id: 2,
            title: "Inadequate standards or specifications",
          },
          {
            id: 3,
            title: "Inadequate availability",
          },
          {
            id: 4,
            title: "Inadequate adjustment/repair/maintenance",
          },
          {
            id: 5,
            title: "Inadequate salvage and reclamation",
          },
          {
            id: 6,
            title: "Inadequate removal and replacement of unsuitable items",
          },
        ],
      },
      {
        id: 14,
        cause: "Inadequate Work Standards",
        cas: [
          1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22,
        ],
        subCategory: [
          {
            id: 0,
            title:
              "Inadequate development of standards [Inventory and evaluation of exposures and needs / Coordination with process design / Employee involvement / Procedures/practices/rules]",
          },
          {
            id: 1,
            title:
              "Inadequate communication of standards [Publication / Distribution / Translation of appropriate languages / Training / Reinforcing with signs, color codes and job aids]",
          },
          {
            id: 2,
            title:
              "Inadequate maintenance of standards [Tracking of work flow / Updating / Monitoring use of procedures/practices/rules]",
          },
          {
            id: 3,
            title: "Inadequate monitoring of compliance",
          },
        ],
      },
      {
        id: 15,
        cause: "Excessive Wear and Tear",
        cas: [3, 4, 6, 9, 11, 12, 13, 14, 19, 21, 22],
        subCategory: [
          {
            id: 0,
            title: "Inadequate planning of use",
          },
          {
            id: 1,
            title: "Improper extension of service life",
          },
          {
            id: 2,
            title: "Inadequate inspection and/or monitoring",
          },
          {
            id: 3,
            title: "Improper loading or rate of use",
          },
          {
            id: 4,
            title: "Inadequate maintenance",
          },
          {
            id: 5,
            title: "Use by unqualified or untrained people",
          },
          {
            id: 6,
            title: "Use for wrong purpose",
          },
        ],
      },
      {
        id: 16,
        cause: "Inadequate Communications",
        cas: [1, 2, 4, 5, 6, 7, 9, 10, 12, 14, 15, 16, 17, 19, 21, 22],
        subCategory: [
          {
            id: 0,
            title: "Inadequate horizontal communication between peers",
          },
          {
            id: 1,
            title:
              "Inadequate vertical communication between supervisor and person",
          },
          {
            id: 2,
            title: "Inadequate communication between different organizations",
          },
          {
            id: 3,
            title: "Inadequate communication between work groups",
          },
          {
            id: 4,
            title: "Inadequate communication between shifts",
          },
          {
            id: 5,
            title: "Inadequate communication methods",
          },
          {
            id: 6,
            title: "No communication method available",
          },
          {
            id: 7,
            title: "Incorrect instructions",
          },
          {
            id: 8,
            title: "Inadequate communication due to job turnover",
          },
          {
            id: 9,
            title:
              "Inadequate communication of safety and health data, regulations or guidelines",
          },
          {
            id: 10,
            title: "Standard terminology not used",
          },
          {
            id: 11,
            title: "Verification/repeat feedback techniques not used",
          },
          {
            id: 12,
            title: "Messages too long",
          },
          {
            id: 13,
            title: "Speech interference",
          },
        ],
      },
    ],
  },
};
