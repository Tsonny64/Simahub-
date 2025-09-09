import { useRouter } from "next/router";

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query; // Get the query parameter from the URL

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {q ? (
        <p>You searched for: <strong>{q}</strong></p>
      ) : (
        <p>Please enter a search term.</p>
      )}
    </div>
  );
};

export default SearchPage;
