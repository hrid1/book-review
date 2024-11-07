import { Helmet } from "react-helmet-async";

const PageToRead = () => {
  return (
    <div>
      <Helmet>
        <title>Page Read | BookReview</title>
      </Helmet>

      <h1>This is page to read</h1>
    </div>
  );
};

export default PageToRead;
