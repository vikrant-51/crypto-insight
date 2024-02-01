import React from "react";
import {
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      aria-label="Toggle Color Modes"
      colorScheme="orange"
      borderColor={"#bf9853"}
      variant="outline"
      onClick={toggleColorMode}
      icon={<SwitchIcon color="#bf9853"/>}
    />
  );
};

export default ColorModeSwitcher;
