import React from 'react';
import { Box, Heading, Text, Link, Flex, useMediaQuery,  ListItem, UnorderedList } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import name from "../assets/nameBlack.svg";


const PrivacyPolicy = () => {
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')


  return (
    <Flex flexDir="column" className='font-Sora'>
           <Navbar color={"black"} name={name} />

    <Box  w={isLargerThan1000 ? "70%" : "98%"} mx="auto" p={4}>
    <Heading mt="40px" mb="80px" as="h1" size="xl" textAlign='center'>
        Influcent Technology Private Limited
      </Heading>

      <Heading as="h2" size="lg" mb={4}>
        Privacy Policy
      </Heading>

      <Text fontSize="sm" mb={4}>
        Effective Date of the current Privacy Policy: 22th October 2024
      </Text>

      <Text mb={4}>
        We understand the responsibility of protecting your privacy. This Privacy Policy explains Influcent's
        practices regarding the collection, use, and disclosure of information provided by you through our platform. By using or
        accessing the Influcent platform and providing any information, you agree to the terms of this Privacy Policy.
      </Text>

      <Text mb={4}>
        These are the Influcent Privacy Policy ("Privacy Policy") governing your use of the Influcent platform and services. By
        accessing, using, or signing up on the Influcent platform, you are accepting the practices described in this Privacy Policy.
      </Text>

      <Text mb={4}>
        In this Privacy Policy, meanings as ascribed to the terminologies in the Influcent Technology Private Limited Terms of Use
        shall apply.
      </Text>

      <Heading as="h3" size="md" mb={4}>
        Revisions to Privacy Policy:
      </Heading>

      <Text mb={4}>
        Influcent reserves the right to update this Privacy Policy at any time. You can determine if this Privacy Policy has been revised
        since your last visit by referring to the “Effective Date of the current Privacy Policy” date at the top of this page. Your continued
        use of the platform constitutes acceptance of the amended terms.
      </Text>

      <Heading as="h3" size="md" mb={4}>
        General:
      </Heading>

      <Text mb={4}>
        This Privacy Policy covers Influcent's treatment of information collected and received, including past use of the platform. We
        use technology, security policies, rules, and other precautions to protect your information from unlawful intrusions and
        unauthorized access, ensuring your privacy is safeguarded.
      </Text>

      <Heading as="h3" size="md" mb={4}>
        What Information Do We Collect?
      </Heading>

      <UnorderedList mb={4}>
        <ListItem>Personal Information: Name, gender, images, mobile number, address, email id, and any content knowingly disclosed by you on an individual basis.</ListItem>
        <ListItem>Third-Party Information: Information provided through third-party services (e.g., Facebook, LinkedIn) during login or registration.</ListItem>
        <ListItem>Automatic Information: Information like location, email id, and other data that is automatically accessible upon your interaction with the platform.</ListItem>
        <ListItem>Stored Information: Any data you or third parties share through the platform, including image files, documents, etc.</ListItem>
      </UnorderedList>

      <Heading as="h3" size="md" mb={4}>
        Use of Information:
      </Heading>

      <Text mb={4}>
        We use your information to enhance your experience on our platform, detect and protect against errors and fraud, provide technical support, facilitate payment processes, and communicate promotions and offers.
      </Text>

      <Heading as="h3" size="md" mb={4}>
        What Types of Information Are Not Allowed on Influcent Platform?
      </Heading>

      <UnorderedList mb={4}>
        <ListItem>Nudity or sexually suggestive content</ListItem>
        <ListItem>Hate speech or threats</ListItem>
        <ListItem>Self-harm or violent content</ListItem>
        <ListItem>Fake profiles or spam</ListItem>
      </UnorderedList>

      <Heading as="h3" size="md" mb={4}>
        Data Retention:
      </Heading>

      <Text mb={4}>
        We retain information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.
      </Text>

      <Heading as="h3" size="md" mb={4}>
        Security:
      </Heading>

      <Text mb={4}>
        We take your security seriously and employ measures to protect your information. However, due to the open nature of the internet, we cannot guarantee complete security of communications between you and Influcent.
      </Text>

      <Heading as="h3" size="md" mb={4}>
        Legal Disclaimer:
      </Heading>

      <Text mb={4}>
        We may disclose your information if required by law or to comply with legal processes, protect our rights, or for law enforcement purposes.
      </Text>

      <Heading as="h3" size="md" mb={4}>
        Governing Law:
      </Heading>

      <Text mb={4}>
        The laws of India govern this Privacy Policy. Any disputes arising from the use of the platform must be brought within one month of the event, and each cause will be adjudicated individually.
      </Text>

      <Heading as="h3" size="md" mb={4}>
        Grievance Redressal:
      </Heading>

      <Text mb={4}>
        If you have any grievances regarding the collection, use, or transfer of your personal information under this Privacy Policy, please contact us at{' '}
        <Link href="mailto:shubhamg@influcent.com" color="teal.500">
          shubhamg@influcent.com
        </Link>
        .
      </Text>
    </Box>
    <Footer />
    </Flex>
  );
};

export default PrivacyPolicy;
