import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Box
      w={"full"}
      height={"90vh"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Alert
        status="error"
        variant="solid"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          ERROR
        </AlertTitle>
        <AlertDescription maxWidth="sm">{message}</AlertDescription>
      </Alert>
    </Box>
  );
};

export default ErrorComponent;
