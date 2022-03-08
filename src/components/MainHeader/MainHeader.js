import { Flex, Heading } from "@chakra-ui/react";

const MainHeader = () => {
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
      <Heading as="h1" color={"white"}>
        A Typical Page
      </Heading>
    </Flex>
  );
};

export default MainHeader;
