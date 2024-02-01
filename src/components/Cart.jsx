import React from "react";
import { DeleteIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Box,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Tag,
  TagLabel,
  StackDivider,
  CardHeader,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subTotal, shipping, tax, total } = useSelector(
    (state) => state.cart
  );
  const toast = useToast();

  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch({ type: "addToCart", payload: { id } });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({ type: "decrement", payload: id });
  };
  const deleteHandler = (id) => {
    dispatch({ type: "deleteFromCart", payload: id });
    dispatch({ type: "calculatePrice" });
    toast({
      title: "Item Removed",
      description: `Item has been removed from the cart!`,
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Stack direction={{base:"column", sm:"row",md:"row"}} justifyContent={"space-between"}>
      {cartItems.length > 0 ? (
        <Box w={{base:"100%", sm:"70%",md:"70%"}}>
          {cartItems.map((i) => (
            <CartItem
              key={i.id}
              id={i.id}
              imgSrc={i.img}
              name={i.name}
              symbol={i.symbol}
              price={i.price}
              qty={i.qty}
              currencySymbol={i.currencySymbol}
              increment={increment}
              decrement={decrement}
              deleteHandler={deleteHandler}
            />
          ))}
        </Box>
      ) : (
        <Box
          w={"full"}
          height={"90vh"}
          display="flex"
          justifyContent="flex-start"
        >
          <Alert
            status="error"
            variant="left-accent"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Your CoinInsight Cart is Empty!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Please add items to the cart to buy coins!
            </AlertDescription>
          </Alert>
        </Box>
      )}
      {cartItems.length > 0 && (
      <Box width={{base:"100%", sm:"30%", md:"30"}}> {/* Adjust the width based on your design */}
        <Pricing
          subTotal={subTotal}
          shipping={shipping}
          tax={tax}
          total={total}
        />
      </Box>
    )}
    </Stack>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  symbol,
  currencySymbol,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <Card maxW="5xl" m={"10"} fontFamily={"Roboto"}>
    <CardBody>
      <Image
        src={imgSrc}
        w={20}
        h={20}
        alt="Green double couch with wooden legs"
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="xl" textTransform={"uppercase"}>
          {symbol}
        </Heading>
        <Text fontSize={"20"}>{name}</Text>
        <Text color="blue.600" fontSize="2xl">
          {currencySymbol}
          {price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing="2">
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={() => increment(id)}
        >
          <AddIcon />
        </Button>
        <Tag size="lg" variant="outline">
          <TagLabel>QTY : {qty}</TagLabel>
        </Tag>
        <Button
          variant="solid"
          colorScheme={qty > 1 ? "blue" : "blackAlpha"}
          onClick={() => decrement(id)}
          disabled={!qty > 1}
        >
          <MinusIcon />
        </Button>
        <Button variant="ghost" onClick={() => deleteHandler(id)}>
          <DeleteIcon />
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
);

const Pricing = ({ subTotal, shipping, tax, total }) => (
  <Card mt={10} pos={"sticky"} top={"50"} right={"0"}>
    <CardHeader>
      <Heading size="md">Cart Summary</Heading>
    </CardHeader>

    <CardBody>
      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Subtotal
          </Heading>
          <Text pt="2" fontSize="sm">
            {subTotal}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Shipping
          </Heading>
          <Text pt="2" fontSize="sm">
            {shipping}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Tax
          </Heading>
          <Text pt="2" fontSize="sm">
            {tax}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Total
          </Heading>
          <Text pt="2" fontSize="sm">
            {total}
          </Text>
        </Box>
      </Stack>
    </CardBody>
  </Card>
);

export default Cart;
