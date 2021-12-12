import {
  Box,
  Flex
} from '@chakra-ui/react'
import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={4}
      >
        <Box>© Kana Otawara 2021</Box>
        {/* <img src="/vercel.svg" alt="Vercel" className="logo" /> */}
        <Box>

        </Box>
      </Flex>
    )
  }
}

export default Footer;
