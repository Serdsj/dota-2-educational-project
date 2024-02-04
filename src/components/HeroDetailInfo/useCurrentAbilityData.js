import { useState, useEffect } from "react";

export function useCurrentAbilityData(heroAbilities) {
  const [abilityData, setAbilityData] = useState(null);
  const [activeAbilityId, setActiveAbilityId] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

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
