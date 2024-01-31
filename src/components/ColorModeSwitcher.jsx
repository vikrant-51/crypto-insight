import React from "react";
import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Button
      size={"md"}
      fontSize={"2xl"}
      variant={"ghost"}
      color={"#bf9853"}
      marginLeft={"2"}
      icon={<SwitchIcon />}
      onClick={toggleColorMode}
    ><SwitchIcon/></Button>
  );
};

export default ColorModeSwitcher;
