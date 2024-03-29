import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";

import Loader from "./common/Loader";
import CoinCard from "./CoinCard";
import ErrorComponent from "./common/ErrorComponent";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );

        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error)
    return (
      <ErrorComponent message="Error while fetching Coins!  Refresh your page after few seconds!" />
    );

  return (
    <Container maxW={"100%"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={8}>
            <HStack spacing={4}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} rowGap={10} justifyContent={"space-evenly"}>
            {coins.map((i) => {
              return (
                <CoinCard
                  key={i.id}
                  id={i.id}
                  name={i.name}
                  img={i.image}
                  symbol={i.symbol}
                  price={i.current_price}
                  currencySymbol={currencySymbol}
                  qty={1}
                />
              );
            })}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={8}>
            {btns.map((item, index) => {
              return (
                <Button
                  key={index}
                  bgColor={"blackAlpha.900"}
                  color={"white"}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>
              );
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
