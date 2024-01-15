import debounce from "../../shared/utils/debounce";
import { useState } from "react";

export function useInputHeroes() {
  const [value, setValue] = useState(""); // для поиска по карточкам

  const setSearch = debounce((value) => {
    // передаим значение input через 500 ms
    setValue(value);
  }, 500);

  const setSearchHandler = (event) => {
    setSearch(event.target.value);
  };

  return {
    value,
    setValue,
    setSearchHandler,
  };
}
