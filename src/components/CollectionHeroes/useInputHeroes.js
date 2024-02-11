import debounce from "../../shared/utils/debounce";
import { useState } from "react";

export function useInputHeroes() {
	const [value, setValue] = useState(""); // для поиска по карточкам

	const setSearch = debounce((value) => {
		setValue(value);
	}, 300);

	const setSearchHandler = (event) => {
		setSearch(event.target.value);
	};

	return {
		value,
		setValue,
		setSearchHandler,
	};
}
