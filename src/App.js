import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

const App = () => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <Box mt="6rem">
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </Box>
    </>
  );
};

export default App;
