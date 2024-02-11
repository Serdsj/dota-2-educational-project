import { useState, useEffect, useRef } from "react";

export function useCurrentAbilityData(heroAbilities) {
	const [abilityData, setAbilityData] = useState(null);
	const [activeAbilityId, setActiveAbilityId] = useState(null);
	const [isAnimating, setIsAnimating] = useState(false);
	const videoRefs = useRef(new Map());
	const loadedVideosRef = useRef({});

	useEffect(() => {
		if (!heroAbilities || heroAbilities.length === 0) {
			return;
		}
		// Установка начального значения для abilityData с первой способностью из списка
		const firstAbility = heroAbilities[0];
		setAbilityData(firstAbility);
		setActiveAbilityId(firstAbility.id);
	}, [heroAbilities]);

	useEffect(() => {
		const video = videoRefs.current.get(activeAbilityId);
		if (video) {
			// Если видео еще не загружено, устанавливаем источники и загружаем его
			if (!loadedVideosRef.current[activeAbilityId]) {
				const srcWebm = video.getAttribute("data-src-webm");
				const srcMp4 = video.getAttribute("data-src-mp4");
				const sourceWebm = video.children[0];
				const sourceMp4 = video.children[1];

				if (sourceWebm && !sourceWebm.src) {
					sourceWebm.src = srcWebm;
				}
				if (sourceMp4 && !sourceMp4.src) {
					sourceMp4.src = srcMp4;
				}

				video.load();
				loadedVideosRef.current[activeAbilityId] = true; // Отмечаем видео как загруженное
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
	}, [activeAbilityId]);

	useEffect(() => {
		if (isAnimating) {
			const timer = setTimeout(() => {
				setIsAnimating(false);
			}, 300);

			return () => clearTimeout(timer);
		}
	}, [isAnimating]);

	const handleAbilityClick = (ability) => {
		setAbilityData(ability);
		setActiveAbilityId(ability.id);
		setIsAnimating(true);
	};

	return {
		abilityData,
		activeAbilityId,
		isAnimating,
		videoRefs,
		handleAbilityClick,
	};
}
