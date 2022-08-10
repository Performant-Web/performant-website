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
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
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
    <Box position='absolute' top={0} w='100%' bg={bg} zIndex='5'>
      <Flex position='relative' w='100%' justify='space-between' h={{ base: '24', sm: '48' }} alignItems='center' justifyContent='space-between'>
        <Link href='/' passHref display='flex' flexDirection='row' alignItems='center' _hover={{ textDecoration: 'none', transform: 'scale(1.03, 1.03)', color: useColorModeValue('gray.700', 'gray.100') }}>
          <Box ml={{ base: '6', sm: '12' }} letterSpacing='-1.0px' fontSize={{ base: '36', sm: '48' }} fontWeight='700'>Performant</Box>
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
          <Stack direction={'row'} spacing={7} pr={{ base: '6', sm: '12' }}>
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
              <Box px={4}>
                <Button
                  p={6}
                  w={12}
                  bg={bg}
                  onClick={toggleColorMode}
                  color={color}
                  rounded='none'
                  _hover={{
                    color: hover
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