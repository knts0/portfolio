import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const Header = () => {
  const linkStyle = {
    "rounded": "md",
    "p": 1,
    "_hover": {
       bg: "teal.100",
       cursor: "pointer"
    }
  }

  return (
    <Flex
      as="header"
      alignItems="flex-end"
      bg="teal.400"
      width="full"
      shadow="md"
      py={4}
      px={8}
    >
      <Heading
        as="h1"
        color="teal.100"
      >
        Kana Otawara
      </Heading>
      <Spacer />
      <HStack
        color="teal.900"
        spacing={4}
      >
        <Box>
          <NextLink href="/profile">
            <Box {...linkStyle}>
              プロフィール
            </Box>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/resume">
            <Box {...linkStyle}>
              職務経歴
            </Box>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="/works">
            <Box {...linkStyle}>
              制作物
            </Box>
          </NextLink>
        </Box>
      </HStack>
    </Flex>
  )
}

export default Header;
