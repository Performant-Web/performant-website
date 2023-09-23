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
  ScaleFade,
  Collapse,
  Fade
} from '@chakra-ui/react';
import { SunIcon  } from '@chakra-ui/icons';
import { TbMoon } from 'react-icons/tb';
import NextLink from 'next/link';

const Links = ['about', 'work', 'contact'];

const HamburgerIcon = () => {
  return (
    <ScaleFade in={true} initialScale={0.75}>
      <svg width="48" height="48" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
        <path fill="currentColor" d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" />
      </svg>
    </ScaleFade>
  )
}

const CloseIcon = () => {
  return (
    <ScaleFade in={true} initialScale={0.75}>
      <svg width="48" height="48" viewBox="-6 -6 36 36" focusable="false" aria-hidden="true">
        <path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z" />
      </svg>
    </ScaleFade>
  )
}

const NavLink = ({ children }: { children: ReactNode }) => (
  <NextLink href={`#${children}`} passHref>
    <Link
      textTransform='capitalize'
      h='full'
      zIndex='3'
      px={8}
      py={2}
      display='flex'
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
    <Box position='absolute' left='0' right='0' top={0} maxW='1456px' mx='auto' zIndex='5'>
      <Flex pr={{ base: '0', lg: '4' }} position='relative' w='100%' justify='space-between' h={{ base: '24', sm: '48' }} alignItems='center' justifyContent='space-between'>
        <Link pr='10' pl={{ base: '6', sm: '10' }} ml={{ base: '0px', lg: '-10px' }} href='/' passHref display='flex' flexDirection='row' alignItems='center' _hover={{ textDecoration: 'none', color: useColorModeValue('gray.700', 'gray.100') }}>
          <Box letterSpacing='-1.0px' fontSize={{ base: '36', sm: '48' }} fontWeight='700'>Performant</Box>
        </Link>
        <Flex
          alignItems={'center'}
        >
          <IconButton
            mr={{ base: '6', sm: '12' }}
            mt='2'
            size='lg'
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
                {Links.map((link, index) => (
                    <NavLink key={index}>{link}</NavLink>
                ))}
              {/*<NextLink href={'https://blog.performantweb.dev'} passHref>
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
                </NextLink>*/}
            </HStack>
          </Stack>
        </Flex>
      </Flex>
        <Collapse in={isOpen} animateOpacity>
            <Box
              position='relative'
              bg={isOpen && bg}
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
                    {colorMode === 'light' ? <TbMoon size='75%' /> : <SunIcon h='20px' w='20px'/>}
                  </Button>
                </Box>
              </Stack>
            </Box>
        </Collapse>
    </Box >
  );
}