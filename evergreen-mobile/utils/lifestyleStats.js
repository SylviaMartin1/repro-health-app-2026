import { average } from "./statsHelpers";

// Functions
/**
 * AverageSleepHours
 */
export const getAverageSleepHours = (lifeStyleLogs) => {
  if (!lifeStyleLogs || lifeStyleLogs.length === 0) return 0;

  const values = lifeStyleLogs
    .map(lifeStyleLog => lifeStyleLog.sleepHours)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

/**
 * AverageExerciseMins
 */
export const getAverageExerciseMins = (lifeStyleLogs) => {
  if (!lifeStyleLogs || lifeStyleLogs.length === 0) return 0;

  const values = lifeStyleLogs
    .map(lifeStyleLog => lifeStyleLog.exerciseMins)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

/**
 * AverageWaterIntakeLevel
 */
export const getAverageWaterIntakeLevel = (lifeStyleLogs) => {
  if (!lifeStyleLogs || lifeStyleLogs.length === 0) return 0;

  const values = lifeStyleLogs
    .map(lifeStyleLog => lifeStyleLog.waterIntakeLevel)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

/**
 * AverageStressLevel
 */
export const getAverageStressLevel = (lifeStyleLogs) => {
  if (!lifeStyleLogs || lifeStyleLogs.length === 0) return 0;

  const values = lifeStyleLogs
    .map(lifeStyleLog => lifeStyleLog.stressLevel)
    .filter(v => v !== 0);

  const avg = average(values);

  return Math.round(avg);
};

