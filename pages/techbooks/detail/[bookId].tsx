import { getTechbook } from '../../../fetchData/getTechbookData';
import { Techbook } from '../list';
import {
  Box,
  Heading,
  Tag
} from '@chakra-ui/react'

const Detail = ({ data }) => {

  const book: Techbook = data

  return (
    <main>
      <Box>
        <Heading as="h1">{ book.title }</Heading>

        <Box>
          { book.tags.map( tag => {
            return (
              <Tag size='md'>
                {tag}
              </Tag>
            )
          })}
        </Box>

        <div>
          <a href={ book.link } target='_blank'>Amazonリンク</a>
        </div>

        <div>{ book.comment }</div>
      </Box>
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
