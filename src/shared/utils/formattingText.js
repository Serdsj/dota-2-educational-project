import { formatFloat } from "./formatFloat";

export function formattingText(item) {
  let description = item.desc_loc;
  item.special_values.forEach((specialValue) => {
    const valueStr =
      specialValue.values_float.length > 0
        ? formatFloat(specialValue.values_float[0])
        : "0";
    description = description.replace("%" + specialValue.name + "%", valueStr);
    description = description.replace(
      "%" + specialValue.name.toLowerCase() + "%",
      valueStr
    );
  });
  // Удаление лишних символов процента
  description = description.replace(/\%\%/g, "%");
  return description;
}
