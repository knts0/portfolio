import { getTechbook } from '../../../fetchData/getTechbookData';
import { Techbook } from '../list';
import {
  Box,
  Flex,
  Heading,
  Tag
} from '@chakra-ui/react'

const Detail = ({ data }) => {

  const book: Techbook = data

  return (
    <main>
      <Flex>
        <Box mx="auto" pt="8">
          <Heading as="h1">{ book.title }</Heading>

          <Box mt="4">
            { book.tags.map( tag => {
              return (
                <Tag key={tag} size='md'>
                  {tag}
                </Tag>
              )
            })}
          </Box>

          <Box bg="white" rounded="md" p={4} shadow="lg" mt="4">
            ここにテキストが入ります
            <br />
            ここにテキストが入ります
            <br />
            ここにテキストが入ります
            <br />
            ここにテキストが入ります
          </Box>

          <Box mt="4">
            <a href={ book.link } target='_blank'>Amazonリンク</a>
          </Box>

          <div>{ book.comment }</div>
        </Box>
      </Flex>
    </main>
  )
}

export const getServerSideProps = async (context) => {
  const { bookId } = context.params;
  
  const techbook = await getTechbook(bookId);
  if (!techbook) {
    return { notFound: true };
  }
  return { props: { data: techbook } };
};

export default Detail;
