import { Flex, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex w="90%" maxW={"40rem"} p="3rem" m="2rem auto" textAlign={"center"}>
      <Heading as="h1">Welcome back!</Heading>
    </Flex>
  );
};

export default Home;
