import React from 'react';
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  // ✅ if movies not loaded yet, don't render
  if (!movies || movies.length === 0) return null;

  return (
    <div className='p-6'>
        <h1 className="text-3xl text-white py-4">{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            
            <div className='flex'>
                {movies.map((movie)=>(
                    <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                ))}
            </div>
        </div>
    </div>
  );
};

export default MovieList;
