import { Box, Button, IconButton, Stack, Text } from "@chakra-ui/react";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { SiCardano } from "react-icons/si";
import { IoReorderThreeOutline } from "react-icons/io5";
import { TbArrowsCross } from "react-icons/tb";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOpenClose = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Stack
      direction={{ base: "column", sm: "column", md: "row" }}
      p={4}
      shadow={"base"}
      justifyContent={"space-between"}
      bgColor={"blackAlpha.900"}
      fontFamily={"Roboto"}
    >
      <Stack
        spacing={10}
        fontFamily={"Bebas Neue"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <SiCardano size={"3rem"} color={"#bf9853"} />
        <Text color={"#bf9853"} fontSize={"2.5rem"}>
          <Link to="/">CoinInsight</Link>
        </Text>

        <IconButton
          variant="outline"
          colorScheme="orange"
          borderColor={"#bf9853"}
          aria-label="Open & Close Menu"
          display={{ base: "block", sm: "none", md: "none" }}
          onClick={menuOpenClose}
          fontSize="4xl"
          icon={isMenuOpen ? <TbArrowsCross /> : <IoReorderThreeOutline />}
        />
      </Stack>
      <Box display={{ base: "none", sm: "block", md: "block" }}>
        <NavLinks />
      </Box>
      {isMenuOpen && <NavLinks />}
    </Stack>
  );
};

const NavLinks = ({ arr = ["Home", "Coins", "Exchanges", "Cart"] }) => (
  <Stack
    spacing={7}
    letterSpacing={5}
    justifyContent={"center"}
    direction={{ base: "column", sm: "row", md: "row" }}
  >
    <ColorModeSwitcher />
    {arr.map((i) => {
      return (
        <Button
          key={i}
          variant={"unstyled"}
          fontWeight={"700"}
          fontSize={"1.4rem"}
          color={"#bf9853"}
        >
          <Link to={i === "Home" ? "/" : `${i.toLowerCase()}`}>{i}</Link>
        </Button>
      );
    })}
  </Stack>
);

export default Header;
