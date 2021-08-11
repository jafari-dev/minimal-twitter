import { useState } from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

import { Header, Posts, Register, Login, Footer, NotFound, Users, Home } from "./layouts";


function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	
	return (
		<Container>
			<Header />
			<Switch>
				<Route path="/users" exact component={Users} />
				<Route path="/posts" exact component={Posts} />
				<Route path="/register" exact component={Register} />
				<Route path="/login" exact component={Login} />
				<Route path="/" exact>
					<Home isLoggedIn={isLoggedIn} onLogout={setIsLoggedIn} />
				</Route>
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</Container>
	);
}

export default App;
