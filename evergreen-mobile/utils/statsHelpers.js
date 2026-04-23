// Averages
/**
 * Level conversion
 */
export const convertLevel = (value) => {
  if (value === "Low") return 1;
  if (value === "Medium") return 2;
  if (value === "High") return 3;
  return 0;
};

//Convert back
export const convertLevelToLabel = (value) => {
  if (value <= 1.5) return "Low";
  if (value <= 2.5) return "Medium";
  return "High";
};



/**
 * Average function
 */
export const average = (array) => {
  if (!array.length) return 0;

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum/array.length;
};

// Most Common

/**
 * Count function
 */
export const countItems = (data, key) => {
  const counts = {};

  for (let i = 0; i < data.length; i++) {
    const items = data[i][key];

    for (let j = 0; j < items.length; j++) {
      const item = items[j];

      if (counts[item]) {
        counts[item]++;
      } else {
        counts[item] = 1;
      }
    }
  }

  return counts;
};

/**
 * Most common function
 */
export const getMostCommon = (counts) => {
  let mostCommon = null;
  let maxCount = 0;

  for (const key in counts) {
    if (counts[key] > maxCount) {
      maxCount = counts[key];
      mostCommon = key;
    }
  }

  return mostCommon;
};