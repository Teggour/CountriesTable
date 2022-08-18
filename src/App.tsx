import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "antd/dist/antd.min.css";

import HomePage from "./pages/HomePage/HomePage";
import CountriesPage from "./pages/CountriesPage/CountriesPage";
import CountryPage from "./pages/CountryPage/CountryPage";
import Page404 from "./pages/Page404/Page404";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />

					<Route path="/home">
						<Redirect to="/" />
					</Route>

					<Route path="/homepage">
						<Redirect to="/" />
					</Route>

					<Route exact path="/countries" component={CountriesPage} />

					<Route
						exact
						path="/countries/:countryName"
						component={CountryPage}
					/>

					<Route path="*" component={Page404} />
				</Switch>
			</Router>
		</QueryClientProvider>
	);
};

export default App;
