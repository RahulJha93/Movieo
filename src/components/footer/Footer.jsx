import React from "react";
import footerLogo from "../../assets/footer-bg.jpg";
// import logo from "../../assets/movix-logo.svg"
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import logo from "../../assets/movix-logo.png";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[black]" >
      {/* <div className="">
        <img
          src={footerLogo}
          alt=""
          className="w-[1500px] h-[300px] object-cover object-center"
        />
      </div> */}
     
      <ContentWrapper className="absolute">
      <div className="realtive flex justify-evenly">
        <div className="">
        {/* <div className="logo flex items-center gap-2 cursor-pointer">
          <img src={logo} alt=""  onClick={()=> navigate("/")} className="w-[50px] h-[50px]"/>
          <a to="/" className="text-4xl logocode font-bold" onClick={()=> navigate("/")}>MOVIEO</a>
        </div> */}
          <div className="flex gap-4 mt-4">
          <BiLogoFacebook className="text-white rounded-[50%] text-3xl bg-[#222129] hover:bg-[blue] cursor-pointer"/>
          <AiOutlineTwitter className="text-white rounded-[50%] text-3xl bg-[#222129] hover:bg-[#00acee] cursor-pointer"/>
          <AiFillYoutube className="text-white rounded-[50%] text-3xl bg-[#222129] hover:bg-[red] cursor-pointer"/>
          </div>
          <div className="text-white  font-medium mt-4">
        © 2023 Movieo. All rights reserved.
      </div>
        
        </div>
        <div className="flex flex-col text-white font-medium">
          <a to="" className="mt-4 hover:text-[#da2f68] cursor-pointer"  >Home</a>
          <a to="" className="mt-4  hover:text-[#da2f68] cursor-pointer">Contact Us</a>
          <a to="" className="mt-4  hover:text-[#da2f68] cursor-pointer">Term Of Services</a>
          <a to="" className="mt-4 mb-4  hover:text-[#da2f68] cursor-pointer">About Us</a>
        </div>
        <div className="flex flex-col text-white font-medium">
          <a to="" className="mt-4  hover:text-[#da2f68] cursor-pointer">Live</a>
          <a to="" className="mt-4  hover:text-[#da2f68] cursor-pointer">FAQ</a>
          <a to="" className="mt-4  hover:text-[#da2f68] cursor-pointer">Premium</a>
          <a to="" className="mt-4 mb-4  hover:text-[#da2f68] cursor-pointer">Privacy Policy</a>
        </div>
      </div>
      
        </ContentWrapper>

    </div>
  );
};

export default Footer;
