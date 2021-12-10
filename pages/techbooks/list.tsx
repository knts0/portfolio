import Head from 'next/head'
import { getTechbookList } from '../../fetchData/getTechbookData';

export type Techbook = {
  title: string,
  link: string,
  tags: string[],
  comment: string,
}

const SSRPage = ({ data }) => {
  const books: Techbook[] = data;

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          読んだ技術書リスト
        </h1>

        <p className="description">
          読んだ技術書リストを学んだポイントとともに
        </p>

        <ul>
          { books.map(book => <li>{book.title}   <a href={book.link} target='_blank'>[Amazon]</a></li>) }
        </ul>
      </main>

      <footer>
        <div>© Kana Otawara 2021</div>
        {/* <img src="/vercel.svg" alt="Vercel" className="logo" /> */}
        <div>
          
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

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

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
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
