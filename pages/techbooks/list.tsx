import {
  Box,
  Heading,
  VStack
} from '@chakra-ui/react';
import Link from 'next/link'

import Header from '../../components/header'
import { getTechbookList } from '../../fetchData/getTechbookData';

export type Techbook = {
  id: number,
  title: string,
  link: string,
  tags: string[],
  comment: string,
}

const SSRPage = ({ data }) => {
  const books: Techbook[] = data;

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
          読んだ技術書リスト
        </Heading>

        <Box
          className="description"
          mb="4"
        >
          読んだ技術書リストを学んだポイントとともに
        </Box>

        <Box
          bg="white"
          rounded="md"
          shadow="lg"
          p={4}
        >
          <VStack
            alignItems="flex-start"
          >
            { books.map(book =>
              <Box key={book.id}>
                <Link
                  href="/techbooks/detail/[bookId]"
                  as={`/techbooks/detail/${book.id}`}
                >
                  {book.title}
                </Link>
              </Box>
            ) }
          </VStack>
        </Box>
      </Box>

      <footer>
        <div>© Kana Otawara 2021</div>
        {/* <img src="/vercel.svg" alt="Vercel" className="logo" /> */}
        <div>

        </div>
      </footer>

      <style jsx>{`

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

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

export const getServerSideProps = async () => {
  const techbooks = await getTechbookList();
  if (!techbooks) {
    return { notFound: true };
  }
  return { props: { data: techbooks } };
};

export default SSRPage;
