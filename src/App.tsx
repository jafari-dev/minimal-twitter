import { authenticateUser } from "_/backend";
import { ResponseState } from "_/types";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Switch, Route, useHistory, withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  Header,
  Posts,
  Register,
  Login,
  Footer,
  NotFound,
  Users,
  Home,
} from "./layouts";

const localUser = localStorage.getItem("currentUser");

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localUser));

  const history = useHistory();

  useEffect(() => {
    const { pathname } = history.location;

    if (!isLoggedIn) {
      if (pathname === "/posts" || pathname === "/users") {
        history.replace("/login");
      }
    } else {
      if (pathname === "/login" || pathname === "/register") {
        history.replace("/");
      }
    }
  }, [history, isLoggedIn]);

  useEffect(() => {
    (async function () {
      const localUsername = localStorage.getItem("__USERNAME") ?? "__";
      const localPassword = localStorage.getItem("__PASSWORD") ?? "__";
      const response = await authenticateUser(localUsername, localPassword);
      response === ResponseState.SUCCESS
        ? setIsLoggedIn(true)
        : setIsLoggedIn(false);
    })();
  }, [localStorage.getItem("__USERNAME"), localStorage.getItem("__PASSWORD")]);

  return (
    <Container>
      <Header />
      <Switch>
        {isLoggedIn ? <Route path="/users" exact component={Users} /> : null}
        {isLoggedIn ? <Route path="/posts" exact component={Posts} /> : null}
        {!isLoggedIn ? (
          <Route path="/register" exact component={Register} />
        ) : null}
        {!isLoggedIn ? <Route path="/login" exact component={Login} /> : null}
        <Route path="/" exact>
          <Home isLoggedIn={isLoggedIn} onLogout={setIsLoggedIn} />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <ToastContainer position="bottom-left" />
    </Container>
  );
}

export default withRouter(App);
