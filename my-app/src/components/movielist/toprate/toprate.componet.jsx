import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import MovieCard from "../../movie-card/movie-card.component";
import { setMovie_toprate } from "../../../store/movie/movieAciton";

import { category, movieType } from "../../../API/tmdbapi";
import apiConfig from "../../../API/apiConfig";

import "./toprate.styles.scss";

const Toprate = () => {
  const dispatch = useDispatch();

  const fetchmovie = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/${category.movie}/${movieType.top_rated}?api_key=${apiConfig.apiKey}`
      )
      .catch((error) => {
        console.log("Error", error);
      });
    dispatch(setMovie_toprate(response.data.results));
  };

  useEffect(() => {
    fetchmovie();
  }, []);

  const movie = useSelector((state) => state.movies.movies_toprate);

  return (
    <div className="top_rate-list">
    <Swiper 
    grabCursor={true}
    spaceBetween={10}
    slidesPerView={'auto'}
    >
        {
            movie.map((item, i) => (
                <SwiperSlide key={i}>
                    <MovieCard item={item}/>
                </SwiperSlide>
            ))
        }
    </Swiper>
</div>
  )
};

export default Toprate;
