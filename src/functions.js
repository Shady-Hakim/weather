export const handleDegreeConvert = (degreeSign, degree) => {
  if (degreeSign === 0) return degree;
  else return degree * 1.8 + 32.0;
};
