import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  useDisclosure,
  HStack,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { TbMoon } from 'react-icons/tb';
import NextLink from 'next/link';

const Links = ['about', 'work', 'contact'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <NextLink href={`#${children}`} passHref>
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
      }}>
      {children}
    </Link >
  </NextLink>
);
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue('gray.100', '#171717');
  const color = useColorModeValue('gray.600', 'gray.300');
  const hover = useColorModeValue('gray.900', 'gray.100');

  return (
    <Box position='absolute' left='0' right='0' top={0} maxW='1456px' mx='auto' bg={bg} zIndex='5'>
      <Flex pr='8' position='relative' w='100%' justify='space-between' h={{ base: '24', sm: '48' }} alignItems='center' justifyContent='space-between'>
        <Link pl={{ base: '5', sm: '8' }} ml={{ base: '0px', lg: '-10px' }} href='/' passHref display='flex' flexDirection='row' alignItems='center' _hover={{ textDecoration: 'none', color: useColorModeValue('gray.700', 'gray.100') }}>
          <Box pr='8' letterSpacing='-1.0px' fontSize={{ base: '36', sm: '48' }} fontWeight='700'>Performant</Box>
        </Link>
        <Flex
          alignItems={'center'}
        >
          <IconButton
            mr={{ base: '6', sm: '12' }}
            size={'lg'}
            rounded='none'
            bg={useColorModeValue('gray.100', '#171717')}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            zIndex='5'
          />
          <Stack direction={'row'}>
            <HStack
              as={'nav'}
              spacing={0}
              display={{ base: 'none', lg: 'flex' }}>
              <Button
                w='52px'
                h='52px'
                p='3'
                onClick={toggleColorMode}
                color={useColorModeValue('gray.600', 'gray.300')}
                rounded='none'
                bg='none'
                _hover={{
                  bg: 'none',
                  color: useColorModeValue('gray.900', 'gray.100')
                }}>
                {colorMode === 'light' ? <TbMoon size='100%' /> : <SunIcon h='24px' w='24px' />}
              </Button>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <NextLink href={'https://blog.performantweb.dev'} passHref>
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
                  }}>
                  Blog
                </Link >
              </NextLink>
            </HStack>
          </Stack>
        </Flex>
      </Flex>
      {
        isOpen ? (
          <Box
            position='relative'
            bg={bg}
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
              <Box>
                <Button
                  ml={4}
                  display='block'
                  bg={bg}
                  onClick={toggleColorMode}
                  color={color}
                  rounded='none'
                  _hover={{
                    color: hover
                  }}>
                  {colorMode === 'light' ? <TbMoon size='75%' /> : <SunIcon />}
                </Button>
              </Box>
            </Stack>
          </Box>
        ) : null
      }
    </Box >
  );
}