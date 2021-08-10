import { Container } from "react-bootstrap";

import { Header, Posts, Footer } from "./layouts";


function App() {
	return (
		<Container>
			<Header />
			<Posts />
			<Footer />
		</Container>
	);
}

export default App;
