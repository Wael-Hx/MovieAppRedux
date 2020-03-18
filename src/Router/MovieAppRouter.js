import React from 'react';
import MC from '../components/MovieContainer';
import { Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { movies } from '../reducer/Reducer';
import DescriptionCard from '../components/DescriptionCard';
import '../Router/MovieAppRouter.css';

const MovieAppRouter = () => {
    return (
        <>
            <Link to='/'  ><h3>My Movies App </h3></Link>
            <Route path='/' exact component={MC} ></Route>
            {movies.map(movie =>
                <Route key={movie.id} path={'/' + movie.name.replace(/\s/g, '')} exact render={() => <DescriptionCard movie={movie} />}></Route>)}

        </>
    )
}

const mapStateToProps = state => {
    return { movies: state }
}


export default connect(mapStateToProps)(MovieAppRouter)
