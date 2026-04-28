import { convertLabel, average, countItems, getMostCommon, convertNumberBackToLabel} from "./statsHelpers";

// Functions
/**
 * AverageFlowLevel
 */
export const getAverageFlowLevel = (cycles) => {
  if (!cycles || cycles.length === 0) return null;

  const values = cycles
    .map(cycle => convertLabel(cycle.flowLevel))
    .filter(v => v !== 0);

  const avg = average(values);

  return convertNumberBackToLabel(avg);
};

/**
 * AveragePainLevel
 */
export const getAveragePainLevel = (cycles) => {
  if (!cycles || cycles.length === 0) return null;

  const values = cycles
    .map(cycle => convertLabel(cycle.painLevel))
    .filter(v => v !== 0);

  const avg = average(values);

  return convertNumberBackToLabel(avg);
};

/**
 * MostCommonSymptom
 */
export const getMostCommonSymptom = (cycles) => {
  if (!cycles || cycles.length === 0) return null;

  const counts = countItems(cycles, "symptoms");
  return getMostCommon(counts);
};


/**
 * MostCommonEmotion
 */
export const getMostCommonEmotion = (cycles) => {
  if (!cycles || cycles.length === 0) return null;

  const counts = countItems(cycles, "emotions");
  return getMostCommon(counts);
};


/**
 * getNextPeriod()
 */
export const getNextPeriod = (cycles) => {
  if (!cycles || cycles.length === 0) return null;

  const lastCycle = cycles[cycles.length - 1];

  const startDate = new Date(lastCycle.startDate);

  startDate.setDate(startDate.getDate() + 28);

  return startDate;
};

/**
 * getFertileWindowStartDate
 */
export const getFertileWindowStartDate = (cycles) => {
  if (!cycles || cycles.length === 0) return null;

  const lastCycle = cycles[cycles.length - 1];

  const startDate = new Date(lastCycle.startDate);

  startDate.setDate(startDate.getDate() + 28);
  startDate.setDate(startDate.getDate() - 18);

  return startDate;
};

/**
 * getOvulationDate
 */
export const getOvulationDate = (cycles) => {
  if (!cycles || cycles.length === 0) return null;

  const lastCycle = cycles[cycles.length - 1];

  const startDate = new Date(lastCycle.startDate);

  startDate.setDate(startDate.getDate() + 28);
  startDate.setDate(startDate.getDate() - 14);

  return startDate;
};


/**
 * getFertileWindowEndDate
 */
export const getFertileWindowEndDate = (cycles) => {
  if (!cycles || cycles.length === 0) return null;

  const lastCycle = cycles[cycles.length - 1];

  const startDate = new Date(lastCycle.startDate);

  startDate.setDate(startDate.getDate() + 28);
  startDate.setDate(startDate.getDate() - 10);

  return startDate;
};











