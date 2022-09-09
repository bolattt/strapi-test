// import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Homepage = () => {
//   const { data, error, loading } = useFetch(
//     "http://localhost:1337/api/reviews"
//   );

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error :( </p>}
      {data &&
        data.map((review) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.attributes.rating}</div>
            <h2>{review.attributes.title}</h2>
            <small>console list</small>
            <p>{review.attributes.body.substring(0, 200)}...</p>
            <Link to={`/details/${review.id}`}> Read More </Link>
          </div>
        ))}
    </div>
  );
};

export default Homepage;
