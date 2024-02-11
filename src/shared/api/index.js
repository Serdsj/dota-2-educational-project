import { CONFIG } from "../config/";

export const getHeroesList = async (params = {}) => {
  //  API мало данных
  const response = await fetch(CONFIG.API_HERO_LIST, params).then((resp) =>
    resp.json()
  );

  return response;
};

export const getHeroData = async ({ id }) => {
  // api, много данных

  const api = `${CONFIG.API_HERO_DATA}&hero_id=${id}`;
  const response = await fetch(api).then((resp) => resp.json());

  return response;
};
