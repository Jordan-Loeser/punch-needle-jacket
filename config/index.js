import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "Jordan",
  version,
  design: "Jordan-Loeser",
  code: "Jordan-Loeser",
  department: "menswear",
  type: "pattern",
  difficulty: 3,
  tags: ["top", "jacket"],
  optionGroups: {
    fit: [
      "chestEase",
      "collarEase",
      "bicepsEase",
      "cuffEase",
      "shoulderEase",
      "lengthBonus",
      "sleeveLengthBonus",
      "sleeveBend",
    ],
    advanced: [
      "acrossBackFactor",
      "armholeDepthFactor",
      "backNeckCutout",
      "frontArmholeDeeper",
      "shoulderSlopeReduction",
      "sleevecapHeight",
      "sleevecapEase",
    ],
  },
  measurements: [
    "biceps",
    "chest",
    "hpsToWaistBack",
    "waistToHips",
    "neck",
    "shoulderSlope",
    "shoulderToElbow",
    "shoulderToShoulder",
    "shoulderToWrist",
    "wrist",
  ],
  dependencies: {
    bentBack: "bentBase",
    bentFront: "bentBack",
    bentTopSleeve: "bentSleeve",
    bentUnderSleeve: "bentSleeve",
  },
  inject: {
    bentBack: "bentBase",
    bentFront: "bentBack",
    bentTopSleeve: "bentSleeve",
    bentUnderSleeve: "bentSleeve",
  },
  hide: ["bentBase", "bentSleeve"],
  options: {
    // Constants
    brianFitSleeve: true,
    brianFitCollar: true,
    collarFactor: 4.8,

    // Options inherited from Bent
    acrossBackFactor: { pct: 97, min: 93, max: 100 },
    armholeDepthFactor: { pct: 60, min: 50, max: 70 },
    backNeckCutout: { pct: 5, min: 2, max: 8 },
    bicepsEase: { pct: 20, min: 10, max: 40 },
    chestEase: { pct: 8, min: -4, max: 20 },
    collarEase: { pct: 3.5, min: 0, max: 10 },
    cuffEase: { pct: 40, min: 2, max: 100 },
    frontArmholeDeeper: { pct: 0.5, min: 0, max: 1.5 },
    lengthBonus: { pct: 0, min: -4, max: 60 },
    shoulderEase: { pct: 0, min: -2, max: 6 },
    shoulderSlopeReduction: { pct: 0, min: 0, max: 80 },

    sleeveBend: { deg: 10, min: 0, max: 20 },
    sleevecapHeight: { pct: 45, min: 40, max: 60 },
    sleevecapEase: { pct: 1, min: 0, max: 10 },
    sleeveLengthBonus: { pct: 0, min: -20, max: 15 },
  },
};
