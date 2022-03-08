import { Flex, Heading } from "@chakra-ui/react";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <Flex
      pos={"fixed"}
      top="0"
      left="0"
      w="full"
      height={"5rem"}
      display="flex"
      justifyContent="space-between"
      alignItems={"center"}
      background="purple"
      padding={"0 2rem"}
    >
      <Heading as="h1" size={"lg"} color={"white"}>
        A Typical Page
      </Heading>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </Flex>
  );
};

export default MainHeader;
