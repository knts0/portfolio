import { getTechbook } from '../../../fetchData/getTechbookData';
import { Techbook } from '../list';

const Detail = ({ data }) => {

  const book: Techbook = data

  return (
    <main>
      <h1>{ book.title }</h1>

      <div>{ book.tags.map(tag => <li>{tag}</li>) }</div>

      <div>
        <a href={ book.link } target='_blank'>Amazonリンク</a>
      </div>

      <div>{ book.comment }</div>
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
