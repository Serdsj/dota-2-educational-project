export function formatFloat(value, decimals = 2) {
  return Number.parseFloat(value).toFixed(decimals);
}
