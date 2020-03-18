import React from 'react'



 function DescriptionCard({movie} ) {
    return (
        <div className='description'>
        <div className='movieInfo'>
            <img src={movie.img} onError={(e) => { e.target.src = 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-simple-atmosphere-business-gray-background-ppth5-background-image_142920.jpg' }} alt='movie' />
            <h2>{movie.name}</h2>
        </div>
        <div className='synopsis'>
            {movie.synopsis ? <p>{movie.synopsis}</p> : <p> this section is under developement </p>}
        </div>
    </div>
    )
}
export default DescriptionCard