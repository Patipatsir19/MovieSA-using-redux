import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import MovieCard from "../../movie-card/movie-card.component";
import { setTV_toprate } from "../../../store/TV/TVAction";

import { category, tvType} from "../../../API/tmdbapi";
import apiConfig from "../../../API/apiConfig";

import './toprateTV.styles.scss'

const TVtoprate = () => {
  const dispatch = useDispatch();

  const fetchmovie = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/${category.tv}/${tvType.top_rated}?api_key=${apiConfig.apiKey}`
      )
      .catch((error) => {
        console.log("Error", error);
      });
    dispatch(setTV_toprate(response.data.results));
  };

  useEffect(() => {
    fetchmovie();
  }, []);

  const TV = useSelector((state) => state.TV.TV_toprate);

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

export default TVtoprate;
