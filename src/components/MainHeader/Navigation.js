import { useContext } from "react";
import { Box, Button, Link, ListItem, UnorderedList } from "@chakra-ui/react";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const ctx = useContext(AuthContext);
  return (
    <Box>
      <UnorderedList
        listStyleType={"none"}
        m="0"
        p="0"
        display={"flex"}
        alignItems="center"
      >
        {ctx.isLoggedIn && (
          <ListItem m="0" ml="2rem">
            <Link
              href="/"
              textDecor="none"
              color="white"
              _hover="#f3cafb"
              _active="#f3cafb"
            >
              Users
            </Link>
          </ListItem>
        )}
        {ctx.isLoggedIn && (
          <ListItem m="0" ml="2rem">
            <Link
              href="/"
              textDecor="none"
              color="white"
              _hover="#f3cafb"
              _active="#f3cafb"
            >
              Admin
            </Link>
          </ListItem>
        )}
        {ctx.isLoggedIn && (
          <ListItem m="0" ml="2rem">
            <Button
              onClick={ctx.onLogout}
              fontStyle={"inherit"}
              background="purple.500"
              border={"purple.500"}
              p="0.5rem 1.5rem"
              color={"white"}
              cursor="pointer"
              boxShadow={"0 2px 4px rgba(0,0,0, 0.26)"}
              borderRadius="20px"
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
          </ListItem>
        )}
      </UnorderedList>
    </Box>
  );
};

export default Navigation;
