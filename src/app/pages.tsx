import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query; // Get query from URL

  return (
    <div>
      <h1>Search Results for: {q}</h1>
      {/* Render search results based on the query */}
    </div>
  );
};

export default SearchPage;
