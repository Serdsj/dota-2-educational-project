import { mediaLinks } from "./createUrl";

export function chooseLinkAbilVideo(
  descLoc,
  shard,
  createdByShard,
  aganim,
  createdByAganim,
  heroName,
  formatVideo,
  currentAbil
) {
  if ((shard || createdByShard) && !descLoc) {
    return mediaLinks.createUrl({
      type: "abilityShardVideo",
      heroName: heroName,
      formatVideo: formatVideo,
    });
  } else if (
    aganim &&
    shard &&
    !createdByShard &&
    !createdByAganim &&
    descLoc
  ) {
    return mediaLinks.createUrl({
      type: "abilityVideo",
      heroName: heroName,
      abilityName: currentAbil,
      formatVideo: formatVideo,
    });
  } else if (
    aganim &&
    shard &&
    !createdByShard &&
    !createdByAganim &&
    !descLoc
  ) {
    return mediaLinks.createUrl({
      type: "abilityShardVideo",
      heroName: heroName,
      formatVideo: formatVideo,
    });
  } else if ((shard || createdByShard) && descLoc) {
    return mediaLinks.createUrl({
      type: "abilityAganimVideo",
      heroName: heroName,
      formatVideo: formatVideo,
    });
  } else if ((aganim || createdByAganim) && descLoc) {
    return mediaLinks.createUrl({
      type: "abilityAganimVideo",
      heroName: heroName,
      formatVideo: formatVideo,
    });
  } else if ((aganim || createdByAganim) && !descLoc) {
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
