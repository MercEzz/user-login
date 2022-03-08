import React, { useEffect, useState, useReducer } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("ClEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
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
          alignItems="stretch"
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
            borderColor={emailState === false ? "red" : "none"}
            background={emailState === false ? "#fbdada" : "none"}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </Flex>
        <Flex
          m="1rem 0"
          display={"flex"}
          alignItems="stretch"
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
            borderColor={passwordState === false ? "red" : "none"}
            background={passwordState === false ? "#fbdada" : "none"}
            value={passwordState.value}
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
