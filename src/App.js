import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const getAPI = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json`)
    ).json();
    setMovieList(json.data.movies);
    setIsLoading(false);
    console.log(json.data.movies.title);
  };
  useEffect(() => {
    getAPI();
  }, []);
  console.log(movieList[0]);

  return (
    <div className="App">
      {isLoading ? (
        <div>로딩중..</div>
      ) : (
        <div>
          <ul>
            {movieList.map((movie, i) => (
              <li key={movie.title}>
                <img src={movie.medium_cover_image} alt="포스터" />
                <h2 className="title">{movie.title}</h2>
                <p>{movie.genres[0]}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
