import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAutenticated: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        user: action.payload,
        isAutenticated: true,
      };

    case "logout":
      return {
        user: null,
        isAutenticated: false,
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
  const [{ user, isAutenticated }, dispatch] = useReducer(
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
    <AuthContext.Provider value={{ user, isAutenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
