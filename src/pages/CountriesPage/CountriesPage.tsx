import React, { useState, useEffect, useMemo } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Typography, notification } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { useQueryCountries } from "../../hooks/useQueryCountries";

import { ICountry } from "../../services/Countries.service";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import CountriesTable from "../../components/CountriesTable/CountriesTable";
import RegionFilter from "../../components/RegionFilter/RegionFilter";

const CountriesPage: React.FC<RouteComponentProps> = ({
	location,
	history,
}) => {
	const searchParams = new URLSearchParams(location.search);

	const currentPage = parseInt(searchParams.get("page") || "1", 10);

	const openNotification = (error: any): void => {
		notification.open({
			message: "Error!",
			description: error.message,
			icon: <WarningOutlined style={{ color: "red" }} />,
		});
	};

	const { response: countries, isLoading } =
		useQueryCountries(openNotification);

	const regions: string[] = useMemo(
		() => Array.from(new Set(countries?.map(({ region }) => region))),
		[countries]
	);

	const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
	const [filteredCountries, setFilteredCountries] = useState<
		ICountry[] | undefined
	>(countries);

	if (
		filteredCountries &&
		(currentPage > Math.ceil(filteredCountries.length / 10) ||
			currentPage < 1)
	) {
		notification.open({
			message: "Warning!",
			description:
				"The page number was entered incorrectly. Please change it.",
			icon: <WarningOutlined style={{ color: "#ffd800" }} />,
		});
	}

	useEffect(() => {
		setFilteredCountries(
			selectedRegions.length
				? countries?.filter((counry: ICountry) =>
						selectedRegions.includes(counry.region)
				  )
				: countries
		);
		history.push({ pathname: location.pathname, search: "?page=1" });
	}, [selectedRegions, countries]); // eslint-disable-line

	return (
		<PageTemplate>
			<Typography.Title>Countries</Typography.Title>

			<RegionFilter
				regions={regions}
				selectedRegions={selectedRegions}
				setSelectedRegions={setSelectedRegions}
			/>

			<CountriesTable
				countries={filteredCountries}
				isLoading={isLoading}
				currentPage={currentPage}
			/>
		</PageTemplate>
	);
};

export default withRouter(CountriesPage);
