import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import Loader from "./common/Loader";
import ErrorComponent from "./common/ErrorComponent";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);

        setExchanges(data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if(error) return <ErrorComponent message="Error while fetching exchanges! Refresh your page after few seconds!"/>

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => {
              return (
                <ExchangeCard
                  key={i.id}
                  name={i.name}
                  img={i.image}
                  rank={i.trust_score_rank}
                  url={i.url}
                />
              );
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target="blank" boxShadow={"darl-lg"}>
    <VStack
      w={52}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.5s"}
      m={4}
      css={{ "&:hover": { transform: "scale(1.1)" } }}
    >
      <Image src={img} w={10} h={10} objectFit={"contain"} alt="exchange" />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;
