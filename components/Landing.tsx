import {
  Container,
  Heading,
  Stack,
  Text,
  Link,
  HStack,
  useColorModeValue,
  Flex,
  Box,
  Fade
} from '@chakra-ui/react';
import { GiGraduateCap } from 'react-icons/gi';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiGraphql
} from 'react-icons/si'

export default function Landing() {
  return (
    <Container display='flex' flexDirection='column' minH='100vh' maxW='100%'>
      <Fade in={true}>
        <Stack
          minH='70vh'
          textAlign='center'
          align='center'
          justify='center'
          spacing={{ base: 4, md: 5 }}
          pt={{ base: '36', sm: '60' }}>
          <Heading
            as='h1'
            opacity='0.95'
            fontWeight={700}
            letterSpacing='-2px'
            fontSize={{ base: '6xl', sm:'8xl', lg: '9xl' }}
            lineHeight='90%'
          >
            Performant
          </Heading>
          <Stack
          spacing={{base: 2, md: 3}}>
            <Heading
              as='h2'
              color='red.500'
              fontWeight='400'
              letterSpacing='0.5px'
              fontSize={{ base: 'xl', sm:"3xl", lg: '4xl' }}
              >
              Web Development Services
            </Heading>
            <Text
              fontSize={{ base: 'xs', sm: 'md', lg: 'xl' }}
              color={useColorModeValue('gray.600', 'gray.300')}
              opacity="0.9"
              maxW={'3xl'}
              letterSpacing='0.5px'>
              Solving your business problems with technology
            </Text>
            <Flex justify="center" py='3' gap={{ base: '5', md: '12' }} direction={{ base: 'column', md: 'row' }}>
            <Link
              href='#contact'
              passHref
              style={{ textDecoration: 'none' }}
              rounded='2px'
              px={8}
              py={3}
              letterSpacing='0.25px'
              fontWeight='600'
              fontSize='lg'
              color='gray.100'
              colorScheme={'red'}
              bg={'red.600'}
              _hover={{
                bg: 'red.500',
              }}>
              Get Started
            </Link>
            <Link
              href='#about'
              passHref
              display='flex'
              justifyContent='center'
              alignItems='center'
              rounded='2px'
              px={8}
              py={2}
              color={useColorModeValue('gray.600', 'gray.300')}
              _hover={{
                color: useColorModeValue('gray.800', 'gray.100')
              }}>
              <HStack>
                <GiGraduateCap size='1.5em' />
                <Text
                  as='span'
                  fontWeight='600'
                  fontSize='lg'
                >
                  Learn More
                </Text>
              </HStack>
            </Link>
            </Flex>
          </Stack>

        </Stack>
      </Fade>
      <Flex pt='6' flexGrow='1' opacity='.5' w='full' justify='space-between' maxWidth="1456px" mx="auto">
        <Box w={{ base: '40px', sm: '50px', md: '75px' }}>
          <SiReact size='100%' />
        </Box>
        <Box w={{ base: '40px', sm: '50px', md: '75px' }}>
          <SiNextdotjs size='100%' />
        </Box>
        <Box w={{ base: '40px', sm: '50px', md: '75px' }}>
          <SiNodedotjs size='100%' />
        </Box>
        <Box w={{ base: '40px', sm: '50px', md: '75px' }}>
          <SiTypescript size='100%' />
        </Box>
        <Box w={{ base: '40px', sm: '50px', md: '75px' }}>
          <SiGraphql size='100%' />
        </Box>
      </Flex>
    </Container >
  );
}