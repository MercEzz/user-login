import React, { useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Flex
      bg="white"
      boxShadow={"0 2px 8px rgba(0,0,0,0.26)"}
      borderRadius="10px"
      w="90%"
      maxW={"40rem"}
      m="2rem auto"
      p="2rem"
    >
      <FormControl>
        <Flex
          m="1rem 0"
          display={"flex"}
          alignItems={{ base: "center", lg: "stretch" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <FormLabel
            htmlFor="email"
            display={"block"}
            fontWeight="bold"
            flex={"1"}
            color="gray.700"
            mb={"0.5rem"}
          >
            E-Mail
          </FormLabel>
          <Input
            type="email"
            id="email"
            size="sm"
            flex={"3"}
            fontStyle="inherit"
            p="0.35rem"
            borderRadius={"6px"}
            border="1px solid #ccc"
            _focus={{
              outline: "none",
              borderColor: "purple.900",
              background: "#f6dbfc",
            }}
            borderColor={emailIsValid === false ? "red" : "none"}
            background={emailIsValid === false ? "#fbdada" : "none"}
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </Flex>
        <Flex
          m="1rem 0"
          display={"flex"}
          alignItems={{ base: "center", lg: "stretch" }}
          flexDir={{ base: "column", lg: "row" }}
        >
          <FormLabel
            htmlFor="password"
            display={"block"}
            fontWeight="bold"
            flex={"1"}
            color="gray.700"
            mb={"0.5rem"}
          >
            Password
          </FormLabel>
          <Input
            type="password"
            id="password"
            size="sm"
            flex={"3"}
            fontStyle="inherit"
            p="0.35rem"
            borderRadius={"6px"}
            border="1px solid #ccc"
            _focus={{
              outline: "none",
              borderColor: "purple.900",
              background: "#f6dbfc",
            }}
            borderColor={passwordIsValid === false ? "red" : "none"}
            background={passwordIsValid === false ? "#fbdada" : "none"}
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </Flex>
        <Box textAlign={"center"}>
          <Button
            fontStyle={"inherit"}
            border="1px solid purple.900"
            bg={"purple.900"}
            color="white"
            p="0.75rem 3.5rem"
            cursor={"pointer"}
            fontSize="1.15rem"
            borderRadius={"30px"}
            _hover={{ background: "purple.500", borderColor: "purple.500" }}
            _active={{ background: "purple.500", borderColor: "purple.500" }}
            _focus={{ outline: "none" }}
            type="submit"
            disabled={!formIsValid}
            onClick={submitHandler}
          >
            Login
          </Button>
        </Box>
      </FormControl>
    </Flex>
  );
};

export default Login;
