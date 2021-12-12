import {
  Box,
  Heading,
  HStack,
  StackDivider,
  Tag,
  VStack
} from '@chakra-ui/react';
import Link from 'next/link'

import Header from '../../components/header'
import Footer from '../../components/footer';
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
          shadow="md"
          p={4}
        >
          <VStack
            alignItems="flex-start"
            divider={<StackDivider borderColor='gray.200' />}
          >
            { books.map(book =>
              <Box key={book.id}>
                <Box mb={2}>
                  <Link
                    href="/techbooks/detail/[bookId]"
                    as={`/techbooks/detail/${book.id}`}
                  >
                    {book.title}
                  </Link>
                </Box>
                <Box>
                  <HStack
                    spacing={2}
                  >
                    { book.tags.map( tag => {
                      return (
                        <Tag key={tag} size='md'>
                          {tag}
                        </Tag>
                      )
                    })}
                  </HStack>
                </Box>
              </Box>
            ) }
          </VStack>
        </Box>
      </Box>

      <Footer></Footer>
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
