import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeScript />
      <ChakraProvider theme={theme}>
    <Provider store={store}>
        <App />
    </Provider>
      </ChakraProvider>
  </React.StrictMode>
);

export const server = "https://api.coingecko.com/api/v3";
