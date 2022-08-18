import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Table } from "antd";
import { TablePaginationConfig } from "antd/lib/table";

import { ICountry } from "../../services/Countries.service";

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		width: "40%",
		sorter: (a: ICountry, b: ICountry): number =>
			a.name.localeCompare(b.name),
	},
	{
		title: "Region",
		dataIndex: "region",
		width: "40%",
	},
	{
		title: "Area, km²",
		dataIndex: "area",
		width: "20%",
		sorter: (a: ICountry, b: ICountry) => a.area - b.area,
	},
];

interface IProps extends RouteComponentProps {
	countries?: ICountry[];
	isLoading: boolean;
	currentPage: number;
}

const CountriesTable: React.FC<IProps> = ({
	countries,
	isLoading,
	currentPage,
	history,
	location,
}) => {
	return (
		<Table
			columns={columns}
			dataSource={countries}
			loading={isLoading}
			title={() => "Header"}
			pagination={{
				total: countries?.length,
				current: currentPage,
				pageSize: 10,
				position: ["bottomCenter", "topCenter"],
				showSizeChanger: false,
				showTitle: false,
			}}
			scroll={{ x: true }}
			onChange={(newPagination: TablePaginationConfig) => {
				history.push({
					pathname: location.pathname,
					search: `page=${newPagination.current}`,
				});
			}}
			onRow={(record: ICountry) => {
				return {
					onClick: () => {
						history.push({
							pathname: location.pathname + `/${record.name}`,
						});
					},
				};
			}}
		/>
	);
};

export default withRouter(CountriesTable);
