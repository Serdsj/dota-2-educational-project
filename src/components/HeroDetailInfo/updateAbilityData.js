export function updateAbilityData(
  currentHeroData,
  basicUrl,
  shardUrl,
  scepterUrl
) {
  if (
    !currentHeroData.data?.length ||
    !currentHeroData.data[0]?.abilities?.length
  ) {
    return []; // Возвращаем пустой массив, если данных нет или они некорректны
  }

  const { abilities, name_loc } = currentHeroData.data[0];

  const abilitiesWithUrl = abilities.map(function (item) {
    return {
      abilityVideoUrlJpg: basicUrl(
        name_loc,
        item.name,
        "jpg",
        item.ability_is_granted_by_scepter,
        item.ability_is_granted_by_shard
      ),
      abilityVideoUrlWebm: basicUrl(
        name_loc,
        item.name,
        "webm",
        item.ability_is_granted_by_scepter,
        item.ability_is_granted_by_shard
      ),
      abilityVideoUrlMp4: basicUrl(
        name_loc,
        item.name,
        "mp4",
        item.ability_is_granted_by_scepter,
        item.ability_is_granted_by_shard
      ),
      ...item,
    };
  });

  function createAdditionalAbilities(abilities) {
    const shardAbility = abilities
      .filter(function (item) {
        return item.ability_has_shard && !item.ability_is_granted_by_shard;
      })
      .map(function (item) {
        const randomId = Math.floor(Math.random() * 10000) + 1;
        return {
          abilityVideoUrlJpg: shardUrl(name_loc, "jpg"),
          abilityVideoUrlWebm: shardUrl(name_loc, "webm"),
          abilityVideoUrlMp4: shardUrl(name_loc, "mp4"),
          name: item.name,
          name_loc: item.name_loc,
          shard_loc: item.shard_loc,
          special_values: item.special_values,
          ability_has_shard: item.ability_has_shard,
          ability_is_granted_by_shard: item.ability_is_granted_by_shard,
          id: randomId,
          damage: 0,
          cooldowns: [0],
          desc_loc: "",
          lore_loc: item.lore_loc,
          mana_costs: [0],
          dispellable: 0,
          immunity: 0,
        };
      });
    const scepterAbility = abilities
      .filter(function (item) {
        return item.ability_has_scepter && !item.ability_is_granted_by_scepter;
      })
      .map(function (item) {
        const randomId = Math.floor(Math.random() * 10000) + 1;
        return {
          abilityVideoUrlJpg: scepterUrl(name_loc, "jpg"),
          abilityVideoUrlWebm: scepterUrl(name_loc, "webm"),
          abilityVideoUrlMp4: scepterUrl(name_loc, "mp4"),
          ability_has_scepter: item.ability_has_scepter,
          ability_is_granted_by_scepter: item.ability_is_granted_by_scepter,
          name: item.name,
          name_loc: item.name_loc,
          scepter_loc: item.scepter_loc,
          special_values: item.special_values,
          id: randomId,
          damage: 0,
          cooldowns: [0],
          desc_loc: "",
          lore_loc: item.lore_loc,
          mana_costs: [0],
          dispellable: 0,
          immunity: 0,
        };
      });

    return [...shardAbility, ...scepterAbility];
  }

  return [...abilitiesWithUrl, ...createAdditionalAbilities(abilitiesWithUrl)];
}
