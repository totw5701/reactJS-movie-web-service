import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  //const x = useParams(); object로 받기
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h3>Genre</h3>
          <ul>
            {movie.genres.map((genre, idx) => (
              <li key={idx}>{genre}</li>
            ))}
          </ul>
          <h3>Rating</h3>
          <span>{movie.rating}</span>
          <h3>Description</h3>
          <p>{movie.description_full}</p>
          <h3>Torrent</h3>
          <ul>
            {movie.torrents.map((torrent, idx) => (
              <li key={idx}><a href={torrent.url}>{torrent.url}</a></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
