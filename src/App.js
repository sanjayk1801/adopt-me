import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import SearchBar from "./components/SearchBar";
import Details from "./components/Details";

const App = () => {
	return (
		<div
			className="p-0 m-0"
			style={{
				background:
					"url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
			}}
		>
			<Router>
				<header>
					<Link to="/">
						<h1>Adobt Me!</h1>
					</Link>
				</header>
				<Switch>
					<Route path="/details/:id">
						<Details />
					</Route>
					<Route path="/">
						<SearchBar />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
