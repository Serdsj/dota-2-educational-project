export function formatFloat(value, decimals = 2) {
  const number = Number.parseFloat(value);
  let formattedNumber = number.toFixed(decimals);

  formattedNumber = formattedNumber.replace(".", ",");

  formattedNumber = formattedNumber.replace(/,?0+$/, "");

  return formattedNumber;
}
