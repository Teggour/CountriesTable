import React from "react";
import { Spin, Row, Col } from "antd";

const Loader: React.FC = () => {
	return (
		<Row align={"middle"} justify={"center"} gutter={[48, 48]}>
			<Col>
				<Spin size="large" />
			</Col>
		</Row>
	);
};

export default Loader;
