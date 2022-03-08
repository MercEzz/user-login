import { useState } from "react";
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
      <main>{/* {!isLoggedIn &&} */}</main>
    </>
  );
};

export default App;
