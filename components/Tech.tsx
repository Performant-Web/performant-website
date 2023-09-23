import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Box,
  Grid,
  GridItem,
  Divider,
  chakra,
  StackDivider,
  Icon,
  List,
  ListItem,
  Tag,
  TagLeftIcon,
  TagLabel,
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

const tags = ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Figma", "GraphQL", "ChakraUI", "Tailwind", "Strapi", "Plasmic", "Craft", "Sanity", "Git", "GitHub", "GitLab", "Slack", "Asana", "Trello", "Vercel", "Netlify", "Digital Ocean" ]

export default function Tech() {
  return (
      <Box as={Container} maxW='1456px' py={{ base: '3', lg: '6' }} pb={{ base: 12, sm: 24 }}>
        <Wrap spacing="4">
          {tags.map((tag, index)=>{
            return(
              <WrapItem>
                <Tag background="rgba(133,133,133, 0.01)" padding="9px 16px" border="1px solid" borderColor="gray.300" borderRadius="1px" size="lg" key={index} >
                  <TagLeftIcon boxSize='12px' as={IoHelpOutline} />
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              </WrapItem>
            )
          })}
        </Wrap>
      </Box>
  );
}