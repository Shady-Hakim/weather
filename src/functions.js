/**
 * handleDegreeConvert is a utility function for converting temperatures between Celsius and Fahrenheit.
 *
 * @param {number} degreeSign - A flag indicating the temperature unit: 0 for Celsius, 1 for Fahrenheit.
 * @param {number} degree - The temperature value to convert.
 * @returns {number} - The converted temperature value.
 */
export const handleDegreeConvert = (degreeSign, degree) => {
  if (degreeSign === 0) return degree;
  else return degree * 1.8 + 32.0;
};

/**
 * convertDateToDay is a utility function for converting a date string to the day name.
 *
 * @param {string} dateString - The input date string.
 * @returns {string} - The formatted day name.
 */
export const convertDateToDay = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'long' };
  const dayName = new Intl.DateTimeFormat('en-US', options).format(date);
  return dayName;
};

/**
 * formatDate is a utility function for formatting a date string to the "weekday day, year" format.
 *
 * @param {string} dateString - The input date string.
 * @returns {string} - The formatted date string.
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const year = date.getFullYear();
  const weekday = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(date);
  const formattedDate = `${weekday} ${day}, ${year}`;
  return formattedDate;
}

/**
 * getTodayFormatedDate is a utility function for obtaining the current date in the "YYYY-MM-DD" format.
 *
 * @returns {string} - The formatted current date string.
 */
export function getTodayFormatedDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

/**
 * getDay is a utility function for obtaining the day name of a given date compared to today.
 *
 * @param {string} date - The input date string.
 * @returns {string} - The formatted day name or 'Today'.
 */
export function getDay(date) {
  const today = convertDateToDay(getTodayFormatedDate());
  if (convertDateToDay(date) === today) return 'Today';
  else return convertDateToDay(date);
}
