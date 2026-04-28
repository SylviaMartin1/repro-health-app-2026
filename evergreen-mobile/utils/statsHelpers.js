// 1. Average function helpers
/**
 * Function to convert labels to numbers so math functions can be used on them
 */
export const convertLabel = (value) => {
  if (value === "Low") return 1;
  if (value === "Medium") return 2;
  if (value === "High") return 3;
  return 0;
};

/**
 * Average function which divided the sum of the array by the length
 */
export const average = (array) => {
  if (!array.length) return 0;

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum/array.length;
};


// 2. Most Common Function helpers
/**
 * Function to count the items in an array
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
 * 
 * Most Common function which checks the key of the items in an array
 * to find which one shows up the most 
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

// 3. Display Helpers
/**
 * Converts the label which was changed to a number back to a label
 */
export const convertNumberBackToLabel = (value) => {
  if (value <= 1.5) return "Low";
  if (value <= 2.5) return "Medium";
  return "High";
};