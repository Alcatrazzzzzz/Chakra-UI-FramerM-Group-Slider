import { Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const MotionFlex = motion(Flex);

interface CardBlockProps {
  v: "1" | "2";
  active: boolean;
}

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-60%" },
};

export const CardBlock: React.FC<CardBlockProps> = ({ v, active = true }) => {
  const [open, setOpen] = useState(false);
  const text =
    "King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power. Beneath the glamorous exterior of a powerful king lurks the shell of man, devoid of purpose and will.";
  const realText = text.split(" ").splice(0, 18).join(" ") + "...";
  return v === "1" ? (
    <Flex
      w={["220px", "220px", "220px", "270px"]}
      h={["190px", "190px", "190px", "220px"]}
      p="10px"
      backgroundImage='url("/img/Adult-Arthur.png")'
      backgroundSize="95%"
      backgroundRepeat="no-repeat"
      backgroundColor="white"
      sx={{ backgroundPosition: "550% 110%" }}
      borderRadius={10}
      flexDirection="column"
    >
      <Heading
        fontFamily="'Helvetica Bold', sans-serif"
        fontWeight="bold"
        fontSize={[15, 15, 15, 18]}
        maxW="80%"
      >
        The beginning after the end
      </Heading>
      <Flex alignItems="center" mt="4px" color="#D3004A">
        <Icon as={FaHeart} />
        <Text
          fontFamily="'Helvetica Bold', sans-serif"
          fontWeight="bold"
          ml="5px"
        >
          8.2 k
        </Text>
      </Flex>
      <Text
        fontFamily="'Helvetica Regular', sans-serif"
        fontSize="16px"
        mt="auto"
        color="#00605E"
      >
        Action
      </Text>
    </Flex>
  ) : (
    //second variant
    <Flex
      cursor="pointer"
      onClick={active ? () => setOpen(!open) : () => {}}
      position="relative"
      w="540px"
      h="220px"
      bgColor="white"
      borderRadius={10}
      overflow="hidden"
    >
      <Flex
        w="100%"
        h="100%"
        backgroundImage='url("/img/TBATE.jpg")'
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        sx={{ backgroundPosition: "100% 60%" }}
      />
      <MotionFlex
        w="100%"
        h="100%"
        p="12px"
        position="absolute"
        backgroundColor="rgb(0, 0, 0, 0.8)"
        //animate
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.2 }}
      >
        <Flex pointerEvents="none" flexDir="column" h="100%">
          <Heading
            fontFamily="'Helvetica Bold', sans-serif"
            fontWeight="bold"
            color="white"
            fontSize={24}
            maxW="60%"
          >
            The beginning after the end
          </Heading>
          <Flex alignItems="center" mt="10px" mb="2px" color="mRed">
            <Icon as={FaHeart} />
            <Text
              fontFamily="'Helvetica Bold', sans-serif"
              fontWeight="bold"
              ml="5px"
            >
              8.2 k
            </Text>
          </Flex>
          <Text
            mt="4px"
            fontFamily="'Helvetica Regular', sans-serif"
            fontSize="14px"
            lineHeight="22px"
            color="#AAABAD"
            maxW="70%"
          >
            {realText}
          </Text>
          <Text
            fontFamily="'Helvetica Regular', sans-serif"
            fontSize="16px"
            mt="auto"
            color="#07b9b6"
          >
            Action
          </Text>
        </Flex>
        <Button
          _hover={{ color: "white", backgroundColor: "mRed" }}
          fontFamily="'Helvetica Bold', sans-serif"
          fontWeight="bold"
          fontSize="18px"
          backgroundColor="white"
          color="mRed"
          variant="solid"
          borderRadius={4}
          size="sm"
          p="15px 25px"
        >
          Read
        </Button>
      </MotionFlex>
    </Flex>
  );
};
