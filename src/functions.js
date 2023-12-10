export const handleDegreeConvert = (degreeSign, degree) => {
  if (degreeSign === 0) return degree;
  else return degree * 1.8 + 32.0;
};

export const convertDateToDay = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'long' };
  const dayName = new Intl.DateTimeFormat('en-US', options).format(date);
  return dayName;
};

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
