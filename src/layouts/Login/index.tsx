import { authenticateUser } from "_/backend";
import { ResponseState } from "_/types";
import { useCallback, useReducer, useRef } from "react";
import { FormGroup, FormLabel, FormControl, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { StyledForm, StyledSumbit, StyledRow } from "./styles";

type Change = React.ChangeEvent<HTMLInputElement>;

interface State {
  id: string;
  password: string;
}

type ActionType = "ID" | "PASSWORD";

interface Action {
  type: ActionType;
  payload: string;
}

const initialState = { id: "", password: "" };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ID":
      return { ...state, id: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

function LoginComponent(): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  const history = useHistory();

  const handleLogin = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      const response = await authenticateUser(state.id, state.password);

      switch (response) {
        case ResponseState.SUCCESS:
          toast.success("You logged in successfully!");
          history.replace("/");
          break;
        case ResponseState.BAD:
          toast.warn("Your username or password is wrong!");
          break;
        default:
          toast.error("Some error occurs!");
      }
    },
    [state]
  );

  const handleFieldChange = useCallback((event: Change) => {
    const payload = event.target.value;
    const type = event.target.name.toUpperCase() as ActionType;
    dispatch({ type, payload });
  }, []);

  return (
    <StyledForm onSubmit={handleLogin} ref={formRef}>
      <h2>Login</h2>
      <StyledRow>
        <FormGroup as={Col} controlId="id-group">
          <FormLabel>Username</FormLabel>
          <FormControl
            name="id"
            type="text"
            value={state.id}
            onChange={handleFieldChange}
            required
            pattern={"^[a-zA-Z0-9_]+$"}
            minLength={5}
            maxLength={24}
          />
        </FormGroup>
        <FormGroup as={Col} controlId="password-group">
          <FormLabel>Password</FormLabel>
          <FormControl
            name="password"
            type="password"
            value={state.password}
            onChange={handleFieldChange}
            required
            minLength={8}
            maxLength={32}
          />
        </FormGroup>
      </StyledRow>
      <StyledRow>
        <FormGroup as={Col}>
          <StyledSumbit type="submit" variant="primary">
            LOGIN
          </StyledSumbit>
        </FormGroup>
      </StyledRow>
      <StyledRow>
        <FormGroup as={Col}>
          <Link to="/register">
            <StyledSumbit type="button" variant="warning">
              REGISTER FROM HERE!
            </StyledSumbit>
          </Link>
        </FormGroup>
      </StyledRow>
    </StyledForm>
  );
}

export default LoginComponent;
