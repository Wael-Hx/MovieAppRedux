import React from 'react';
import MC from '../components/MovieContainer';
import { Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { movies } from '../reducer/Reducer';
import '../Router/MovieAppRouter.css';

const MovieAppRouter = () => {
    return (
        <>
            <Link to='/'  ><h3>My Movies App </h3></Link>
            <Route path='/' exact component={MC} ></Route>
            {movies.map(movie =>
                <Route key={movie.id} path={'/' + movie.name.replace(/\s/g, '')} exact render={() =>
                    <div className='description'>
                        <div className='movieInfo'>
                            <img src={movie.img} onError={(e) => { e.target.src = 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-simple-atmosphere-business-gray-background-ppth5-background-image_142920.jpg' }} alt='movie' />
                            <h2>{movie.name}</h2>
                        </div>
                        <div className='synopsis'>
                            {movie.synopsis ? <p>{movie.synopsis}</p> : <p> this section is under developement </p>}
                        </div>
                    </div>
                }  ></Route>
            )}

        </>
    )
}

const mapStateToProps = state => {
    return { movies: state }
}


export default connect(mapStateToProps)(MovieAppRouter)
