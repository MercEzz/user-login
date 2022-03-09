import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

ReactDOM.render(
  <ChakraProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
