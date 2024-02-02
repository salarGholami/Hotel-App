import { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAtenticated: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        user: action.payload,
        isAtenticated: true,
      };

    case "logout":
      return {
        user: null,
        isAtenticated: false,
      };

    default:
      throw new Error("Unknown actions!");
  }
}

const FAKE_USER = {
  name: "salar",
  email: "user@Gmail.com",
  password: "1234",
};

export default function AuthProvider({ children }) {
  const [{ user, isAtenticated }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAtenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
