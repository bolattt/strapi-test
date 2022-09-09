import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const ReviewDetails = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/reviews/" + id
  );
  console.log(data);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error :( </div>}
      {data && (
        <div className="review-card">
          <div className="rating">{data.attributes.rating}</div>
          <h2>{data.attributes.title}</h2>
          <small>console list</small>
          <p>{data.attributes.body}</p>
          <Link to={"/"}> Back to Homepage</Link>
        </div>
      )}
    </div>
  );
};

export default ReviewDetails;
