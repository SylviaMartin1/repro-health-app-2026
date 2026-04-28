import {  average, countItems, getMostCommon, convertNumberBackToLabel} from "./statsHelpers";

// Functions
/**
 * AverageHotFlashQuantity
 */
export const getAverageHotFlashQuantity = (menopausalHealthLogs) => {
  if (!menopausalHealthLogs || menopausalHealthLogs.length === 0) return 0;

  const values = menopausalHealthLogs
    .map(menopausalHealthLog => menopausalHealthLog.hotFlashQuantity)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

/**
 * AverageHotFlashIntensityScore
 */
export const getAverageHotFlashIntensityScore = (menopausalHealthLogs) => {
  if (!menopausalHealthLogs || menopausalHealthLogs.length === 0) return 0;

  const values = menopausalHealthLogs
    .map(menopausalHealthLog => menopausalHealthLog.hotFlashIntensityScore)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

/**
 * AverageNightSweatQuantity
 */
export const getAverageNightSweatQuantity = (menopausalHealthLogs) => {
  if (!menopausalHealthLogs || menopausalHealthLogs.length === 0) return 0;

  const values = menopausalHealthLogs
    .map(menopausalHealthLog => menopausalHealthLog.nightSweatQuantity)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

/**
 * AverageNightSweatIntensityScore
 */
export const getAverageNightSweatIntensityScore = (menopausalHealthLogs) => {
  if (!menopausalHealthLogs || menopausalHealthLogs.length === 0) return 0;

  const values = menopausalHealthLogs
    .map(menopausalHealthLog => menopausalHealthLog.nightSweatScore)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};




/**
 * MostCommonSymptom
 */
export const getMostCommonSymptom = (menopausalHealthLogs) => {
  if (!menopausalHealthLogs || menopausalHealthLogs.length === 0) return null;

  const counts = countItems(menopausalHealthLogs, "symptoms");
  return getMostCommon(counts);
};


/**
 * MostCommonEmotion
 */
export const getMostCommonEmotion = (menopausalHealthLogs) => {
  if (!menopausalHealthLogs || menopausalHealthLogs.length === 0) return null;

  const counts = countItems(menopausalHealthLogs, "emotions");
  return getMostCommon(counts);
};


/**
 * AverageEstrogenLevel
 */
export const getAverageEstrogenLevel = (menopausalHealthLogs) => {
  if (!menopausalHealthLogs || menopausalHealthLogs.length === 0) return 0;

  const values = menopausalHealthLogs
    .map(menopausalHealthLog => menopausalHealthLog.estrogenLevels)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

/**
 * AverageProgesteroneLevel
 */
export const getAverageProgesteroneLevel = (menopausalHealthLogs) => {
  if (!menopausalHealthLogs || menopausalHealthLogs.length === 0) return 0;

  const values = menopausalHealthLogs
    .map(menopausalHealthLog => menopausalHealthLog.progesteroneLevels)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};


/**
 * AverageFSHLevel
 */
export const getAverageFSHLevel = (menopausalHealthLogs) => {
  if (!menopausalHealthLogs || menopausalHealthLogs.length === 0) return 0;

  const values = menopausalHealthLogs
    .map(menopausalHealthLog => menopausalHealthLog.fshLevels)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

