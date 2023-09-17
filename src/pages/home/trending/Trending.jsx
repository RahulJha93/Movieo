import React ,{useState}from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../switchTab/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import "../home.scss"

const Trending = () => {
    const [endPoint, setEndPoint] = useState("day")
    const {data, loading, error} = useFetch(`/trending/all/${endPoint}`)

  const onTabChange = (tab) =>{
   setEndPoint(tab==="Day" ? "day" : "week")
  };


  return (
    <>
        
    <ContentWrapper className="">
      <div className="flex w-full justify-between">
      <span className="m-0 text-2xl text-white font-normal">Trending</span>
      <SwitchTab data={["Day","Week"]} onTabChange={onTabChange}/>
      </div>
    </ContentWrapper>
    
    <Carousel data={data?.results} loading={loading}/>

    </>
  );
};

export default Trending;
