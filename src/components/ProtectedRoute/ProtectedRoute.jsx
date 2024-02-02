import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAutenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutenticated) navigate("/login");
  }, [isAutenticated, navigate]);

  return isAutenticated ? children : null;
}

export default ProtectedRoute;
