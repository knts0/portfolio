import {
  Box,
  Heading
} from '@chakra-ui/react';

import Footer from '../components/footer'
import Header from '../components/header'

export default function Home() {
  return (
    <div className="container">
      <Header></Header>

      <Box
        bg="gray.50"
        p={12}
      >
        <Heading
          as="h2"
          mb="4"
        >
          Kana Otawara
        </Heading>

        <Box
          className="description"
          mb="4"
        >
          Webアプリケーションエンジニア
        </Box>
      </Box>

      <Footer></Footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
