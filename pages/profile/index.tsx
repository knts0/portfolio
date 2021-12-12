import {
  Box,
} from '@chakra-ui/react';

import Header from '../../components/header';
import Footer from '../../components/footer';

const Index = () => {

  return (
    <div className="container">
      <Header></Header>

      <Box
        bg="gray.50"
        p={12}
      >
      </Box>

      <Footer></Footer>
    </div>
  )
}

export default Index;
