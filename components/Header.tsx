import { ReactNode } from 'react';
import {
  Box,
  Link,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = ['About', 'Work', 'Contact'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={8}
    py={2}
    color={useColorModeValue('gray.600', 'gray.300')}
    fontSize='2xl'
    letterSpacing='1px'
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('gray.900', 'gray.100'),
      bg: 'none'
    }}
    href={'#'} >
    {children}
  </Link >
);
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box px={4}>
        <Flex w='85%' mx='auto' h={48} alignItems='center' justifyContent='space-between'>
          <Link display='flex' flexDirection='row' alignItems='center' _hover={{ textDecoration: 'none', transform: 'scale(1.03, 1.03)', color: useColorModeValue('gray.700', 'gray.100') }}>
            <Image src={colorMode === 'dark' ? './logo.png' : './logo-dark.png'} h='34px' mb='-1px' w='auto' mr='-1px' opacity='0.93' />
            <Box letterSpacing='-1.0px' fontSize='48' fontWeight='700'>erformant</Box>
          </Link>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <HStack
                as={'nav'}
                spacing={8}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
                <Button
                  p={6}
                  onClick={toggleColorMode}
                  color={useColorModeValue('gray.600', 'gray.300')}
                  rounded='none'
                  bg='none'
                  _hover={{
                    bg: 'none',
                    color: useColorModeValue('gray.900', 'gray.100')
                  }}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </HStack>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}