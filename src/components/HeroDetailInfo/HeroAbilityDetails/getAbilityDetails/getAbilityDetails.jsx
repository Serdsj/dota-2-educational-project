import styleGetDetails from "./GetAbilityDetails.module.scss";
export function GetAbilityDetails(currentAbil) {
  let bcAganim = null;
  let bcShard = null;
  let order = 0;

  if (currentAbil.ability_is_granted_by_shard) {
    bcShard = <div className={styleGetDetails["special-abil-shard"]}></div>;
    order = 1;
  }

  if (currentAbil.ability_is_granted_by_scepter) {
    bcAganim = <div className={styleGetDetails["special-abil-scepter"]}></div>;
    order = 2;
  }

  if (currentAbil.ability_has_shard && !currentAbil.desc_loc) {
    bcShard = <div className={styleGetDetails["special-abil-shard"]}></div>;
    order = 1;
  }

  if (currentAbil.ability_has_scepter && !currentAbil.desc_loc) {
    bcAganim = <div className={styleGetDetails["special-abil-scepter"]}></div>;
    order = 2;
  }

  return { bcAganim, bcShard, order };
}
