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
import service1 from "../assets/service1.svg";
import service2 from "../assets/service2.svg";
import service3 from "../assets/service3.svg";
import service4 from "../assets/service4.svg";
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

const ServiceCard = ({
  id,
  imageUrl,
  title,
  description,
  price,
  pack,
  about,
  aboutPoints,
  keyfeatures,
  features,
  week1,
  week2,
  week3,
  week4,
  week5,
  week6,
}) => {
  // const { id: idFromParams } = useParams();
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [buyPageOpen, setBuyPageOpen] = useState(false);
  const [qnaPageOpen, setQnaPageOpen] = useState(false);
  const [planSelectError, setPlanSelectError] = useState(false);
  const [dateSelectError, setDateSelectError] = useState(false);
  const [slotSelectError, setSlotSelectError] = useState(false);
  const [priceBreakOpen, setPriceBreakOpen] = useState(false);
  const [sharableLink, setSharableLink] = useState(
    `${import.meta.env.VITE_FRONTEND_URL}/services/${id}`
  );
  // const sharableLink = `${import.meta.env.VITE_FRONTEND_URL}/${cardDetails.id}`;
  const { hasCopied, onCopy } = useClipboard(sharableLink);

  const handleShare = () => {
    onCopy(); // Copies the sharable link to the clipboard
    toast({
      title: "Link copied!",
      description: `Link copied`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex
      bg="white"
      overflow="hidden"
      borderRadius="20px"
      flexDir="column"
      color="#000000"
      fontFamily="Montserrat"
      textAlign="start"
      border="1px solid #00000033"
      onClick={onOpen}
    >
      <Flex maxH={isLargerThan600 ? "200px" : "140px"} w="100%">
        <Image src={imageUrl} w="100%" h="100%" objectFit="cover" />
      </Flex>
      <Flex
        p={isLargerThan600 ? "20px" : "15px"}
        gap={isLargerThan600 && "10px"}
        flexDir="column"
      >
        <Text
          fontSize="24px"
          fontWeight="700"
          fontFamily="satoshi"
          lineHeight="30px"
        >
          {title}
        </Text>
        <Text
          fontFamily="satoshi"
          fontSize={"14px"}
          fontWeight="400"
          noOfLines={3}
          overflow="hidden"
          textOverflow="ellipsis"
          display="-webkit-box"
          style={{
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            maxHeight: "4.3em",
            lineHeight: "20px",
          }}
        >
          {description}
        </Text>
      </Flex>
      <Flex
        p={isLargerThan600 ? "20px" : "15px"}
        pt="0"
        justifyContent="space-between"
        mt={isLargerThan600 ? "auto" : "10px"}
      >
        <Flex alignItems="baseline" gap="10px">
          <Text fontFamily="satoshi" fontWeight="700" fontSize="27px">
            {price}
          </Text>
        </Flex>
        <IconButton
          isRound={true}
          variant="solid"
          onClick={onOpen}
          backgroundColor="#F57937 !important"
          // colorScheme='teal'
          aria-label="Done"
          size={isLargerThan600 ? "lg" : "sm"}
          fontSize="24px"
          icon={<ArrowForwardIcon color="white" />}
        />
      </Flex>

      <Modal
        fontFamily="Montserrat"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        {!buyPageOpen && (
          <ModalContent borderRadius="25px" minH="500px">
            {/* <Spinner mx="auto" my="auto" /> */}
            {
              <ModalHeader p="0" overflow="hidden" position="relative">
                <Flex
                  justifyContent="space-between"
                  p={isLargerThan600 ? "20px" : "10px"}
                  w="100%"
                  position="absolute"
                >
                  <IconButton
                    isRound={true}
                    variant="solid"
                    onClick={() => {
                      onClose();
                      handleRemoveIdFromUrl();
                    }}
                    colorScheme="blackAlpha"
                    aria-label="Done"
                    fontSize="20px"
                    icon={<ArrowBackIcon color="white" />}
                  />

                  <IconButton
                    isRound={true}
                    variant="solid"
                    colorScheme="blackAlpha"
                    aria-label="Done"
                    fontSize="20px"
                    // backgroundColor="#F57937 !important"
                    onClick={() => handleShare()}
                    icon={
                      hasCopied ? (
                        <FaCheck color="white" />
                      ) : (
                        <IoShareSocialOutline color="white" />
                      )
                    }
                  />
                </Flex>
                <Flex
                  maxH="200px"
                  w="100%"
                  borderTopRadius="23px"
                  overflow="hidden"
                >
                  <Image src={imageUrl} w="100%" h="100%" />
                </Flex>
              </ModalHeader>
            }

            {
              <ModalBody maxH="40vh" overflow="scroll" pt="20px">
                <Flex gap="10px" flexDir="column">
                  <Text fontFamily="satoshi" fontSize="24px" fontWeight="700">
                    {title}
                  </Text>

                  <Text fontFamily="satoshi" fontSize="18px" fontWeight="700">
                    {pack}
                  </Text>
                  <Box>
                    <Text
                      color="#00000099"
                      fontFamily="satoshi"
                      fontSize="18px"
                      fontWeight="400"
                      lineHeight="25px"
                    >
                      {about}
                    </Text>

                    <List ml="18px" sx={{ listStyleType: "disc" }}>
                      {aboutPoints?.map((item, index) => (
                        <ListItem
                          key={index}
                          color="#00000099"
                          fontFamily="satoshi"
                          fontSize="18px"
                          fontWeight="400"
                        >
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  {keyfeatures && (
                    <Flex flexDir="column">
                      <Text
                        fontFamily="satoshi"
                        fontSize="18px"
                        fontWeight="700"
                      >
                        Key Features:
                      </Text>

                      <List mt="10px" spacing={3}>
                        {keyfeatures?.map((item, index) => {
                          const parts = item.split(" - "); // Split by '-'

                          return (
                            <ListItem
                              key={index}
                              display="flex"
                              // alignItems="self-start"
                              // justifyContent="flex-start"
                            >
                              <ListIcon
                                as={SiTicktick}
                                color="green.500"
                                mt="5px"
                              />
                              <Text
                                mr={2}
                                color="#00000099"
                                fontFamily="satoshi"
                                fontSize="18px"
                                fontWeight="400"
                                lineHeight="25px"
                              >
                                <Text as="span" fontWeight="500">
                                  {parts[0]}
                                </Text>
                                {parts[1] && ` - ${parts[1]}`}{" "}
                              </Text>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Flex>
                  )}

                  {features && (
                    <Text fontFamily="satoshi" fontSize="18px" fontWeight="400">
                      {features}
                    </Text>
                  )}

                  {week1 && (
                    <List mt="8px" spacing={3} sx={{ listStyleType: "disc" }}>
                      <Flex
                        fontFamily="satoshi"
                        lineHeight="25px"
                        alignItems="center"
                      >
                        <SiTicktick color="green" />{" "}
                        <Text ml={2} fontWeight="600" fontSize="18px">
                          Week 1 & 2:{" "}
                        </Text>
                      </Flex>

                      {week1.map((item, index) => (
                        <ListItem
                          fontFamily="satoshi"
                          fontSize="18px"
                          fontWeight="400"
                          key={index}
                          lineHeight="18px"
                          ml={6}
                          color="#00000099"
                        >
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {week2 && (
                    <List mt="8px" spacing={3} sx={{ listStyleType: "disc" }}>
                      <Flex
                        fontFamily="satoshi"
                        lineHeight="25px"
                        alignItems="center"
                      >
                        <SiTicktick color="green" />{" "}
                        <Text ml={2} fontWeight="600" fontSize="18px">
                          Week 3 & 4:{" "}
                        </Text>
                      </Flex>

                      {week2.map((item, index) => (
                        <ListItem
                          fontFamily="satoshi"
                          fontSize="18px"
                          fontWeight="400"
                          key={index}
                          lineHeight="18px"
                          ml={6}
                          color="#00000099"
                        >
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {week3 && (
                    <List mt="8px" spacing={3} sx={{ listStyleType: "disc" }}>
                      <Flex
                        fontFamily="satoshi"
                        lineHeight="25px"
                        alignItems="center"
                      >
                        <SiTicktick color="green" />{" "}
                        <Text ml={2} fontWeight="600" fontSize="18px">
                          Week 5 & 6:{" "}
                        </Text>
                      </Flex>

                      {week3.map((item, index) => (
                        <ListItem
                          fontFamily="satoshi"
                          fontSize="18px"
                          fontWeight="400"
                          key={index}
                          lineHeight="18px"
                          ml={6}
                          color="#00000099"
                        >
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {week4 && (
                    <List mt="8px" spacing={3} sx={{ listStyleType: "disc" }}>
                      <Flex
                        fontFamily="satoshi"
                        lineHeight="25px"
                        alignItems="center"
                      >
                        <SiTicktick color="green" />{" "}
                        <Text ml={2} fontWeight="600" fontSize="18px">
                          Week 7 & 8:{" "}
                        </Text>
                      </Flex>

                      {week4.map((item, index) => (
                        <ListItem
                          fontFamily="satoshi"
                          fontSize="18px"
                          fontWeight="400"
                          key={index}
                          lineHeight="18px"
                          ml={6}
                          color="#00000099"
                        >
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {week5 && (
                    <List mt="8px" spacing={3} sx={{ listStyleType: "disc" }}>
                      <Flex
                        fontFamily="satoshi"
                        lineHeight="25px"
                        alignItems="center"
                      >
                        <SiTicktick color="green" />{" "}
                        <Text ml={2} fontWeight="600" fontSize="18px">
                          Week 9 & 10:{" "}
                        </Text>
                      </Flex>

                      {week5.map((item, index) => (
                        <ListItem
                          fontFamily="satoshi"
                          fontSize="18px"
                          fontWeight="400"
                          key={index}
                          lineHeight="18px"
                          ml={6}
                          color="#00000099"
                        >
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  )}

                  {week6 && (
                    <List mt="8px" spacing={3} sx={{ listStyleType: "disc" }}>
                      <Flex
                        fontFamily="satoshi"
                        lineHeight="25px"
                        alignItems="center"
                      >
                        <SiTicktick color="green" />{" "}
                        <Text ml={2} fontWeight="600" fontSize="18px">
                          Week 11 & 12:{" "}
                        </Text>
                      </Flex>

                      {week6.map((item, index) => (
                        <ListItem
                          fontFamily="satoshi"
                          fontSize="18px"
                          fontWeight="400"
                          key={index}
                          lineHeight="18px"
                          ml={6}
                          color="#00000099"
                        >
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Flex>
              </ModalBody>
            }

            {
              <ModalFooter
                boxShadow="0px -3px 31px 0px #00000024"
                display="flex"
                flexDir="column"
                mt="0px !important"
              >
                {priceBreakOpen && (
                  <Flex pb="10px" flexDir="column" minW="100%">
                    <Flex
                      w="100%"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      {price}
                      <Text>Service fees</Text>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="center">
                      10
                      <Text>Platform fees</Text>
                    </Flex>
                  </Flex>
                )}
                <Flex
                  fontFamily="Montserrat"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Flex
                    cursor="pointer"
                    onClick={() => setPriceBreakOpen(!priceBreakOpen)}
                    alignItems="center"
                    gap="10px"
                  >
                    <Text fontSize="32px" fontFamily="satoshi" fontWeight="700">
                      {/* ₹{discountedPrice.toLocaleString("en-IN")} */}
                      {price}
                    </Text>

                    {priceBreakOpen ? (
                      <HiMiniChevronUp />
                    ) : (
                      <HiMiniChevronDown />
                    )}
                  </Flex>
                  <Button
                    color="white"
                    minW="100px"
                    backgroundColor="#F57937 !important"
                    className="font-Sora"
                  >
                    Buy
                  </Button>
                </Flex>
              </ModalFooter>
            }
          </ModalContent>
        )}
        {/* {buyPageOpen && (
          <ModalContent minH="70vh" minW="fit-content" borderRadius="25px">
            <ModalHeader
              fontFamily="Montserrat"
              p="0"
              overflow="hidden"
              borderBottom="1px solid #ccc"
              position="relative"
            >
              <Flex justifyContent="space-between" p={"10px"} w="100%">
                <IconButton
                  isRound={true}
                  variant="solid"
                  background="white"
                  aria-label="Done"
                  fontSize="20px"
                  onClick={() => setBuyPageOpen(false)}
                  icon={<ArrowBackIcon color="#000000" />}
                />
                <Flex>
                  <Text>Contact Information</Text>
                </Flex>
                <Flex visibility="hidden">d</Flex>
              </Flex>
            </ModalHeader>

            <ModalBody
              maxW={isLargerThan800 && "800px"}
              fontFamily="Montserrat"
              overflow="scroll"
              p="20px"
            >
              <Flex gap="10px" flexDir={isLargerThan800 ? "row" : "column"}>
                <Flex flexDir="column">
                  <Flex mb="20px" flexDir="column">
                    <Text fontSize="25px" fontWeight={700}>
                      {title}
                    </Text>
                    <Text fontSize="14px" className="font-Sora">
                      Audio Call | {eventUrl?.duration} mins
                    </Text>
                  </Flex>
                  <Flex
                    w={isLargerThan800 ? "100%" : "fit-content"}
                    justifyContent="center"
                    flexDir="column"
                    position="relative"
                  >
                    {eventsLoading && (
                      <Flex
                        minW="100%"
                        bg="whiteAlpha.800"
                        minH="100%"
                        position="absolute"
                        display="flex"
                        justify="center"
                        alignItems="center"
                        zIndex={9999}
                      >
                        <Spinner color="#9681F7" />
                      </Flex>
                    )}
                    <Text
                      fontSize="13px"
                      fontWeight="600"
                      color={dateSelectError && "red"}
                      className="font-Sora"
                    >
                      Please select a date
                    </Text>
                    <Calendar
                      // editableDateInputs={true}
                      onChange={(date) => setDate(date)}
                      date={date}
                      onShownDateChange={handleMonthChange}
                      disabledDay={(date) => !isDateEnabled(date)}
                      // dayContentRenderer={dayContentRenderer}
                      color="#291965"
                    />
                  </Flex>
                  <Flex
                    flexDir="column"
                    gap="10px"
                    p="10px"
                    position="relative"
                  >
                    {eventsLoading && (
                      <Flex
                        minW="100%"
                        bg="whiteAlpha.800"
                        minH="100%"
                        position="absolute"
                        display="flex"
                        justify="center"
                        alignItems="center"
                        zIndex={9999}
                      ></Flex>
                    )}
                    {slotSelectError && (
                      <Text fontSize="13px" fontWeight="600" color={"red"}>
                        Please select a Time Slot
                      </Text>
                    )}
                    <Flex gap="5px" maxW="315px" overflow="scroll">
                      {availableEventsData?.dateByTime
                        ?.filter(
                          (item) =>
                            new Date(item?.date).toDateString() ===
                            new Date(date).toDateString()
                        )?.[0]
                        ?.availableSlots?.map((item, index) => (
                          <Flex
                            key={index}
                            cursor="pointer"
                            border="2px solid #9a80ff"
                            padding="5px 15px"
                            borderRadius="5px"
                            color={
                              availableSlots?.time === item?.time
                                ? "white"
                                : "black"
                            }
                            fontSize="13px"
                            fontWeight="500"
                            _hover={{ bg: "#cec3ff" }}
                            bg={
                              availableSlots?.time === item?.time
                                ? "#291965"
                                : "#eae5ff"
                            }
                            onClick={() => setAvailableSlots(item)}
                          >
                            {item?.time}
                          </Flex>
                        ))}
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  borderLeft={isLargerThan800 && "1px solid #ccc"}
                  pl={isLargerThan800 && "20px"}
                  flexDir="column"
                >
                  <form
                    onSubmit={(e) => {
                      handleServiceBookingForm();
                      e.preventDefault();
                    }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Flex
                      flexDir="column"
                      mt="auto"
                      gap="10px"
                      maxW="600px"
                      fontSize="14px"
                      mx="auto"
                    >
                      <FormControl isRequired>
                        <FormLabel
                          mb="5px"
                          fontSize="14px"
                          fontWeight="500"
                          className="font-Sora"
                        >
                          Full Name
                        </FormLabel>
                        <Input
                          fontSize="14px"
                          value={formData?.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          type="text"
                          placeholder="Enter your full name"
                          className="font-Sora"
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel
                          mb="5px"
                          fontSize="14px"
                          fontWeight="500"
                          className="font-Sora"
                        >
                          Phone Number
                        </FormLabel>
                        <Input
                          fontSize="14px"
                          value={formData?.phoneNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phoneNumber: e.target.value,
                            })
                          }
                          type="tel"
                          placeholder="Enter your phone number"
                          className="font-Sora"
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel
                          mb="5px"
                          fontSize="14px"
                          fontWeight="500"
                          className="font-Sora"
                        >
                          Email ID
                        </FormLabel>
                        <Input
                          fontSize="14px"
                          value={formData?.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          type="email"
                          placeholder="Enter your email address"
                          className="font-Sora"
                        />
                      </FormControl>

                      <UnorderedList
                        color="gray.700"
                        fontSize="12px"
                        fontWeight="600"
                        mt="20px"
                      >
                        <ListItem className="font-Sora">
                          Your information is safe with me
                        </ListItem>
                        <ListItem mt="5px" className="font-Sora">
                          This E-mail will used to share the information
                          regarding your purchase
                        </ListItem>
                      </UnorderedList>
                    </Flex>
                    <Flex
                      justifyContent="space-between"
                      w="100%"
                      mt="20px"
                      flexDir="column"
                    >
                      <Button
                        minW="100px"
                        w="100%"
                        fontSize="12px"
                        fontWeight="600"
                        type="submit"
                        backgroundColor="#F57937 !important"
                        isLoading={paymentButtonLoading}
                        color="white"
                        className="font-Sora"
                      >
                        Buy
                      </Button>
                      <Flex
                        alignItems="center"
                        gap="10px"
                        alignSelf="flex-end"
                        mt="25px"
                      >
                        <Image w="12px" src={shieldBlack} />
                        <Text
                          fontSize="11px"
                          fontWeight="600"
                          color="#00000099"
                        >
                          Powered by
                        </Text>
                        <Image height="10px" src={influcentLogoBlack} />
                      </Flex>
                    </Flex>
                  </form>
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        )} */}
      </Modal>
    </Flex>
  );
};

const serviceData = [
  {
    id: "1",
    serviceImage: service1,
    heading: "Athlete Mindset & Performance Coaching ",
    description:
      "This program integrates mindset coaching, mental conditioning, and performance strategies to help athletes unlock their full potential on and off the field.",
    price: "₹ 18,000/-",
    package: "About Package:",
    about:
      "A personalized monthly coaching program designed for athletes who want to:",
    aboutPoints: [
      "Master their mental game.",
      "Build unwavering focus and resilience.",
      "Perform consistently under pressure.",
    ],
    keyfeatures: [
      "Customized Mindset Strategies - Tailored plans for handling performance anxiety, self-doubt, and high-pressure situations.",
      "Visualization and Mental Rehearsal - Learn to mentally rehearse for success in competitions and overcome mental blocks.",
      "Focus and Concentration Techniques - Proven tools to maintain peak focus, even during high-stakes moments.",
      "Goal Setting for Athletes - Set realistic, action-driven goals and create a clear roadmap to achieve them.",
      "Overcoming Setbacks - Build resilience to bounce back stronger from injuries, defeats, or failures",
      "Peak Performance Habits - Cultivate habits that optimize recovery, mental clarity, and consistent performance.",
    ],
  },
  {
    id: "2",
    serviceImage: service2,
    heading: "Relationship Coaching & Therapy",
    description:
      "This journey of 12 sessions lets work on your relationship with your partner.",
    price: "₹ 50,000/-",
    package: "About the Appointment:",
    about:
      "This journey of 12 sessions lets work on your relationship with your partner.",
    aboutPoints: [
      "This journey of 12 sessions lets work on your relationship with your partner.",
      "Understand myself",
      "Understand him/her",
      "Delve deeper and work on our own selves",
      "Work on our relationship together",
      "Create goals for ourselves and our relationship",
    ],
  },
  {
    id: "3",
    serviceImage: service3,
    heading: "Empowered Living Coaching Program",
    description:
      "This is an online One-on-One personal coaching program working towards creating the dream life.",
    price: "₹ 50,000/-",
    package: "About the Appointment:",
    about:
      "Hey You! I'm so excited that you're ready to work on yourself Emotionally,Mentally, Physically and Spiritually! In just 3 Months you'll be able to experience CLARITY, GROWTH and TRANSFORMATION.",
    about2:
      "This is an online One-on-One personal coaching program working towards creating the dream life.",
    aboutPoints: [],
    features: "In this 12 week program you get to learn:",
    week1: [
      "How the mind works",
      "Mind-Body connection",
      "Emotions & their Impact on the Body",
      "Identifying Patterns & Behaviours",
      "Setting priorities",
    ],
    week2: [
      "Identifying Core Issues",
      "Inner Child Healing",
      "Emotion Management",
      "Regulating Emotional Energy",
      "Release Past Trauma",
    ],
    week3: [
      "Identifying Mental Blockages",
      "Releasing the Blockages",
      "Creating New Habits",
      "Become aware about your Mind & Body",
      "Healing Relationships with Self & Others",
    ],
    week4: [
      "Forgive Yourself & Others",
      "Accepting of Self & Others",
      "Mindset Shift",
      "Creating New Habits & Beliefs",
      "Reframing the Sub-Conscious",
    ],
    week5: [
      "Gratitude & Self Love Practice",
      "Law of Attraction",
      "Manifestation Process",
      "Setting Healthy Boundaries",
      "Setting Intentions & Goals",
    ],
    week6: [
      "Tapping into your Higher Self",
      "Taking Aligned Action",
      "Designing the Dream Life",
      "Identifying Inspiration & Motivation",
      "Create a Sustainable Plan",
    ],
  },
  {
    id: "4",
    serviceImage: service4,
    heading: "Empowered Living  E-Book ",
    description:
      "Are you ready to be Happy, Healthy & Healed? Change your MINDSET and MANIFEST your DREAM!",
    price: "₹ 19/-",
    about: "",
    aboutPoints: [],
  },
];
