import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import { Header, Posts, Register, Login, Footer, NotFound, Users } from "./layouts";


function App() {
	return (
		<Container>
			<Header />
			<Switch>
				<Route path="/register" exact component={Register} />
				<Route path="/login" exact component={Login} />
				<Route path="/users" exact component={Users} />
				<Route path="/" exact component={Posts} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</Container>
	);
}

export default App;
