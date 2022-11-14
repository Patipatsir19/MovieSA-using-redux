import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import MovieCard from "../../movie-card/movie-card.component";
import { setTV_popular } from "../../../store/TV/TVAction";

import { category, tvType} from "../../../API/tmdbapi";
import apiConfig from "../../../API/apiConfig";

import './popoularTV.styles.scss'

const TVpopular = () => {
  const dispatch = useDispatch();

  const fetchmovie = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/${category.tv}/${tvType.popular}?api_key=${apiConfig.apiKey}`
      )
      .catch((error) => {
        console.log("Error", error);
      });
    dispatch(setTV_popular(response.data.results));
  };

  useEffect(() => {
    fetchmovie();
  }, []);

  const TV = useSelector((state) => state.TV.TV_poppular);

  return (
    <div className="tv_popular-list">
    <Swiper 
    grabCursor={true}
    spaceBetween={10}
    slidesPerView={'auto'}
    >
        {
            TV.map((item, i) => (
                <SwiperSlide key={i}>
                    <MovieCard item={item}/>
                </SwiperSlide>
            ))
        }
    </Swiper>
</div>
  )
};

export default TVpopular;
