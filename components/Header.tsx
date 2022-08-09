import { ReactNode } from 'react';
import {
  Box,
  Link,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  useDisclosure,
  HStack,
  Image,
  IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['about', 'work', 'contact'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    textTransform='capitalize'
    h='full'
    zIndex='3'
    px={8}
    py={2}
    color={useColorModeValue('gray.600', 'gray.300')}
    fontSize='2xl'
    letterSpacing='1px'
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('gray.900', 'gray.100'),
    }}
    href={`#${children}`} >
    {children}
  </Link >
);
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box position='absolute' top={0} px={4} w='100%'>
      <Flex position='relative' w='85%' mx='auto' h={{ base: '24', sm: '48' }} alignItems='center' justifyContent='space-between'>
        <Link display='flex' flexDirection='row' alignItems='center' _hover={{ textDecoration: 'none', transform: 'scale(1.03, 1.03)', color: useColorModeValue('gray.700', 'gray.100') }}>
          <Image src={colorMode === 'dark' ? './logo.png' : './logo-dark.png'} h={{ base: '26px', md: '34px' }} mb={{ base: '2px', md: '-1px' }} w='auto' mr='-1px' opacity='0.93' />
          <Box letterSpacing='-1.0px' fontSize={{ base: '36', md: '48' }} fontWeight='700'>erformant</Box>
        </Link>
        <Flex alignItems={'center'}>
          <IconButton
            size={'lg'}
            rounded='none'
            bg={useColorModeValue('gray.100', '#171717')}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Stack direction={'row'} spacing={7}>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', lg: 'flex' }}>
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

      {
        isOpen ? (
          <Box
            position='relative'
            bg={useColorModeValue('gray.100', '#171717')}
            px={4}
            mr={4}
            pb={4}
            zIndex='2'
            onClick={isOpen ? onClose : onOpen}

            display={{ lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Box px={4}>
                <Button
                  p={6}
                  w={12}
                  bg={useColorModeValue('gray.100', '#171717')}
                  onClick={toggleColorMode}
                  color={useColorModeValue('gray.600', 'gray.300')}
                  rounded='none'
                  _hover={{
                    color: useColorModeValue('gray.900', 'gray.100')
                  }}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Box>
            </Stack>
          </Box>
        ) : null
      }
    </Box >
  );
}