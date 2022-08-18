import { useQuery } from "@tanstack/react-query";

import { ICountry, CountriesService } from "../services/Countries.service";

interface IQuery {
	isLoading: boolean;
	isError: boolean;
	isSuccess: boolean;
	data?: ICountry[];
}

export const useQueryCountries = (openNotification: (err: any) => void) => {
	const { isLoading, data: response }: IQuery = useQuery(
		["country list"],
		() => {
			return CountriesService.getAllCountries();
		},
		{
			select: ({ data }) =>
				data.map(({ independent, ...data }: ICountry, i: number) => ({
					...data,
					key: i,
				})),
			onError: (error: any) => {
				openNotification(error);
			},
		}
	);

	return { isLoading, response };
};
