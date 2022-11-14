import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import MovieCard from "../../movie-card/movie-card.component";
import { setMovie_popular } from "../../../store/movie/movieAciton";

import { category, movieType } from "../../../API/tmdbapi";
import apiConfig from "../../../API/apiConfig";

import "./popular.styles.scss";

const Popular = () => {
  const dispatch = useDispatch();

  const fetchmovie = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/${category.movie}/${movieType.popular}?api_key=${apiConfig.apiKey}`
      )
      .catch((error) => {
        console.log("Error", error);
      });
    dispatch(setMovie_popular(response.data.results));
  };

  useEffect(() => {
    fetchmovie();
  }, []);

  const movie = useSelector((state) => state.movies.movies_poppular);

  return (
    <div className="popular-list">
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

export default Popular;
