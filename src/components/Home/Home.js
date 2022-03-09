import { Box, Button, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Home = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Box w="90%" maxW={"90vw"} p="3rem" m="2rem auto" textAlign={"center"}>
      <Heading as="h1">Welcome back!</Heading>
      <Button
        onClick={authCtx.onLogout}
        fontStyle={"inherit"}
        background="purple.500"
        border={"purple.500"}
        m={2}
        p="0.5rem 1.5rem"
        color={"white"}
        cursor="pointer"
        boxShadow={"0 2px 4px rgba(0,0,0, 0.26)"}
        _focus={{ outline: "none" }}
        _hover={{
          color: "#f3cafb",
          boxShadow: "0 2px 10px rgba(0,0,0,0.26)",
        }}
        _active={{
          color: "#f3cafb",
          boxShadow: "0 2px 10px rgba(0,0,0,0.26)",
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Home;
