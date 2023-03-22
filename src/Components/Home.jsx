
import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard';
import Pagination from '@mui/material/Pagination';

export default function Home() {
  const [record, setRecord] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const getRecord = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=20b7dac373c2e985d153e16ebbc26ff8&language=en-US&page=2"
      );
      const bannerrecord = await response.json();
      console.log(bannerrecord.results);
      setRecord(bannerrecord.results);
      setTimeout(() =>{
      setLoading(false);
    }, 2000);
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

  if(loading){
    return <div>Loading....</div>;
  }

  return (
    <>
    <div  className='card-container'>
      {record.map((val, index) => {
        return(
          <div className='movie-card' key={index}>
       <MovieCard val={val} />
       </div>
       );
      })}
    </div>
    <div style={{ display:"flex", justifyContent:"center"}}>
    <Pagination count={5} variant="outlined" />
</div>
    </>
  );
}
