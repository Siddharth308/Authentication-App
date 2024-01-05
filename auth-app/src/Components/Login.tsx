import React, { useReducer } from "react";
import { Form, Input, Button } from "antd";

// Define the state type
type StateType = {
  email: string;
  password: string;
};

// Define the action type
type ActionType =
  | { type: "setEmail"; payload: string }
  | { type: "setPassword"; payload: string };

// Initial state for the reducer
const initialState: StateType = {
  email: "",
  password: "",
};

// Reducer function to handle state changes
const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const LoginForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    console.log("Login with:", state.email, state.password);
    // Implement login logic here
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          type="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "setEmail", payload: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          value={state.password}
          onChange={(e) =>
            dispatch({ type: "setPassword", payload: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </Form>
  );
};

export default LoginForm;
