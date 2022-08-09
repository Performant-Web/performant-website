import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  IconButton,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsGithub, BsDiscord } from 'react-icons/bs';

export default function Contact() {
  return (
    <Container id='contact' h='100vh' maxW='600px' pt={{ base: '12', lg: '24' }} centerContent overflow="hidden" >
      <Stack align='center' spacing={-1} pb='24'>
        <Text
          textTransform={'uppercase'}
          color={'red.500'}
          fontWeight={600}
          fontSize={'sm'}
          rounded={'md'}>
          Contact
        </Text>
        <Heading size='2xl'>Get in Touch</Heading>
      </Stack>
      <Flex w='full' align='center' px='3'>
        <Box
          w='full'
          borderRadius="lg">
          <Box>
            <Box borderRadius="lg">
              <Box color="#0B0E3F">
                <form
                  method="POST"
                  name="contact-form"
                  action="contact/?success=true"
                  data-netlify="true">
                  <input type="hidden" name="form-name" value="contact-form" />
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                  />
                  <label htmlFor="company">Company *</label>
                  <input id="company" name="company" required type="text" />
                  <label htmlFor="email">E-mail Address *</label>
                  <input id="email" type="email" name="email" required />
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" required></textarea>
                  <button type="submit">Submit</button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container >
  );
}