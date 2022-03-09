import React, { useRef, useImperativeHandle } from "react";
import { Flex, FormLabel, Input } from "@chakra-ui/react";

const InputB = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <Flex
      m="1rem 0"
      display={"flex"}
      alignItems="stretch"
      flexDir={{ base: "column", lg: "row" }}
    >
      <FormLabel
        htmlFor={props.id}
        display={"block"}
        fontWeight="bold"
        flex={"1"}
        color="gray.700"
        mb={"0.5rem"}
      >
        {props.label}
      </FormLabel>
      <Input
        ref={inputRef}
        type={props.type}
        id={props.id}
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
        borderColor={props.value === false ? "red" : "none"}
        background={props.value === false ? "#fbdada" : "none"}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </Flex>
  );
});

export default InputB;
