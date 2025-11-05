// import React from 'react'
// import { IMG_CDN_URL } from '../utils/constants';

// const MovieCard = ({posterPath}) => {
//   return (
//     <div>
//         <img className='w-48' src={IMG_CDN_URL + posterPath} alt="Movie Card" />      
//     </div>
//   )
// }

// export default MovieCard;

import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-48 pr-4 ">
      <img
        className="w-full h-72 object-cover rounded-md"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
