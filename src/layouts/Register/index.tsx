import { DefaultAvatar } from "@/images";
import { addUser } from "_/backend";
import { ResponseState } from "_/types";
import { useCallback, useReducer, useRef } from "react";
import { FormGroup, FormLabel, FormControl, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { StyledForm, StyledSumbit, StyledRow } from "./styles";

type Change = React.ChangeEvent<HTMLInputElement>;

const initialState = {
  firstname: "",
  lastname: "",
  id: "",
  password: "",
  confirmPassword: "",
};
interface State {
  firstname: string;
  lastname: string;
  id: string;
  password: string;
  confirmPassword: string;
}

type ActionType =
  | "FIRSTNAME"
  | "LASTNAME"
  | "ID"
  | "PASSWORD"
  | "CONFIRM-PASSWORD";

interface Action {
  type: ActionType;
  payload: string;
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "FIRSTNAME":
      return { ...state, firstname: action.payload };
    case "LASTNAME":
      return { ...state, lastname: action.payload };
    case "ID":
      return { ...state, id: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "CONFIRM-PASSWORD":
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
}

function RegisterComponent(): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      const date = new Date();
      const formatedDate =
        date.getUTCFullYear().toString() +
        "-" +
        (date.getUTCMonth() + 1).toString().padStart(2, "0") +
        "-" +
        date.getUTCDate().toString().padStart(2, "0");

      if (state.password === state.confirmPassword) {
        const response = await addUser({
          firstName: state.firstname,
          lastName: state.lastname,
          id: state.id,
          avatar: DefaultAvatar,
          posts: 0,
          joinDate: formatedDate,
          password: state.password,
        });

        switch (response) {
          case ResponseState.SUCCESS:
            toast.success("Your account created successfully!");
            history.replace("/login");
            break;
          case ResponseState.BAD:
            toast.warn("This username already exist!");
            break;
          default:
            toast.error("Some error occurs!");
        }
      } else {
        toast.warn("Passwords are not matched!");
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
    <StyledForm onSubmit={handleSubmit} ref={formRef}>
      <h2>Register</h2>
      <StyledRow>
        <FormGroup as={Col} controlId="firstname-group">
          <FormLabel>First Name</FormLabel>
          <FormControl
            name="firstname"
            type="text"
            value={state.firstname}
            onChange={handleFieldChange}
            required
            pattern={"^[a-zA-Z ]+$"}
            minLength={3}
            maxLength={12}
          />
        </FormGroup>
        <FormGroup as={Col} controlId="lastname-group">
          <FormLabel>Last Name</FormLabel>
          <FormControl
            name="lastname"
            type="text"
            value={state.lastname}
            onChange={handleFieldChange}
            required
            pattern={"^[a-zA-Z ]+$"}
            minLength={3}
            maxLength={12}
          />
        </FormGroup>
      </StyledRow>
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
        <FormGroup as={Col} controlId="confirm-password-group">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            name="confirm-password"
            type="password"
            value={state.confirmPassword}
            onChange={handleFieldChange}
            required
            minLength={8}
            maxLength={32}
          />
        </FormGroup>
        <FormGroup as={Col}>
          <StyledSumbit type="submit" variant="primary">
            REGISTER
          </StyledSumbit>
        </FormGroup>
      </StyledRow>
      <StyledRow>
        <FormGroup as={Col}>
          <Link to="/login">
            <StyledSumbit type="button" variant="warning">
              LOGIN FROM HERE!
            </StyledSumbit>
          </Link>
        </FormGroup>
      </StyledRow>
    </StyledForm>
  );
}

export default RegisterComponent;
