export function parsingTalents(entity, talentIndex) {
  // Получаем объект таланта по индексу
  const talent = entity.talents[talentIndex];
  // Начальное значение строки, которое потом будет модифицировано
  let resultString = talent.name_loc;

  // Заменяем специальные значения в строке результатов
  talent.special_values.forEach((specialValue) => {
    if (specialValue.values_float.length > 0) {
      let firstValue = specialValue.values_float[0];
      firstValue = Math.floor(100 * firstValue) / 100; // Округление до двух знаков после запятой
      resultString = resultString.replace(
        `{s:${specialValue.name}}`,
        `${firstValue}`
      );
    }
  });

  // Перебор способностей для применения бонусов к строке результатов
  entity.abilities.forEach((ability) => {
    ability.special_values.forEach((specialValue) => {
      specialValue.bonuses?.forEach((bonus) => {
        // Используем опциональную цепочку для проверки наличия бонусов
        if (bonus.name === talent.name) {
          let bonusValue = bonus.value;
          bonusValue = Math.floor(100 * bonusValue) / 100; // Округление
          resultString = resultString.replace(
            `{s:bonus_${specialValue.name}}`,
            `${bonusValue}`
          );
        }
      });
    });
  });

  // Замена двойных дефисов на одинарные (если есть)
  resultString = resultString.replace("--", "-");

  return resultString;
}
