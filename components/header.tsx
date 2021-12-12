import {
  Box,
  Flex,
  Heading,
  HStack,
  Spacer
} from '@chakra-ui/react';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <Flex
        as="header"
        alignItems="flex-end"
        bg="teal.400"
        position="fixed"
        top={0}
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
          <Box>トップ</Box>
          <Box>プロフィール</Box>
          <Box>職務経歴</Box>
          <Box>制作物</Box>
        </HStack>
      </Flex>
    )
  }
}

export default Header;
