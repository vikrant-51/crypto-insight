import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: ["0px", "-30px"],
        }}
        transition={{
          type: "spring",
          stiffness: 50, // Adjust the stiffness for bounce intensity
          damping: 20, // Adjust the damping for bounce duration
          mass: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image w={"full"} h={"full"} objectFit={"contain"} src={btcSrc} />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-40px"}
        fontFamily={"Bebas Neue"}
      >
        VVcrypto
      </Text>
    </Box>
  );
};

export default Home;
