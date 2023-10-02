import React from 'react'
import './feed.css'
import Reviews from './reviews/reviews'

/**
 * Feed component on home page of site. Includes major info about 
 * user's current courses and reviews. Also contians information about 
 * best tutors (with the best reviews). 
 * @author Michał Pilch <@mpHcl>
 * @returns {TSX} component containing lessons info, reviews and best tutors
 */
const Feed = () => {
  return <>
    <div>
      <Reviews></Reviews>
    </div>
  </>
}

export default Feed;