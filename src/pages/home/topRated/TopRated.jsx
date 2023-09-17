import React ,{useState}from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const TopRated = () => {
    const [endPoint, setEndPoint] = useState("movie")
    const {data, loading, error} = useFetch(`/${endPoint}/top_rated`)

  const onTabChange = (tab) =>{
   setEndPoint(tab==="Movies" ? "movie" : "tv");
  };


  return (
    <>
        
    <ContentWrapper>
      <div className="flex w-full justify-between">
      <span className="m-0 text-2xl text-white font-normal">Trending</span>
      <SwitchTab data={["Movies","Tv Shows"]} onTabChange={onTabChange}/>
      </div>
    </ContentWrapper>
    
    <Carousel data={data?.results} endpoint={endPoint}/>

    </>
        
  );
};

export default TopRated;
