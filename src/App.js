import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";

const App = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsloggedIn(true);
  };

  const logoutHandler = () => {
    setIsloggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
};

export default App;
