import { useRouter } from 'next/router';

const Detail = () => {
  const router = useRouter();
  const { bookId } = router.query;

  return (
    <main>
      <h1>
        ここに技術書の名前
      </h1>

      <div>{ bookId }</div>
    </main>
  )
}

export default Detail;
