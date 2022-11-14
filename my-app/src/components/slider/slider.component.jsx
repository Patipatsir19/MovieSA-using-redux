import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, {OutlineButton} from '../button/button.component'
import Modal, { ModalContent } from '../modal/modal.component';

import apiConfig from '../../API/apiConfig';

import './slider.styles.scss'


const Slider = () => {

    SwiperCore.use([Autoplay]);

    const movie = useSelector((state) => state.movies.movies_poppular);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const res = await movie;
                setMovieItems(res.slice(1, 4));
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);


    return (
        <div className="slider">
            <Swiper
                modules={[Autoplay]}
                autoplay={{delay:5000, disableOnInteraction: false}}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <SliderItems item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {
                movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
            }
        </div>
    );
}

const SliderItems = props => {
    const movie = useSelector((state) => state.movies.movies_poppular);

    let navigate = useNavigate();

    const item = props.item;

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);
        console.log(modal);

        const videos = await movie(item.id);

        if (videos.results.length > 0) {
            const videSrc = 'https://www.youtube.com/embed/' + videos;
            modal.querySelector('.modal_content > iframe').setAttribute('src', videSrc);
        } else {
            modal.querySelector('.modal_content').innerHTML = 'No trailer';
        }

        modal.classList.toggle('active');
    }

    return (
        <div
            className={`slider_item ${props.className}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="slider_item_content container">
                <div className="slider_item_content_info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Button onClick={() => navigate('/movie/' + item.id)}>
                            Watch now
                        </Button>
                        <OutlineButton onClick={setModalActive}>
                            Watch trailer
                        </OutlineButton>
                    </div>
                </div>
                <div className="slider_item_content_poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    )
}

const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`} >
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}

export default Slider;