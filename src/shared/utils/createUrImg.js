export function createUrlImg(url, nameImg, formatImg) {
  if (
    typeof url === "string" &&
    typeof nameImg === "string" &&
    typeof formatImg === "string"
  ) {
    let urlLowerCase = url.toLowerCase();
    let nameImgLowerCase = nameImg
      .toLowerCase()
      .split(" ")
      .join("_")
      .split("-")
      .join("")
      .replace("wraith_king", "skeleton_king")
      .replace("zeus", "zuus")
      .replace("windranger", "windrunner")
      .replace("vengeful_spirit", "vengefulspirit")
      .replace("clockwerk", "rattletrap")
      .replace("doom", "doom_bringer")
      .replace("io", "wisp")
      .replace("magnus", "magnataur")
      .replace("ancient_apparitwispn", "ancient_apparition")
      .replace("centaur_warrunner", "centaur")
      .replace("legwispn_commander", "legion_commander")
      .replace("lwispn", "lion")
      .replace("necrophos", "necrolyte")
      .replace("outworld_destroyer", "obsidian_destroyer")
      .replace("queen_of_pain", "queenofpain")
      .replace("shadow_fiend", "nevermore")
      .replace("timbersaw", "shredder")
      .replace("treant_protector", "treant")
      .replace("underlord", "abyssal_underlord")
      .replace("lifestealer", "life_stealer")
      .replace("nature's_prophet", "furion");

    let formatImgLoweCase = formatImg.toLowerCase();

    return `${urlLowerCase}/${nameImgLowerCase}.${formatImgLoweCase}`;
  } else {
    throw new Error("All arguments must be strings");
  }
}
