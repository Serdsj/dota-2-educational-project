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
  }, [heroAbilities]); // Эффект срабатывает при изменении heroData

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

        video.load(); // Загружаем видео
        loadedVideosRef.current[activeAbilityId] = true; // Отмечаем видео как загруженное
      }

      // Устанавливаем текущее время видео на 0 и воспроизводим его
      video.currentTime = 0; // Сброс текущего времени видео
      video
        .play()
        .catch((error) =>
          console.error("Ошибка воспроизведения видео: ", error)
        );
    }
  }, [activeAbilityId]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false); // Сброс анимации после 300 мс
      }, 300);

      return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента или повторном запуске анимации
    }
  }, [isAnimating]); // Зависимость от isAnimating

  const handleAbilityClick = (ability) => {
    // Обновление состояния abilityData при клике на способность
    setAbilityData(ability);
    setActiveAbilityId(ability.id);
    setIsAnimating(true);

    console.log("это handleAbilityClick сработало");
  };

  return {
    abilityData,
    activeAbilityId,
    isAnimating,
    videoRefs,
    handleAbilityClick,
  };
}
