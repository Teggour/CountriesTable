import React from "react";
import { Select } from "antd";

interface IProps {
	regions: string[];
	selectedRegions: string[];
	setSelectedRegions: React.Dispatch<React.SetStateAction<string[]>>;
}

const RegionFilter: React.FC<IProps> = ({
	regions,
	selectedRegions,
	setSelectedRegions,
}) => {
	const filteredRegions = regions.filter(
		(region: string) => !selectedRegions.includes(region)
	);

	return (
		<Select
			mode="multiple"
			placeholder="Select regions to filter"
			allowClear
			value={selectedRegions}
			onChange={setSelectedRegions}
			style={{ width: "100%" }}
		>
			{filteredRegions.map((item: string, i: number) => (
				<Select.Option key={item + i} value={item}>
					{item}
				</Select.Option>
			))}
		</Select>
	);
};

export default RegionFilter;
