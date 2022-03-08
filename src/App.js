import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

const App = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsloggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsloggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsloggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <Box mt="6rem">
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </Box>
    </>
  );
};

export default App;
