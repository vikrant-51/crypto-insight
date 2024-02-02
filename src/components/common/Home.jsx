import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import btcImg from "../../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Stack bgColor={"blackAlpha.900"} w={"full"} h={"full"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: ["0px", "-30px"],
        }}
        transition={{
          type: "spring",
          stiffness: 20, // Adjust the stiffness for bounce intensity
          damping: 10, // Adjust the damping for bounce duration
          mass: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image w={"full"} h={"full"} objectFit={"contain"} src={btcImg} />
      </motion.div>
      <Text
        textShadow="5px 2px #63171B"
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"#bf9853"}
        mt={"-40px"}
        fontFamily={"Bebas Neue"}
      >
        Where Knowledge Meets Crypto - CoinInsight.{" "}
      </Text>
    </Stack>
  );
};

export default Home;
