import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import Loader from "./Loader";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return <Loader />; //if movies not present

  const mainMovie = movies[1]; //selecting one movie to dislay in main container
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie; //extractiong

  return (
    <div className="w-full">
      <VideoTitle id={id} title={original_title} overview={overview} />

      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
