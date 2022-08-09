import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
  HStack,
  useColorModeValue,
  Flex,
  Box
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
    <Container h='100vh' maxW='100%'>
      <Stack
        h='100%'
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 4, md: 5 }}
        pt={{ base: 10, md: 20 }}>
        <Heading
          as='h1'
          pt='20vh'
          opacity='0.95'
          fontWeight={700}
          letterSpacing='-2px'
          fontSize={{ base: '6xl', sm: '7xl', md: '8xl' }}
          lineHeight='90%'
        >
          Performant
        </Heading>
        <Heading
          as='h2'
          color='red.500'
          fontWeight='400'
          letterSpacing='0.5px'
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
          Web Development Services
        </Heading>
        <Text
          fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
          color={useColorModeValue('gray.600', 'gray.300')}
          maxW={'3xl'}
          letterSpacing='0.5px' >
          Solving your business problems with technology
        </Text>
        <Stack py='3' spacing={12} direction={{ base: 'column', md: 'row' }}>
          <Link href='#contact' passHref style={{ textDecoration: 'none' }}>
            <Button
              rounded={'none'}
              px={8}
              py={6}
              letterSpacing='1px'
              fontWeight='600'
              fontSize='lg'
              color='gray.100'
              colorScheme={'red'}
              bg={'red.600'}
              _hover={{
                bg: 'red.500',
              }}>
              Get Started
            </Button>
          </Link>
          <Link
            href='#about'
            passHref
            display='flex'
            justifyContent='center'
            alignItems='center'
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
        </Stack>
        <Flex opacity='.5' h='full' w='full' align='center' justify='space-around'>
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
      </Stack >
    </Container >
  );
}