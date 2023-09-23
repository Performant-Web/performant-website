import {
  Box,
  HStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Stack,
  Heading,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p fontSize="lg" opacity="0.95">{text}</chakra.p>
    </GridItem>
  );
};

interface Project {
  title: string
  url: string
  description: string
  tech1: string
  tech1Description: string
  tech2: string
  tech2Description: string
  tech3: string
  tech3Description: string
  tech4: string
  tech4Description: string
}

export default function Projects({ projects }: {projects: Project[]}) {
  return (
    <Box id='work' pt='24'>
      <Stack align='center' pb={{ base: '6', md: '0' }} pt={{base: '12', md: '24'}} spacing={-1} >
        <Text
          textTransform={'uppercase'}
          color={'red.500'}
          fontWeight={700}
          fontSize={'2xl'}
          rounded={'md'}>
          Work
        </Text>
        <Heading size='3xl'>Projects</Heading>
      </Stack>
      {projects.map((project, index) => (
        <Box key={index} as={Container} maxW='1456' py={{ base: '12', lg: '24' }} pb={{ base: 12, sm: 24 }}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            gap={4}>
            <GridItem colSpan={1}>
              <HStack alignItems="center" spacing="20px">
                <chakra.h2 fontSize="4xl" fontWeight="700">
                  {project.title}
                </chakra.h2>
                <Link passHref href={project.url}>
                  <Button
                    bgColor='red.600'
                    size="md"
                    _hover=
                    {{ bgColor: 'red.500' }}
                    rounded='none'
                    px={4}
                    py={3}
                    borderRadius="2px"
                    letterSpacing='1px'
                    fontWeight='600'
                    fontSize='md'
                    color='gray.100'
                  >
                    View
                  </Button>
                </Link>
              </HStack>
            </GridItem>
            <GridItem>
              <Flex h='full' alignItems="center">
                <chakra.p fontSize="20px" fontWeight="600">
                  {project.description}
                </chakra.p>
              </Flex>
            </GridItem>
          </Grid>
          <Divider mt='9' mb='9'/>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            }}
            gap={{ base: '8', sm: '12', md: '16' }}>
            <Feature
              heading={project.tech1}
              text={project.tech1Description}
            />
            <Feature
              heading={project.tech2}
              text={project.tech2Description}
            />
            <Feature
              heading={project.tech3}
              text={project.tech3Description}
            />
            <Feature
              heading={project.tech4}
              text={project.tech4Description}
            />
          </Grid>
        </Box>
      ))}
    </Box>
  );
}