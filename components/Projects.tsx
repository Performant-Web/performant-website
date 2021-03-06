import {
  Box,
  VStack,
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
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Projects() {
  return (
    <>
      <Box as={Container} maxW='full' mt={14} pb={{ base: 24, md: 40 }} px='24em'>
        <Stack align='center' spacing={-1} pb='24'>
          <Text
            textTransform={'uppercase'}
            color={'red.500'}
            fontWeight={600}
            fontSize={'sm'}
            rounded={'md'}>
            Work
          </Text>
          <Heading size='2xl'>Projects</Heading>
        </Stack>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Pushlast
              </chakra.h2>
              <Link href='https://apps.shopify.com/pushlast'>
                <Button
                  bgColor='red.600'
                  size="md"
                  _hover=
                  {{ bgColor: 'red.500' }}
                  rounded='none'
                  px={4}
                  py={3}
                  letterSpacing='1px'
                  fontWeight='600'
                  fontSize='md'
                  color='gray.100'
                >
                  View
                </Button>
              </Link>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex h='full' align='center'>
              <chakra.p>
                Embedded Shopify app to manage inventory based on stock status.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'Next.js + Strapi'}
            text={'App embedded in Shopify UI utilizing REST and GraphQL API'}
          />
          <Feature
            heading={'JWT Auth'}
            text={'Migrated from cookie based authentication to session tokens'}
          />
          <Feature
            heading={'Feature Flags/Toggles'}
            text={'Enabled the roll-out of new features to select customers'}
          />
          <Feature
            heading={'Monitoring + Analytics'}
            text={'Configured Bugsnag, Uptime Robot and Segment Analytics'}
          />
        </Grid>
      </Box>
      <Box as={Container} maxW='full' mt={14} pb={{ base: 24, md: 40 }} px='24em'>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Respark
              </chakra.h2>
              <Link href='https://user.playrespark.com/account/login'>
                <Button
                  bgColor='red.600'
                  size="md"
                  _hover=
                  {{ bgColor: 'red.500' }}
                  rounded='none'
                  px={4}
                  py={3}
                  letterSpacing='1px'
                  fontWeight='600'
                  fontSize='md'
                  color='gray.100'
                >
                  View
                </Button>
              </Link>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex h='full' align='center'>
              <chakra.p>
                Game user interface for registration, authentication, and password reset.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'React.js'}
            text={'Built working with designers and back-end developers'}
          />
          <Feature
            heading={'REST API'}
            text={'Configured dashboard to pull data from game back-end'}
          />
          <Feature
            heading={'Authentication'}
            text={'Verified user identify with existing game database'}
          />
          <Feature
            heading={'Authorization'}
            text={'Routing dependent on current user permission level'}
          />
        </Grid>
      </Box>
      <Box as={Container} maxW='full' mt={14} pb={{ base: 24, md: 40 }} px='24em'>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Playlist Mashup
              </chakra.h2>
              <Link href='http://playlistmashup.com'>
                <Button
                  bgColor='red.600'
                  size="md"
                  _hover=
                  {{ bgColor: 'red.500' }}
                  rounded='none'
                  px={4}
                  py={3}
                  letterSpacing='1px'
                  fontWeight='600'
                  fontSize='md'
                  color='gray.100'
                >
                  View
                </Button>
              </Link>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex h='full' align='center'>
              <chakra.p>
                App that combines public Spotify playlists from different users.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'Next.js'}
            text={'Next.js front end working with Spotify API'}
          />
          <Feature
            heading={'Spotify REST API'}
            text={'Creating, Reading, and Updating Spotify playlists'}
          />
          <Feature
            heading={'JWT Access Tokens'}
            text={'Implicit grant flow carried out on client-side'}
          />
          <Feature
            heading={'Chakra UI'}
            text={'Modular and accessible React component library'}
          />
        </Grid>
      </Box>
    </>


  );
}