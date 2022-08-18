import axiosInstance from "../axios/index";

export interface ICountry {
	name: string;
	region: string;
	area: number;
	population?: number;
	flag?: string;
	independent?: boolean;
	key?: number;
}

export const CountriesService = {
	getAllCountries: async () => {
		return axiosInstance.get<ICountry[]>("/all", {
			params: {
				fields: "name,region,area",
			},
		});
	},
	getCountryByName: async (name: string) => {
		return axiosInstance.get<[ICountry]>(`/name/${name}`, {
			params: {
				fields: "name,region,area,population,flag",
				fullText: true,
			},
		});
	},
};
