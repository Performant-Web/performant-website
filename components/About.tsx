import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';

interface ServiceProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Service = ({ text, icon, iconBg }: ServiceProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  return (
    <Container maxW={'full'} px='24em' >
      <Stack align='center' spacing={-1} pb='24'>
        <Text
          textTransform={'uppercase'}
          color={'red.500'}
          fontWeight={600}
          fontSize={'sm'}
          rounded={'md'}>
          About
        </Text>
        <Heading size='2xl'>Services</Heading>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pb={{ base: 24, md: 40 }}>
        <Stack spacing={4}>
          <Heading>Maintenance</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Keep things running smoothly
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Service
              icon={
                <Icon as={IoAnalyticsSharp} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Troubleshooting + Bugfixes'}
            />
            <Service
              icon={<Icon as={IoLogoBitcoin} color={'red.500'} w={5} h={5} />}
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Error + Uptime Monitoring'}
            />
            <Service
              icon={
                <Icon as={IoSearchSharp} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Package + Plugin Updates'}
            />
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <Heading>Enhancement</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            New features or improvements
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Service
              icon={
                <Icon as={IoAnalyticsSharp} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Performance + Optimization'}
            />
            <Service
              icon={<Icon as={IoLogoBitcoin} color={'red.500'} w={5} h={5} />}
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Security + Authentication'}
            />
            <Service
              icon={
                <Icon as={IoSearchSharp} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Analytics + Metrics'}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}