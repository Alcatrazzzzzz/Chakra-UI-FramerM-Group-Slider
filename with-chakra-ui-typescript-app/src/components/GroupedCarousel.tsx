import { Flex, Icon } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import AliceCar from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { CardBlock } from "./CardBlock";

interface AliceCarouselProps {}

const GroupCarousel: React.FC<AliceCarouselProps> = ({}) => {
  const [activeIndex, setActiveSlide] = useState(0);
  const [isDrag, setIsDrag] = useState(false); // used to prevent clicking on dragging
  const refCar = useRef();

  let items = [];
  for (let i = 0; i < 3; i++) {
    items.push(
      <Flex justifyContent="space-between" w="100%" p="0 20px">
        <CardBlock active={!isDrag} v="1" />
        <CardBlock active={!isDrag} v="1" />
        <CardBlock active={!isDrag} v="2" />
      </Flex>
    );
  }

  const renderDotsItem = ({ isActive }: any) => {
    return isActive ? (
      <Flex
        cursor="pointer"
        m="0 5px"
        borderRadius="50px"
        w="12px"
        h="12px"
        bgColor="#D3004A"
        transition="0.5s"
      />
    ) : (
      <Flex
        cursor="pointer"
        m="0 5px"
        borderRadius="50px"
        w="12px"
        h="12px"
        bgColor="#bababb"
        transition="0.5s"
      />
    );
  };

  const onSlideChanged = () => {
    setActiveSlide((refCar.current as any).state.activeIndex);
  };

  return (
    <>
      <AliceCar
        ref={refCar as any}
        disableButtonsControls
        autoHeight
        // infinite
        mouseTracking
        touchTracking
        items={items}
        renderDotsItem={renderDotsItem}
        activeIndex={activeIndex}
        onSlideChanged={onSlideChanged}
      />
      <Flex
        w="90%"
        left="50%"
        transform="translate(-50%, 0)"
        pointerEvents="none"
        mt="80px"
        position="absolute"
      >
        <Icon
          pointerEvents="visible"
          onClick={() => refCar.current && (refCar.current as any).slidePrev()}
          color="mDBlue"
          cursor="pointer"
          w="60px"
          h="60px"
          as={IoIosArrowBack}
        />
        <Icon
          pointerEvents="visible"
          onClick={() => refCar.current && (refCar.current as any).slideNext()}
          color="mDBlue"
          ml="auto"
          cursor="pointer"
          w="60px"
          h="60px"
          as={IoIosArrowForward}
        />
      </Flex>
    </>
  );
};

export default GroupCarousel;
