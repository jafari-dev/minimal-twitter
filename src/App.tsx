import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import { Header, Posts, Register, Footer } from "./layouts";


function App() {
	return (
		<Container>
			<Header />
			<Switch>
				<Route path="/register" exact component={Register} />
				<Route path="/" exact component={Posts} />
			</Switch>
			<Footer />
		</Container>
	);
}

export default App;
