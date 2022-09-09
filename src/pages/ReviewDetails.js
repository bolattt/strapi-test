import { useParams, Link } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          rating
          body
        }
      }
    }
  }
`;

const ReviewDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(REVIEW, {
    variables: {
      id: id,
    },
  });
  //   const { data, error, loading } = useFetch(
  //     "http://localhost:1337/api/reviews/" + id
  //   );

  console.log(data);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error :( </div>}
      {data && (
        <div className="review-card">
          <div className="rating">{data.review.data.attributes.rating}</div>
          <h2>{data.review.data.attributes.title}</h2>
          <small>console list</small>
          <p>{data.review.data.attributes.body}</p>
          <Link to={"/"}> Back to Homepage</Link>
        </div>
      )}
    </div>
  );
};

export default ReviewDetails;
