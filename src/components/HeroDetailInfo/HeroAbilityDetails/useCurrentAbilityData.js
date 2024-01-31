import { useState, useEffect } from "react";

export function useCurrentAbilityData(heroData) {
  const [abilityData, setAbilityData] = useState(null);
  const [activeAbilityId, setActiveAbilityId] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (
      !heroData ||
      heroData.length === 0 ||
      !heroData[0].abilities ||
      heroData[0].abilities.length === 0
    ) {
      return;
    }
    // Установка начального значения для abilityData с первой способностью из списка
    const firstAbility = heroData[0].abilities[0];
    setAbilityData(firstAbility);
    setActiveAbilityId(firstAbility.id);
  }, [heroData]); // Эффект срабатывает при изменении heroData

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
  };

  return {
    abilityData,
    activeAbilityId,
    isAnimating,
    handleAbilityClick,
  };
}
