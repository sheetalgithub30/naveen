import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/img1.svg";
import img1Border from "../assets/IMG1Border.svg";
import top from "../assets/top.png";
import subtract from "../assets/Subtract.svg";
import img2 from "../assets/img2.svg";
import aboutBorder from "../assets/aboutRectangle.svg";
import border from "../assets/border.svg";
import borderWhite from "../assets/borderWhite.svg";
import planetEc from "../assets/planetEc.webp";
import planet from "../assets/Planet.webp";
import numerology from "../assets/numerology.webp";
import varshafal from "../assets/varshafal.svg";
import palmistry from "../assets/palmistry.svg";

import circle from "../assets/Circle.svg";
import astro from "../assets/astro.webp";
import HLine from "../assets/HLine.svg";
import services from "../assets/services.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const card_data = [
  {
    id: 1,
    src: planet,
    title: "Astrology Consultation",
    content: "Get personalized guidance on career, relationships, and health",
  },
  {
    id: 2,
    src: numerology,
    title: "Numerology Reading",
    content:
      "Unveil life’s hidden patterns through numerology readings for success and clarity",
  },
  {
    id: 3,
    src: varshafal,
    title: "Varshafal (Yearly Forecasts)",
    content:
      "Receive a customized annual prediction to prepare for opportunities and challenges ahead",
  },
  {
    id: 4,
    src: palmistry,
    title: "Palmistry Analysis ",
    content: "Decode the lines on your hands to uncover future possibilities",
  },
];

const Choose_me_data = [
  {
    id: 1,
    title: "Expert Guidance",
    content:
      "With a deep understanding of cosmic forces, Naveen Ji provides tailored insights to help you navigate life’s biggest decisions.",
  },
  {
    id: 2,
    title: "Achieve Peace & Success",
    content:
      "Through his personalized astrology and numerology services, Naveen has helped countless individuals find peace, success, and clarity in their personal and professional lives.",
  },
  {
    id: 3,
    title: "Unlock Your Destiny",
    content:
      "Align your living or working environment with the unique insights from your palm, ensuring harmony, prosperity, and balance in all areas of life.",
  },
];

function Homepage() {
  const toast = useToast();
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)");
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");
  const [buttonStatus, setButtonStatus] = useState(null);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      {/* Hero */}
      <div className="relative h-full bg-hero bg-cover bg-center text-white pb-2">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative">
          <Navbar color={"white"}  />
          <div className="my-11">
            <div className="flex w-[85%] m-auto max-md:inline">
              <div className="w-[55%] m-auto max-md:w-[93%]">
                <p className="text-lg my-4 font-normal font-Sora">
                  Accurate Guidance | Personalized Readings | Trusted Insights
                </p>
                <h1 className="text-[48px] font-semibold my-4 leading-[58px]">
                  Unlock the Secrets of Your Destiny with Astrology, Numerology
                  & Palmistry
                </h1>
                <p className="text-lg font-normal my-4 font-Sora">
                  Discover the cosmic blueprint of your life through astrology,
                  numerology, and palmistry. Whether you seek clarity on career,
                  relationships, business, or personal growth, our expert
                  readings help you make informed decisions.
                </p>
                <div className=" flex font-Sora  max-md:w-[99%] max-md:justify-between ">
                  <Link to="/services">
                    <button className="mr-[1rem] bg-[#F49C36] font-Sora text-medium p-5 flex justify-center items-center rounded-md focus:outline-none w-[204px] h-[46px] max-md:w-[200px] max-md:mr-0 max-md:p-2">
                      Book a Consultation
                    </button>
                  </Link>
                  <HashLink smooth to="/#about">
                    <button className="bg-transparent border-[1px] font-medium text-[#F49C36] font-Sora border-[#F49C36] text-base p-5 flex justify-center items-center rounded-md  focus:outline-none w-[196px] h-[46px] max-md:w-[120px] max-md:p-2">
                      Explore
                    </button>
                  </HashLink>
                </div>
              </div>
              <div className=" w-[40%] max-md:w-full flex justify-center items-center relative">
                <div className="mx-10 max-md:mt-12 w-[490px] h-[490px] relative rounded-full max-md:mx-0 max-md:w-[320px] max-md:h-[320px] max-md:justify-center max-md:flex max-md:items-center">
                  <img
                    src={img1Border}
                    className=" absolute inset-0 w-[90%] h-[90%] rounded-full scale-125 top-3 left-10 max-md:w-[80%] "
                  />
                  <div className="rounded-full overflow-hidden  w-[470px] h-[470px] absolute max-md:w-[300px] max-md:h-[300px]">
                    <img
                      src={top}
                      className=" scale-105 w-full h-full object-cover absolute"
                    />
                  </div>
                  <img
                    src={img1}
                    className="absolute -top-[1.5rem] left-7 w-full h-[470px] object-cover max-md:h-[360px] max-md:top-[-3.3rem] max-md:left-3"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Marquee className="font-semibold text-[25px]">
          <li className="flex mx-5">
            <img src={subtract} className="mx-5 w-6" />
            Astrology
          </li>
          <li className="flex mx-5">
            <img src={subtract} className="mx-5 w-6" />
            Numeroscope Reading
          </li>
          <li className="flex mx-5">
            <img src={subtract} className="mx-5 w-6" />
            Palmistry Analysis
          </li>
          <li className="flex mx-5">
            <img src={subtract} className="mx-5 w-6" />
            Varshafal (Yearly Forecasts)
          </li>
          <li className="flex mx-5">
            <img src={subtract} className="mx-5 w-6" />
            Astrology
          </li>
          <li className="flex mx-5">
            <img src={subtract} className="mx-5 w-6" />
            Numeroscope Reading
          </li>
          <li className="flex mx-5">
            <img src={subtract} className="mx-5 w-6" />
            Palmistry Analysis
          </li>
          <li className="flex mx-5">
            <img src={subtract} className="mx-5 w-6" />
            Varshafal (Yearly Forecasts)
          </li>
        </Marquee>
      </div>

      {/* About */}
      <div id="about" className="h-full mb-14">
        <div className="flex flex-col justify-center items-center my-16">
          <h2 className="text-[32px] font-semibold my-3">About Me</h2>
          <img src={border}></img>
        </div>
        <div className="flex items-center justify-center w-[80%] m-auto max-md:inline max-md:w-[90%] ">
          <div className="flex items-center justify-center relative w-[50%] max-md:w-[100%]">
            <img
              src={subtract}
              className="absolute left-20 top-12 max-md:left-7 max-md:top-5 "
            />
            <img src={img2} className=" w-[60%] max-md:w-[75%]" />
            <img src={aboutBorder} className="absolute max-md:w-[85%]" />
            <img
              src={subtract}
              className="absolute right-20 bottom-10 max-md:right-6 max-md:bottom-5"
            />
          </div>
          <div className="w-[50%] m-auto max-md:w-[80%] max-md:mt-4 ">
            <div className="flex ">
              <img src={HLine} className="mr-10 max-md:hidden" />
              <ul className="list-disc text-lg font-normal text-[#00000099] ">
                <li className="font-Sora ">
                  Naveen Ji is a dedicated expert in Vedic astrology,
                  numerology, and palmistry with over five years of experience.
                  His deep knowledge in these ancient sciences has helped
                  countless individuals uncover life’s hidden truths, gain
                  clarity, and achieve a balanced, fulfilling life.
                </li>
                <li className="  font-Sora mt-4">
                  With astrology, he deciphers planetary influences to provide
                  personalized solutions, while palmistry reveals strengths,
                  potential, and challenges through unique palm lines. His
                  numerology insights help guide career, business, and personal
                  decisions.
                </li>
              </ul>
            </div>
            <div className="flex items-center my-4">
              <div className="relative">
                <img src={planetEc} className="w-24 h-24 " />
                <img
                  src={planet}
                  className="w-14 h-10 absolute top-7 left-4"
                ></img>
              </div>
              <div className="mx-5 flex items-center h-10">
                <Text fontWeight="700" fontSize="56px" color="#F57B37">
                  5k+
                </Text>
                <div className="flex flex-col ml-3">
                  <span className="text-lg font-semibold">number of</span>
                  <span className="text-xl font-semibold -mt-1">
                    Consultations
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex max-md:justify-center">
              <Link to="/services">
                <button className="font-Sora my-4 w-[165px] h-[46px] text-white bg-gradient-to-r from-[#F5A237] to-[#F47836] text-base font-normal py-2 rounded-lg hover:bg-gradient-to-l focus:outline-none ">
                  Consult now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="h-full bg-[#F6F7FF] py-14">
        <div className="flex flex-col justify-center items-center mb-16">
          <h2 className="text-[32px] font-semibold my-3">Services</h2>
          <img src={border}></img>
        </div>
        <div className="flex items-center justify-center w-[80%] m-auto max-md:inline ">
          <div className="w-[40%] flex justify-center items-center max-md:w-full ">
            <img src={services} className="w-[90%] h-[90%]" />
          </div>
          <div className="w-[55%] m-auto flex flex-wrap items-center justify-center  max-md:w-[100%] max-md:mt-14">
            {card_data.map((data) => {
              return (
                <div
                  key={data.id}
                  className="border-[1px]  border-gray-300 rounded-[20px] w-64 h-60 p-6 m-3 flex flex-col justify-center items-center text-center max-md:w-[70%]"
                >
                  <img src={data.src} className="m-4" />
                  <p className="text-lg font-semibold my-2">{data.title}</p>
                  <p className=" leading-4 font-normal text-sm font-Sora text-[#00000099]">
                    {data.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div
        id="testimonial"
        className="h-full flex flex-col items-center justify-center py-12"
      >
        <div className="flex flex-col justify-center items-center mt-2 w-[35%] max-md:w-[90%]">
          <h2 className="text-[32px] font-semibold my-3">Testimonials</h2>
          <img src={border}></img>
          <p className="leading-4 font-normal text-center p-4 text-sm font-Sora text-[#00000099]">
            “Here's what our clients have to say about their life-changing
            experiences!”
          </p>
        </div>

        <Flex w="100%" id="testimonials" mt={isLargerThan700 ? "1px" : "70px"}>
          <Flex
            display="flex"
            mx="auto"
            flexDir="column"
            w={isLargerThan1000 ? "80%" : "100%"}
            h="100%"
            textAlign="start"
          >
            <Flex
              alignItems="center"
              justifyContent={
                isLargerThan1000 ? "space-evenly" : "space-between"
              }
              mt={isLargerThan1000 ? "45px" : "1px"}
              className="px-8"
            >
              <Flex
                w="20%"
                h="100%"
                className="leading-10 text-3xl font-semibold  max-md:text-lg"
              >
                See what my happy clients are saying about their transformative
                experiences
              </Flex>
              <Flex
                w={isLargerThan400 ? "70%" : "62%"}
                justifyContent="flex-end"
              >
                <Swiper
                  modules={[Autoplay, Pagination]}
                  style={{ height: "400px" }}
                  spaceBetween={isLargerThan600?20:60} // Adjust the spacing between slides if needed
                  slidesPerView={
                    isLargerThan900
                      ? 3
                      : isLargerThan600
                      ? 2
                      : isLargerThan400
                      ? 1
                      : 1
                  } // Show 4 slides at a time
                  loop={true} // Enable looping
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 3000, // 5 seconds delay
                    disableOnInteraction: true,
                  }}
                >
                  <SwiperSlide>
                    <Box
                      h="375px"
                      minW="236px"
                      w="100%"
                      alignItems="center"
                      overflow="hidden"
                      borderRadius="20px"
                      border="2px solid #F57937"
                      padding="12px"
                    >
                      <Text
                        className="font-ab"
                        textColor="#F57937"
                        opacity="20%"
                        fontSize="130px"
                        fontWeight="400"
                      >
                        “
                      </Text>

                      <Text
                        className="font-Sora"
                        textColor="#000000CC"
                        fontSize="14px"
                        fontWeight="400"
                        mt="-80px"
                      >
                        “The numerology reading was spot on! I made business
                        changes based on the insights and saw immediate growth.”
                      </Text>

                      <Text
                        className="font-Sora"
                        textColor="#F57937CC"
                        fontSize="14px"
                        fontWeight="400"
                        mt="40px"
                      >
                        - Rajesh M.
                      </Text>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box
                      h="375px"
                      minW="236px"
                      w="100%"
                      alignItems="center"
                      overflow="hidden"
                      borderRadius="20px"
                      border="2px solid #F57937"
                      padding="12px"
                    >
                      <Text
                        className="font-ab"
                        textColor="#F57937"
                        opacity="20%"
                        fontSize="130px"
                        fontWeight="400"
                      >
                        “
                      </Text>

                      <Text
                        className="font-Sora"
                        textColor="#000000CC"
                        fontSize="14px"
                        fontWeight="400"
                        mt="-80px"
                      >
                        “The astrology consultation gave me a new perspective on
                        my career. Highly recommended!”
                      </Text>

                      <Text
                        className="font-Sora"
                        textColor="#F57937CC"
                        fontSize="14px"
                        fontWeight="400"
                        mt="60px"
                      >
                        - Priya K.
                      </Text>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box
                      h="375px"
                      minW="236px"
                      w="100%"
                      alignItems="center"
                      overflow="hidden"
                      borderRadius="20px"
                      border="2px solid #F57937"
                      padding="12px"
                    >
                      <Text
                        className="font-ab"
                        textColor="#F57937"
                        opacity="20%"
                        fontSize="130px"
                        fontWeight="400"
                      >
                        “
                      </Text>

                      <Text
                        className="font-Sora"
                        textColor="#000000CC"
                        fontSize="14px"
                        fontWeight="400"
                        mt="-80px"
                      >
                        “I was skeptical at first, but the palm reading was so
                        accurate that I was left amazed. Thank you for the
                        guidance!”
                      </Text>

                      <Text
                        className="font-Sora"
                        textColor="#F57937CC"
                        fontSize="14px"
                        fontWeight="400"
                        mt="40px"
                      >
                        - Anita D.
                      </Text>
                    </Box>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Box
                      h="375px"
                      minW="236px"
                      w="100%"
                      alignItems="center"
                      overflow="hidden"
                      borderRadius="20px"
                      border="2px solid #F57937"
                      padding="12px"
                    >
                      <Text
                        className="font-ab"
                        textColor="#F57937"
                        opacity="20%"
                        fontSize="130px"
                        fontWeight="400"
                      >
                        “
                      </Text>

                      <Text
                        className="font-Sora"
                        textColor="#000000CC"
                        fontSize="14px"
                        fontWeight="400"
                        mt="-80px"
                      >
                        “I was skeptical at first, but the palm reading was so
                        accurate that I was left amazed. Thank you for the
                        guidance!”
                      </Text>

                      <Text
                        className="font-Sora"
                        textColor="#F57937CC"
                        fontSize="14px"
                        fontWeight="400"
                        mt="40px"
                      >
                        - Anita D.
                      </Text>
                    </Box>
                  </SwiperSlide>
                </Swiper>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </div>

      {/* Choose Me */}

      <div className="relative h-full bg-hero bg-cover bg-center text-white py-10">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative">
          <div className="flex flex-col justify-center items-center my-16">
            <h2 className="text-[32px] font-semibold my-3">Why Choose Me</h2>
            <img src={borderWhite}></img>
          </div>

          {isLargerThan900 && (
            <div className="flex items-center justify-center w-[100%] m-auto ">
              {Choose_me_data.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="border-[1px] border-gray-300 rounded-3xl w-[379px] h-[23rem] p-7  m-3 flex flex-col justify-center items-center text-center max-md:w-[340px] max-md:p-3"
                  >
                    <img src={circle} className="h-16 w-16" />
                    <p className="font-bold text-2xl my-4">{data.title}</p>
                    <p className="text-lg font-normal leading-6 font-Sora text-[#E2E2E2] h-28">
                      {data.content}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {!isLargerThan900 && (
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              style={{ width: "90%", marginTop: !isLargerThan900 && "40px" }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide style={{ width: "95%" }}>
                <Flex className="border-[1px] border-gray-300 rounded-3xl w-[100%] h-[23rem] p-6  flex flex-col justify-center items-center text-center">
                  <Image src={circle} />
                  <Text className="font-bold text-2xl my-4">
                    Expert Guidance
                  </Text>
                  <Text className="text-lg font-normal leading-6 font-Sora text-[#E2E2E2] h-28">
                    With a deep understanding of cosmic forces, Naveen Ji
                    provides tailored insights to help you navigate life’s
                    biggest decisions.
                  </Text>
                </Flex>
              </SwiperSlide>
              <SwiperSlide style={{ width: "100%" }}>
                <Flex className="border-[1px] border-gray-300 rounded-3xl w-[100%] h-[23rem] p-6  flex flex-col justify-center items-center text-center">
                  <Image src={circle} />
                  <Text className="font-bold text-2xl my-4">
                    Achieve Peace & Success
                  </Text>
                  <Text className="text-lg font-normal leading-6 font-Sora text-[#E2E2E2] h-28">
                    Through his personalized astrology and numerology services,
                    Naveen has helped countless individuals find peace, success,
                    and clarity in their personal and professional lives.
                  </Text>
                </Flex>
              </SwiperSlide>
              <SwiperSlide style={{ width: "90%" }}>
                <Flex className="border-[1px] border-gray-300 rounded-3xl w-[370px] h-[23rem] p-6  flex flex-col justify-center items-center text-center">
                  <Image src={circle} />
                  <Text className="font-bold text-2xl my-4">
                    Unlock Your Destiny
                  </Text>
                  <Text className="text-lg font-normal leading-6 font-Sora text-[#E2E2E2] h-28">
                    Align your living or working environment with the unique
                    insights from your palm, ensuring harmony, prosperity, and
                    balance in all areas of life.
                  </Text>
                </Flex>
              </SwiperSlide>
            </Swiper>
          )}
          <div className="flex justify-end w-[89%]">
            <Link to="/services">
              <button className="bg-white text-base font-normal py-2 font-Sora text-black rounded-lg hover:bg-gray-300 focus:outline-none w-48 my-7">
                Book a Consultation
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* qna */}
      <div className="relative h-full py-8">
        <div className="">
          <div className="flex items-center justify-center w-[80%] m-auto rounded-3xl p-14 max-md:inline">
            <div className="w-[40%] m-auto max-md:w-[90%]">
              <img src={astro} />
            </div>
            <div className="w-[47%] m-auto max-md:w-[90%] max-md:flex max-md:flex-col ">
              <h1 className="text-[40px] font-bold  my-3 text-[#F37435]">
                Unlock Your Personalized Reading!
              </h1>
              <p className="  leading-5 my-2 font-Sora text-lg font-normal text-[#00000099]">
                Fill out the form below, and our expert astrologer will get in
                touch with you.
              </p>
              <p className="font-semibold text-lg leading-5 font-Sora text-[#00000099]">
                Get a free 5-minute consultation on your first booking!
              </p>

              <Flex borderRadius="30px" w="100%" bg="white" mt={"1rem"}>
                <Box
                  w="100%"
                  p={8}
                  boxShadow="md"
                  bg="white"
                  color="#00000099"
                  borderRadius="30px"
                  border="1px"
                  borderColor="gray.300"
                >
                  <form>
                    <FormControl mb={4} isRequired>
                      <FormLabel
                        fontWeight="500"
                        fontSize="14px"
                        className="font-Sora"
                      >
                        Full Name
                      </FormLabel>
                      <Input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        fontSize="14px"
                        type="text"
                        placeholder="Full name"
                        className="font-Sora"
                      />
                    </FormControl>

                    <SimpleGrid
                      columns={isLargerThan500 ? 2 : 1}
                      spacing={4}
                      mb={4}
                    >
                      <FormControl isRequired>
                        <FormLabel
                          fontWeight="500"
                          fontSize="14px"
                          className="font-Sora"
                        >
                          Phone Number
                        </FormLabel>
                        <Input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          fontSize="14px"
                          type="tel"
                          placeholder="Phone number"
                          className="font-Sora"
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel
                          fontWeight="500"
                          fontSize="14px"
                          className="font-Sora"
                        >
                          Email ID
                        </FormLabel>
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          fontSize="14px"
                          placeholder="E-mail ID"
                          className="font-Sora"
                        />
                      </FormControl>
                    </SimpleGrid>

                    <FormControl mb={4} isRequired>
                      <FormLabel
                        fontWeight="500"
                        fontSize="14px"
                        className="font-Sora"
                      >
                        What guidance are you looking for?
                      </FormLabel>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        fontSize="14px"
                        placeholder="Message"
                        className="font-Sora"
                      />
                    </FormControl>

                    <Button
                      fontSize="14px"
                      bg="#F37435"
                      color={"white"}
                      type="submit"
                      width="full"
                      className="font-Sora"
                    >
                      Submit Inquiry
                    </Button>
                  </form>
                </Box>
              </Flex>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}

export default Homepage;
