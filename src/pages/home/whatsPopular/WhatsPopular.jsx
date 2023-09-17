import React ,{useState}from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const WhatsPopular = () => {
    const [endPoint, setEndPoint] = useState("movie")
    const {data, loading, error} = useFetch(`/${endPoint}/popular`)

  const onTabChange = (tab) =>{
   setEndPoint(tab==="Movies" ? "movie" : "tv");
  };


  return (
    <>
        
    <ContentWrapper className="">
      <div className="flex w-full justify-between">
      <span className="m-0 text-2xl text-white font-normal">What's Popular</span>
      <SwitchTab data={["Day","Week"]} onTabChange={onTabChange}/>
      </div>
    </ContentWrapper>
    
    <Carousel data={data?.results} loading={loading}/>

    </>
  );
};

export default WhatsPopular;
