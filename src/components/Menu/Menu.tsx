import React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, TableOutlined } from "@ant-design/icons";

interface IMenuItem {
	key: string;
	label: string;
	link: string;
	icon: React.ReactNode;
}

const menuItems: IMenuItem[] = [
	{
		key: "home",
		label: "Home",
		link: "/",
		icon: <HomeOutlined />,
	},
	{
		key: "countries",
		label: "Countries",
		link: "/countries",
		icon: <TableOutlined />,
	},
];

const MyMenu: React.FC<RouteComponentProps> = ({ location, match }) => {
	// const basePath: string = Object.values(match.params).reduce(
	// 	(path: string, param: any): string => path.replace("/" + param, ""),
	// 	location.pathname
	// );

	const activeMenuItemKey: string | undefined = menuItems.find(
		(item: IMenuItem) => item.link === location.pathname
	)?.key;

	return (
		<Menu
			mode="horizontal"
			theme={"dark"}
			defaultSelectedKeys={
				activeMenuItemKey !== undefined
					? [activeMenuItemKey]
					: activeMenuItemKey
			}
		>
			{menuItems.map((menuItem: IMenuItem, i: number) => (
				<React.Fragment key={menuItem.key + i}>
					<Menu.Item key={menuItem.key} icon={menuItem.icon}>
						<Link to={menuItem.link}>{menuItem.label}</Link>
					</Menu.Item>
				</React.Fragment>
			))}
		</Menu>
	);
};

export default withRouter(MyMenu);
