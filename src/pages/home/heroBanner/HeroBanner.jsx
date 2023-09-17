// import React, { useState } from "react";
import { useEffect } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { useNavigate } from "react-router-dom";
import Image from "../../../components/lazyLoadImage/Image";
import Spinner from "../../../components/spinner/Spinner.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import Contentwrapper from "../../../components/contentWrapper/ContentWrapper";

import { useNavigate } from "react-router-dom";
import "./herobanner.scss";
import "./herobanner.css";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

const HeroBanner = () => {
  const { data, loading } = useFetch("/trending/movie/day");
  const [moviesItem, setmoviesItem] = useState(data);
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  useEffect(() => {
    setmoviesItem(data);
  }, [data]);
  return (
    <>
    
     {loading && <Spinner initial={true}/>}
   
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // speed={1200}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {moviesItem?.results?.slice(0,6)?.map((items, i) => {
        return (
          <SwiperSlide key={i}>
            {" "}
            <div className="relative w-full h-full">
           
              <img
                src={
                  "http://image.tmdb.org/t/p/original/" + items?.backdrop_path
                }
                alt=""
              />
              
            </div>
            <div className="opacity-layer"></div>
            <div className="content-wrapper flex">
              <div className="textContainer">
                <div className="text-container">
                  <h3>{items?.title}</h3>
                  <p>{(items?.overview).slice(0, 110)}</p>
                </div>
                <div className="text-details">
                  {/* <p>Rating:{(items?.vote_average).toFixed(1)}/10</p>
                  <p>Duration:2H 45M</p>
                  <p>Release:{(items?.release_date).slice(0, 4)}</p> */}
               
                <button className="mt-[10px]"
                onClick={() =>
                  navigate(
                      `/${items.media_type || endpoint}/${
                          items.id
                      }`
                  )
              }
                >View More</button>
                 </div>
              </div>
              <div className="shadowStyle">
                <img
                  src={url.backdrop + items?.poster_path}
                  alt=""
                  className="imgStyle"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </>
  );
};

export default HeroBanner;
