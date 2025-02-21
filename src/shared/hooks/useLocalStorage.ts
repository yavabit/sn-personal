import { useState } from "react"

const getValueStorage = (key: string, initialState: unknown, isStorage?: boolean, setItem?:boolean) => {
	const savedValue = localStorage.getItem(key)

	if(savedValue) {
		if(isStorage) {
			return true
		}
		return JSON.parse(savedValue)
	} else if(isStorage) {
		return false
	} else if(setItem) {
		localStorage.setItem(key, JSON.stringify(initialState))
	}

	if(initialState instanceof Function) {
		return initialState();
	}

	return initialState
}

export const useLocalStorage = <T>(key: string, initialState: unknown, isStorage?: boolean, setItem?:boolean): [T, React.Dispatch<React.SetStateAction<T>>] => {
	const [value, setValue] = useState(() => getValueStorage(key, initialState, isStorage, setItem))

	return [value, setValue]
}