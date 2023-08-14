function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of NewsArticleList</h1>
      {articles.map((el) => {
        return (
          <div key={el.id}>
            <h2>
              {el.id} {el.title} | {el.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
