import { CONFIG } from "../config/";

export const getHeroStats = async (params = {}) => {
  // старая API много данных
  try {
    const response = await fetch(CONFIG.API_HERO_STATS, params).then((resp) =>
      resp.json()
    );

    if (response && Array.isArray(response) && response.length > 0) {
      return response;
    }

    throw new Error("Error to fetch hero stats data");
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getHeroesList = async (params = {}) => {
  // новая API мало данных
  const response = await fetch(CONFIG.API_HERO_LIST, params).then((resp) =>
    resp.json()
  );

  const heroList = response?.result?.data?.heroes ?? [];

  if (heroList && Array.isArray(heroList) && heroList.length > 0) {
    return heroList;
  }
};

export const getHeroData = async ({ id }) => {
  // новая api, много данных

  const api = `${CONFIG.API_HERO_DATA}&hero_id=${id}`;
  const response = await fetch(api).then((resp) => resp.json());

  const heroData = response?.result?.data?.heroes ?? [];

  if (heroData && Array.isArray(heroData) && heroData.length > 0) {
    return heroData;
  }
};

// export const getHeroesList = async (params = {}) => {
//   // новая API мало данных
//   try {
//     const response = await fetch(CONFIG.API_HERO_LIST, params).then((resp) =>
//       resp.json()
//     );

//     const heroList = response?.result?.data?.heroes ?? [];

//     if (heroList && Array.isArray(heroList) && heroList.length > 0) {
//       return heroList;
//     }

//     throw new Error("Error to fetch hero list info");
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
