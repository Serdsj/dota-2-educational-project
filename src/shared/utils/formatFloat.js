export function formatFloat(value, decimals = 2) {
  const number = Number.parseFloat(value);
  let formattedNumber = number.toFixed(decimals);

  // Замена точки на запятую
  formattedNumber = formattedNumber.replace(".", ",");

  // Удаление ненужных нулей и десятичной запятой, если число целое
  formattedNumber = formattedNumber.replace(/,?0+$/, "");

  return formattedNumber;
}
