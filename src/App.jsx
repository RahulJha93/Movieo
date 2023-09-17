import React, { useEffect } from 'react'
import { fetchDataFromApi } from './utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration,getGenres } from './store/homeSlice'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import SearchResult from './pages/searchResult/SearchResult'
import Explorer from './pages/explorer/Explorer'
import PageNotFound from './pages/404/PageNotFound'

const App = () => {

  const { url } = useSelector((state) => state.home)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchApiConfig();
    genresCall();
    
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((response) => {
      console.log(response);
      const url ={
        backdrop: response.images.secure_base_url + 'original',
        poster: response.images.secure_base_url + 'original',
        profile: response.images.secure_base_url + 'original'
      }
      dispatch(getApiConfiguration(url));

    })

  };

  const genresCall  = async () => {
    let promises = [];
    let endpoints =["tv","movie"];
    let allgenres = {};
    
    endpoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    });

    const data = await Promise.all(promises);
    data.map(({genres})=>{
      return genres.map((item)=>(allgenres[item.id]=item));
    });

    dispatch(getGenres(allgenres));

  };

  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/discover/:mediaType" element={<Explorer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  )
}

export default App
