import { useEffect, useState } from "react";

const localCache = {};

export default function useBreedList(animal) {
	const [breedList, setBreedList] = useState([]);
	const [state, setState] = useState("unloaded");

	useEffect(() => {
		if (!animal) {
			setBreedList([]);
		} else if (localCache[animal]) {
			setBreedList(localCache[animal]);
		} else {
			requestBreedList(animal);
		}

		async function requestBreedList() {
			setState("loading");
			const res = await fetch(
				`http://pets-v2.dev-apis.com/breeds?animal=${animal}`
			);
			const json = await res.json();
			localCache[animal] = json.breeds || [];
			setBreedList(localCache[animal]);
			setState("loaded");
		}
	}, [animal]);

	return [breedList, state];
}
