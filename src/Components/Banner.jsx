
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";


export default function Banner() {
  const [record, setRecord] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecord = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=2"
      );
      const bannerrecord = await response.json();
      setRecord(bannerrecord.results[12]);
      setLoading(false);
    } catch (error) {

      setTimeout(()=>{
        setLoading(false)
      }, 2000);

      return;
    }
  };

  useEffect(() => {
    getRecord();
  }, []);

  if (loading) {
    return(
      <div className="loading">
    <CircularProgress />
    </div>
    );
  }
  return(
    <div className="banner-container">
     
      <img  className="banner-img" src={`https://image.tmdb.org/t/p/original/${record.backdrop_path}`} />
      <p className="img-text">{record.overview}</p>
    </div>
  );
}
