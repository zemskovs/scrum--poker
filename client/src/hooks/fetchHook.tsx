import { useEffect } from "react";

export type fetchHookProps<T> = {
	url: string;
	fetchedEffect: (res) => void;
};

const fetchHook = (url: string, fetchedEffect: (res) => void) => {
	useEffect(() => {
		let active = true;
		const abortCtrl = new AbortController();

		fetch(url, {
			signal: abortCtrl.signal
		})
			.then(res => res.json())
			.then(res => active && fetchedEffect(res));
		return () => {
			active = false;
			abortCtrl.abort();
		}
	}, [])
};

export default fetchHook;
