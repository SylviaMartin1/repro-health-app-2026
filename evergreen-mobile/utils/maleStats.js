import {  average, countItems, getMostCommon, convertNumberBackToLabel} from "./statsHelpers";

// Functions
/**
 * AverageSpermVolume
 */
export const getAverageSpermVolume = (maleHealthLogs) => {
  if (!maleHealthLogs || maleHealthLogs.length === 0) return 0;

  const values = maleHealthLogs
    .map(maleHealthLog => maleHealthLog.spermVolume)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

/**
 * AverageSpermConcentration
 */
export const getAverageSpermConcentration = (maleHealthLogs) => {
  if (!maleHealthLogs || maleHealthLogs.length === 0) return 0;

  const values = maleHealthLogs
    .map(maleHealthLog => maleHealthLog.spermConcentration)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

/**
 * AverageSpermVolume
 */
export const getAverageSpermMotility = (maleHealthLogs) => {
  if (!maleHealthLogs || maleHealthLogs.length === 0) return 0;

  const values = maleHealthLogs
    .map(maleHealthLog => maleHealthLog.spermMotility)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

/**
 * AverageSpermVolume
 */
export const getAverageSpermMorphology = (maleHealthLogs) => {
  if (!maleHealthLogs || maleHealthLogs.length === 0) return 0;

  const values = maleHealthLogs
    .map(maleHealthLog => maleHealthLog.spermMorphology)
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




