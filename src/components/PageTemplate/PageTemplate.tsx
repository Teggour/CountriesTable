import React from "react";
import { Layout, Affix } from "antd";

import Menu from "../Menu/Menu";

const { Header, Content, Footer } = Layout;

interface IProps {
	children?: React.ReactNode;
}

const PageTemplate: React.FC<IProps> = ({ children }) => {
	return (
		<Layout
			style={{
				minHeight: "100vh",
			}}
		>
			<Affix>
				<Header>
					<Menu />
				</Header>
			</Affix>

			<Content style={{ padding: "14px 24px", background: "#fff" }}>
				{children}
			</Content>

			<Footer style={{ textAlign: "center", height: "fit-content" }}>
				Countries table ©2022 Created by Malik Teggour
			</Footer>
		</Layout>
	);
};

export default PageTemplate;
