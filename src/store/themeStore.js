import { create } from "zustand";

export const useThemeStore = create((set) => ({
	isLight:
		localStorage.getItem("darkMode") !== null
			? JSON.parse(localStorage.getItem("darkMode"))
			: false,
	setIsLight: () => {
		set((state) => ({ isLight: !state.isLight }));
	},
}));
