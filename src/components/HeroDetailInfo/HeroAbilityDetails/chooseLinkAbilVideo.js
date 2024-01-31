import { mediaLinks } from "../../../shared/utils/createUrl";

export function chooseLinkAbilVideo(
  shard,
  aganim,
  heroName,
  formatVideo,
  currentAbil
) {
  if (shard) {
    return mediaLinks.createUrl({
      type: "abilityShardVideo",
      heroName: heroName,
      formatVideo: formatVideo,
    });
  } else if (aganim) {
    return mediaLinks.createUrl({
      type: "abilityAganimVideo",
      heroName: heroName,
      formatVideo: formatVideo,
    });
  } else {
    return mediaLinks.createUrl({
      type: "abilityVideo",
      heroName: heroName,
      abilityName: currentAbil,
      formatVideo: formatVideo,
    });
  }
}
