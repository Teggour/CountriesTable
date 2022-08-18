import React from "react";
import { useParams } from "react-router-dom";
import { Descriptions, Typography, Image, notification } from "antd";
import { WarningOutlined } from "@ant-design/icons";

import PageTemplate from "../../components/PageTemplate/PageTemplate";
import { useQueryCountry } from "../../hooks/useQueryCountry";
import FetchingError from "../../components/FetchingError/FetchingError";
import Loader from "../../components/Loader/Loader";

type TCountryNameParams = { countryName: string };

const CountryPage: React.FC = () => {
	const { countryName } = useParams<TCountryNameParams>();

	const openNotification = (error: any): void => {
		notification.open({
			message: "Error!",
			description: error.message,
			icon: <WarningOutlined style={{ color: "red" }} />,
		});
	};

	const {
		isLoading,
		isError,
		isSuccess,
		response: country,
	} = useQueryCountry(countryName, openNotification);

	return (
		<PageTemplate>
			<Typography.Title>{countryName}</Typography.Title>

			{isLoading && <Loader />}

			{isError && <FetchingError />}

			{isSuccess && (
				<Descriptions column={2} title={"Country info:"}>
					<Descriptions.Item
						label="Name"
						labelStyle={{ fontWeight: 700 }}
					>
						{country?.name}
					</Descriptions.Item>

					<Descriptions.Item
						label="Region"
						labelStyle={{ fontWeight: 700 }}
					>
						{country?.region}
					</Descriptions.Item>

					<Descriptions.Item
						label="Area, km²"
						labelStyle={{ fontWeight: 700 }}
					>
						{country?.area?.toLocaleString()}
					</Descriptions.Item>

					<Descriptions.Item
						label="Population"
						labelStyle={{ fontWeight: 700 }}
					>
						{country?.population?.toLocaleString()}
					</Descriptions.Item>

					<Descriptions.Item
						label="Flag"
						labelStyle={{ fontWeight: 700 }}
					>
						<Image
							src={country?.flag}
							width={"90px"}
							height={"60px"}
							alt={`Flag og ${countryName}`}
							style={{ border: "1px solid black" }}
						/>
					</Descriptions.Item>
				</Descriptions>
			)}
		</PageTemplate>
	);
};

export default CountryPage;
