import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authstore";

const Logout = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    logout(); // Call the logout function from auth store to properly update state
    navigate("/"); // Navigate to landing page instead of login
  }, [navigate, logout]);

  return null;
};

export default Logout;