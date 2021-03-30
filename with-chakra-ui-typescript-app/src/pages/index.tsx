import { Flex } from "@chakra-ui/react";
import React from "react";
import GroupCarousel from "../components/GroupedCarousel";

const Index = () => {
  return (
    <Flex mx="auto" w="80%" mt="40px">
      <GroupCarousel />
    </Flex>
  );
};

export default Index;
