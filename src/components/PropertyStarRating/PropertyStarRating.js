import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function PropertyStarRating({rating}) {
  const stars = [
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
  ]

  for (let i = 0; i < rating; i++) {
    stars[i].filled = true
  }

  return <span className='PropertyStarRating'>
    { stars.map((star, index) => <Star key={index} filled={star.filled} />) }
  </span>
}

function Star({filled}) {
  const library = filled ? 'fas' : 'fa'
  return <FontAwesomeIcon className='black' icon={ [ library, 'star'  ]  } />
}
