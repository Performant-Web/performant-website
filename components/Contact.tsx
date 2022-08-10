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
                  style={{ width: '100%' }}
                  method="POST"
                  name="contact-form"
                  data-netlify="true"
                  action="contact/?success=true"
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  <FormControl id="contact-form-control" pb="8">
                    <FormLabel id="contact-email"
                      color={useColorModeValue('gray.600', 'gray.300')}
                    >Email</FormLabel>
                    <Input type="text"
                      id='email'
                      name='email'
                      color={useColorModeValue('gray.600', 'gray.300')}
                      borderColor={useColorModeValue('gray.300', 'rgba(135,135,135,0.5)')}
                      size="md"
                      rounded='none'
                      mb='8'
                      placeholder='Enter your email...'
                      _placeholder={{ color: useColorModeValue('gray.500', 'gray.400') }}
                      _focus={{
                        borderWidth: '2px',
                        borderColor: 'rgba(125,125,125,.75)',
                      }} />
                    <FormLabel id='contact-message'
                      color={useColorModeValue('gray.600', 'gray.300')}
                    >Message</FormLabel>
                    <Textarea
                      id='message'
                      name='message'
                      height='150'
                      color={useColorModeValue('gray.600', 'gray.300')}
                      borderColor={useColorModeValue('gray.300', 'rgba(135,135,135,0.5)')}
                      rounded='none'
                      _hover={{
                        borderRadius: 'gray.300',
                      }}
                      _focus={{
                        borderWidth: '2px',
                        borderColor: 'rgba(125,125,125,.75)',
                      }}
                      placeholder="Enter your message..."
                      _placeholder={{ color: useColorModeValue('gray.500', 'gray.400') }}
                    />
                    <HStack w='full' mt='8' display='flex' justify='space-between'>
                      <Button
                        name='submit'
                        type='submit'
                        variant="solid"
                        bg="red.600"
                        px={8}
                        py={6}
                        letterSpacing='1px'
                        fontWeight='600'
                        fontSize='lg'
                        _hover={{
                          bg: 'red.500'
                        }}
                        color="white"
                        rounded='none'>
                        Send
                      </Button>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        alignItems="center">
                        <Link passHref href='https://github.com/Performant-Web'>
                          <IconButton
                            color={useColorModeValue('gray.700', 'gray.300')}
                            aria-label="github"
                            variant="ghost"
                            size="lg"
                            rounded='none'
                            _hover={{ color: useColorModeValue('gray.900', 'gray.100') }}
                            icon={<BsGithub size="28px" />}
                          />
                        </Link>
                        <Link passHref href='https://discord.com/users/895421310828695563'>
                          <IconButton
                            color={useColorModeValue('gray.700', 'gray.300')}
                            aria-label="discord"
                            variant="ghost"
                            size="lg"
                            rounded='none'
                            _hover={{ color: useColorModeValue('gray.900', 'gray.100') }}
                            icon={<BsDiscord size="28px" />}
                          />
                        </Link>
                      </HStack>
                    </HStack>
                  </FormControl>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container >
  );
}