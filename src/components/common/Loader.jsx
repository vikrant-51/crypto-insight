import {
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <VStack transform={"scale(3)"}>
        <Spinner
          label="Loading..."
          variant="bold"
          size="xl"
          speed="0.6s"
          emptyColor="blackAlpha.900"
          color="blackAlpha.500"
        />
      <Text noOfLines={1}>Loading...</Text>
      </VStack>
    </VStack>
  );
};

export default Loader;
