import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Image,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Text,
  useClipboard,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import guidance from "../assets/guidance.svg";
import guarante from "../assets/guarante.svg";
import payment from "../assets/payment.svg";
import destiny from "../assets/destiny.svg";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { FaCheck } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import { SiTicktick } from "react-icons/si";
import border from "../assets/border.svg";

function Services() {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan300] = useMediaQuery("(min-width: 300px)");

  return (
    <div>
      <Navbar select={"services"} />

      <Box
        w="85%"
        justify="space-between"
        alignItems="center"
        mx="auto"
      >
        <Flex fontSize="14px" alignSelf={"center"} justifyContent="center">
          <div className="flex flex-col justify-center items-center mb-16">
            <h2 className="text-[32px] font-semibold my-3">Services</h2>
            <img src={border}></img>
            <h2 className="font-Sora text-[#00000099]  text-[18px] font-[400] mt-5 w-[65%] text-center max-md:w-[90%]" >Explore our range of services designed to provide deep insights and clarity into various aspects of your life.</h2>
          </div>
        </Flex>

      </Box>

        {/* service cards */}



      <Flex
        height="307px"
        justifyContent="center"
        alignItems="center"
        bgImage={destiny}
        bgPosition="center"
        bgSize="cover"
      >
        <Text
          fontSize={isLargerThan600 ? "48px" : "28px"}
          fontWeight="600"
          color="#FFFFFF"
          textAlign="center"
          w={isLargerThan600 ? "55%" : "80%"}

        >
          "Your Destiny is Written in the Stars—Let’s Decode It Together!"
        </Text>
      </Flex>

      <Flex
        w="75%"
        justifyContent="space-between"
        alignItems="center"
        h={isLargerThan600 ? "200px" : "100%"}
        m="auto"
        wrap="wrap"
        direction={isLargerThan600 ? "row" : "column"}
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          my={isLargerThan600 ? "" : "50px"}
        >
          <Image src={guidance} />
          <Text className="font-Sora" fontSize="16px" fontWeight="500" mt={4}>
            Ethical & Professional Guidance
          </Text>
        </Flex>

        <Flex direction="column" justifyContent="center" alignItems="center">
          <Image src={guarante} />
          <Text className="font-Sora" fontSize="16px" fontWeight="500" mt={4}>
            100% Confidentiality Guaranteed
          </Text>
        </Flex>

        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          my={isLargerThan600 ? "" : "50px"}
        >
          <Image src={payment} />
          <Text className="font-Sora" fontSize="16px" fontWeight="500" mt={4}>
            Secure Payments
          </Text>
        </Flex>
      </Flex>

      <Footer />
    </div>
  );
}

export default Services;

