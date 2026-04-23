/**
 * Function to get the latest added version of a type of log
 * Used for sorting and dashboard display
 * Loops through the array and compares each item's created_at until it finds the latest one
 * Returns the latest one
 */
export const getLatestByDate = (items) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  let latest = items[0];

  for (let i = 1; i < items.length; i++) {
    if (new Date(items[i].created_at) > new Date(latest.created_at)) {
      latest = items[i];
    }
  }

  return latest;
};

