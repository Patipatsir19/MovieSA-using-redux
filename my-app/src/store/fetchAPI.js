
// import { useDispatch } from "react-redux";
// import axios from 'axios'

// import { category, movieType } from "../API/tmdbapi";
// import apiConfig from "../API/apiConfig";

// import { setMovie_toprate, setMovie_popular, setMovie_upcoming } from "./movie/movieAciton";

// const dispatch = useDispatch();

// export const fetchmovie_Poppular = async () => {
//   const response = await axios
//     .get(
//       `https://api.themoviedb.org/3/${category.movie}/${movieType.popular}?api_key=${apiConfig.apiKey}`
//     )
//     .catch((error) => {
//       console.log("Error", error);
//     });
//   dispatch(setMovie_popular(response.data.results));
// };

// export const fetchmovie_TopRate = async () => {
//   const response = await axios
//     .get(
//       `https://api.themoviedb.org/3/${category.movie}/${movieType.top_rated}?api_key=${apiConfig.apiKey}`
//     )
//     .catch((error) => {
//       console.log("Error", error);
//     });
//   dispatch(setMovie_toprate(response.data.results));
// };

// export const fetchmovie_Upcoming = async () => {
//   const response = await axios
//     .get(
//       `https://api.themoviedb.org/3/${category.movie}/${movieType.upcoming}?api_key=${apiConfig.apiKey}`
//     )
//     .catch((error) => {
//       console.log("Error", error);
//     });
//   dispatch(setMovie_upcoming(response.data.results));
// };

// export const getAllMoviePopular = (state) => state.movies.movies_poppular;
// export const getAllMovieToprate = (state) => state.movies.moives_toprate;
// export const getAllMovieUpcoming = (state) => state.movies.movies_upcoming;