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
  description = description.replace(/%%/g, "%");
  return description;
}

export function formattingTextShard(item) {
  let description = item.shard_loc;
  item.special_values.forEach((specialValue) => {
    const valueStr =
      specialValue.values_shard.length > 0
        ? formatFloat(specialValue.values_shard[0])
        : formatFloat(specialValue.values_float[0]);
    description = description.replace("%" + specialValue.name + "%", valueStr);
    description = description.replace(
      "%bonus_" + specialValue.name.toLowerCase() + "%",
      valueStr
    );
    description = description.replace(
      "%shard_" + specialValue.name.toLowerCase() + "%",
      valueStr
    );
  });
  // Удаление лишних символов процента
  description = description.replace(/%%/g, "%");
  return description;
}

export function formattingTextScepter(item) {
  let description = item.scepter_loc;
  item.special_values.forEach((specialValue) => {
    const valueStr =
      specialValue.values_scepter.length > 0
        ? formatFloat(specialValue.values_scepter[0])
        : formatFloat(specialValue.values_float[0]);

    description = description.replace(
      "%bonus_" + specialValue.name + "%",
      valueStr
    );
    description = description.replace("%" + specialValue.name + "%", valueStr);
  });

  // Удаление лишних символов процента
  description = description.replace(/%%/g, "%");
  return description;
}
