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

  return response;
};

export const getHeroData = async ({ id }) => {
  // новая api, много данных

  const api = `${CONFIG.API_HERO_DATA}&hero_id=${id}`;
  const response = await fetch(api).then((resp) => resp.json());

  return response;
};
