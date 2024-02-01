import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  Heading,
  Image,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CoinCard = ({
  id,
  name,
  price,
  symbol,
  img,
  currencySymbol = "₹",
  qty,
}) => {
  const toast = useToast();

  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    console.log(options);
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast({
      title: "Item Added",
      description: `${name} has been added to the cart!`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Card direction={{ base: "column", sm: "row" }}>
      <VStack bg={"blackAlpha.900"} p={"4"} rounded="md">
        <VStack
          w={52}
          shadow={"lg"}
          p={"8"}
          boxShadow="lg"
          rounded="md"
          bg={"white"}
          color={"blackAlpha.900"}
          transition={"all 0.5s"}
          m={4}
          css={{ "&:hover": { transform: "scale(1.1)" } }}
        >
          <Image src={img} w={20} h={20} objectFit={"contain"} alt="coin" />
          <Heading
            size={"md"}
            textTransform={"uppercase"}
            fontFamily={"Roboto"}
            noOfLines={1}
          >
            {symbol}
          </Heading>
          <Text noOfLines={1}>{name}</Text>
          <Text noOfLines={1}>
            {price ? `${currencySymbol}${price}` : "NA"}
          </Text>
        </VStack>
        <CardFooter>
          <ButtonGroup>
            <Button><Link to={`/coin/${id}`}>View</Link></Button>
            <Button
              colorScheme={"yellow"}
              onClick={() =>
                addToCartHandler({
                  name,
                  price,
                  id,
                  img,
                  symbol,
                  currencySymbol,
                  qty,
                })
              }
            >
              Add To Cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </VStack>
    </Card>
    //Old Style but good
    // <VStack>
    //       <Link to={`/coin/${id}`}>
    //         <VStack
    //           w={52}
    //           shadow={"lg"}
    //           p={"8"}
    //           borderRadius={"lg"}
    //           transition={"all 0.5s"}
    //           m={4}
    //           css={{ "&:hover": { transform: "scale(1.1)" } }}
    //         >
    //           <Image src={img} w={10} h={10} objectFit={"contain"} alt="coin" />
    //           <Heading size={"md"} noOfLines={1}>
    //             {symbol}
    //           </Heading>
    //           <Text noOfLines={1}>{name}</Text>
    //           <Text noOfLines={1}>
    //             {price ? `${currencySymbol}${price}` : "NA"}
    //           </Text>
    //         </VStack>
    //       <Button
    //         colorScheme={"yellow"}
    //         onClick={() =>
    //           addToCartHandler({ name, price, id, img, currencySymbol, qty })
    //         }
    //       >
    //         Add To Cart
    //       </Button>
    //       </Link>
    // </VStack>
  );
};

export default CoinCard;
