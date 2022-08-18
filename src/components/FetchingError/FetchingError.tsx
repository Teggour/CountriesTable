import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Result } from "antd";

const FetchingError: React.FC = () => {
	const history = useHistory();

	return (
		<Result
			status="error"
			title="Fetching Failed"
			subTitle="You probably entered the wrong country name. Please check and modify that."
			extra={[
				<Button type="primary" onClick={() => history.push("/")}>
					Back Home
				</Button>,
				<Button type="primary" onClick={() => history.goBack()}>
					Go back
				</Button>,
				<Button type="primary" onClick={() => history.go(0)}>
					Reload page
				</Button>,
			]}
		/>
	);
};

export default FetchingError;
