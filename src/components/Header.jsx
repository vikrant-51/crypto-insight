import { Button, HStack, IconButton, Spacer, Text } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";
import ColorModeSwitcher from "./ColorModeSwitcher";

const Header = () => {
  return (
    <HStack
      p={4}
      shadow={"base"}
      justifyContent={"space-between"}
      bgColor={"blackAlpha.900"}
    >
      <Text fontFamily={"Bebas Neue"} color={"#bf9853"} fontSize={"4xl"}>
        VVCRYPTO
      </Text>
      <Spacer />
      <ColorModeSwitcher />
      <Button variant={"unstyled"} color={"#bf9853"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"#bf9853"}>
        <Link to="/coins">Coins</Link>
      </Button>
      <Button variant={"unstyled"} color={"#bf9853"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
    </HStack>
  );
};

export default Header;
