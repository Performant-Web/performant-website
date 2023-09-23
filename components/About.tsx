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
      <Text fontSize="lg" fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  return (
    <Container id='about' maxW='1456px' pt={{ base: '12', lg: '24' }}>
      <Stack align='center' spacing={-1} pb={{ base: '16', md: '24' }}>
        <Text
          textTransform={'uppercase'}
          color={'red.500'}
          fontWeight={700}
          fontSize={'2xl'}
          rounded={'md'}>
          About
        </Text>
        <Heading size='3xl'>Services</Heading>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pb={{ base: 12, sm: 24 }}>
        <Stack spacing={4}>
          <Heading as="h3" size="xl">Maintenance</Heading>
          <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={'xl'}>
            Keep everything running smoothly
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                opacity="0.75"
                borderColor={useColorModeValue('gray.300', 'gray.600')}
              />
            }>
            <Service
              icon={
                <Icon as={IoHelpOutline} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Testing, Troubleshooting and Debugging'}
            />
            <Service
              icon={
                <Icon as={IoAnalyticsOutline} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Analytics, Metrics, and Monitoring'}
            />
            <Service
              icon={
                <Icon as={IoBuildOutline} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Updating Packages and Plugins '}
            />
          </Stack>
        </Stack>
        <Stack spacing={4}>
          <Heading>Enhancement</Heading>
          <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize={'xl'}>
            New features and improvements
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                opacity="0.75"
                borderColor={useColorModeValue('gray.300', 'gray.600')}              />
            }>
            <Service
              icon={
                <Icon as={IoFlashOutline} color={'red.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Development of Components and Pages'}
            />
            <Service
              icon={<Icon as={IoLockClosedOutline} color={'red.500'} w={5} h={5} />}
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Performance and Optimization'}
            />
            <Service
              icon={<Icon as={IoSearchOutline} color={'red.500'} w={5} h={5} />}
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Deployment and Continuous Integration'}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container >
  );
}