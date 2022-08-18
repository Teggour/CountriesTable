import { useQuery } from "@tanstack/react-query";

import { ICountry, CountriesService } from "../services/Countries.service";

interface IQuery {
	isLoading: boolean;
	isError: boolean;
	isSuccess: boolean;
	data?: ICountry;
}

export const useQueryCountry = (
	countryName: string,
	openNotification: (err: any) => void
) => {
	const {
		isLoading,
		isError,
		isSuccess,
		data: response,
	}: IQuery = useQuery(
		["country", countryName],
		() => {
			return CountriesService.getCountryByName(countryName);
		},
		{
			select: ({ data }) => data[0],
			onError: (error: any) => {
				openNotification(error);
			},
		}
	);

	return { isLoading, isError, isSuccess, response };
};
