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
export function getTodayFormatedDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function getDay(date) {
  const today = convertDateToDay(getTodayFormatedDate());
  if (convertDateToDay(date) === today) return 'Today';
  else return convertDateToDay(date);
}
