import { mediaLinks } from "./createUrl";

export function basicUrl(heroName, abilityName, format, byScepter, byShard) {
  if (!byScepter && byShard) {
    return mediaLinks.createUrl({
      type: "abilityShardVideo",
      heroName: heroName,
      formatVideo: format,
    });
  } else if (byScepter && !byShard) {
    return mediaLinks.createUrl({
      type: "abilityAganimVideo", // Исправлено на правильное название для Scepter
      heroName: heroName,
      formatVideo: format,
    });
  } else
    return mediaLinks.createUrl({
      type: "abilityVideo",
      heroName: heroName,
      abilityName: abilityName,
      formatVideo: format,
    });
}

export function shardUrl(heroName, format) {
  return mediaLinks.createUrl({
    type: "abilityShardVideo",
    heroName: heroName,
    formatVideo: format,
  });
}

export function scepterUrl(heroName, format) {
  return mediaLinks.createUrl({
    type: "abilityAganimVideo",
    heroName: heroName,
    formatVideo: format,
  });
}
