import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Link,
  HStack,
  Icon,
  IconProps,
  useColorModeValue,
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
    <Container maxW={'5xl'}>
      <Stack
        h='calc(100vh - 192px)'
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 4, md: 5 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          as='h1'
          opacity='0.95'
          fontWeight={700}
          letterSpacing='-2px'
          fontSize={{ base: '3xl', sm: '4xl', md: '8xl' }}
          lineHeight='90%'
        >
          Performant
        </Heading>
        <Heading
          as='h2'
          color='red.500'
          fontWeight='400'
          letterSpacing='0.5px'
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl' }}>
          Web Development Services
        </Heading>
        <Text fontSize='xl' color={useColorModeValue('gray.600', 'gray.300')} maxW={'3xl'} letterSpacing='0.5px' >
          Solving your business problems with modern technology
        </Text>
        <Stack py='3' spacing={12} direction={'row'}>
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
            _hover={{ bg: 'red.500' }}>
            Get Started
          </Button>
          <Link
            href='#services'
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
        <HStack align='flex-end' spacing='60' opacity='.5' h='full'>
          <SiReact size='5em' />
          <SiNextdotjs size='5em' />
          <SiNodedotjs size='5em' />
          <SiTypescript size='5em' />
          <SiGraphql size='5em' />
        </HStack>
      </Stack>
    </Container >
  );
}