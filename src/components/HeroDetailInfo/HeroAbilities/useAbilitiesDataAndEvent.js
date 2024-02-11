import { useMemo, useRef } from "react";
import { basicUrl } from "../../../shared/utils/createBasicShardScepterUrl";

export function useAbilitiesDataAndEvent(heroData) {
	const videoRefs = useRef(new Map());

	const filtredAbilities = useMemo(() => {
		const filtredAbil = heroData.abilities
			.filter(
				(ability, index) =>
					!ability.ability_is_granted_by_scepter &&
					!ability.ability_is_granted_by_shard &&
					!(heroData.id === 74 && index >= 4)
			)
			.map(function (item) {
				return {
					...item,
					abilityVideoUrlJpg: basicUrl(
						heroData.name_loc,
						item.name,
						"jpg",
						item.ability_is_granted_by_scepter,
						item.ability_is_granted_by_shard
					),
					abilityVideoUrlWebm: basicUrl(
						heroData.name_loc,
						item.name,
						"webm",
						item.ability_is_granted_by_scepter,
						item.ability_is_granted_by_shard
					),
					abilityVideoUrlMp4: basicUrl(
						heroData.name_loc,
						item.name,
						"mp4",
						item.ability_is_granted_by_scepter,
						item.ability_is_granted_by_shard
					),
				};
			});
		return filtredAbil;
	}, [heroData]);

	const handleMouseEnter = (abilityId) => {
		const video = videoRefs.current.get(abilityId);
		if (!video) return;

		if (video) {
			if (video.dataset.loaded !== "true") {
				const sourceWebm = video.querySelector('source[type="video/webm"]');
				const sourceMp4 = video.querySelector('source[type="video/mp4"]');

				if (sourceWebm && !sourceWebm.src) {
					sourceWebm.src = video.dataset.srcWebm;
				}
				if (sourceMp4 && !sourceMp4.src) {
					sourceMp4.src = video.dataset.srcMp4;
				}

				video.load();
				video.dataset.loaded = "true";
			}

			const playPromise = video.play();

			if (playPromise !== undefined) {
				playPromise
					.then(() => {
						video.currentTime = 0;
					})
					.catch((error) => {
						console.error("error", error);
					});
			}
		}
	};

	return { filtredAbilities, videoRefs, handleMouseEnter };
}
