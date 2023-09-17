import React from 'react'
import DetailsBanner from './detailsBanner/DetailsBanner'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Cast from './cast/cast';
import VideosSection from './videoSection/VideoSection';
import Similar from './carousels/Similar';
import Recommended from './carousels/Recommended';


const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data:credits, loading:creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommended mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details
