import React from "react";
import { Button, Result } from "antd";
import { useHistory } from "react-router-dom";

const Page404: React.FC = () => {
	const history = useHistory();
	return (
		<Result
			style={{
				marginTop: "100px",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				justifyContent: "space-between",
				fontWeight: "700",
				fontSize: "22px",
				textAlign: "center",
			}}
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button type="primary" onClick={() => history.push("/")}>
					Back Home
				</Button>
			}
		/>
	);
};

export default Page404;
