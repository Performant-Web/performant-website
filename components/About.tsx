import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoHelpOutline,
  IoSearchOutline,
  IoBuildOutline,
  IoFlashOutline,
  IoLockClosedOutline,
  IoAnalyticsOutline,

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
    <Container id='about' maxW='1080px' pt={{ base: '12', lg: '24' }}>
      <Stack align='center' spacing={-1} pb={{ base: '16', sm: '24' }}>
        <Text
          textTransform={'uppercase'}
          color={'red.500'}
          fontWeight={600}
          fontSize={'md'}
          rounded={'md'}>
          About
        </Text>
        <Heading size='2xl'>Services</Heading>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pb={{ base: 12, sm: 24, md: 40 }}>
        <Stack spacing={4}>
          <Heading>Maintenance</Heading>
          <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={'lg'}>
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
                <Icon as={IoHelpOutline} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Troubleshooting + Bugfixes'}
            />
            <Service
              icon={<Icon as={IoSearchOutline} color={'red.500'} w={5} h={5} />}
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Error + Uptime Monitoring'}
            />
            <Service
              icon={
                <Icon as={IoBuildOutline} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Package + Plugin Updates'}
            />
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <Heading>Enhancement</Heading>
          <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={'lg'}>
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
                <Icon as={IoFlashOutline} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Performance + Optimization'}
            />
            <Service
              icon={<Icon as={IoLockClosedOutline} color={'red.500'} w={5} h={5} />}
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Security + Authentication'}
            />
            <Service
              icon={
                <Icon as={IoAnalyticsOutline} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Analytics + Metrics'}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container >
  );
}