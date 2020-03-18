import React, { Component } from 'react'
import AM from './AddNewMovie'
import { connect } from "react-redux"
import { addMovie, removeMovie, searchForMovie, editMovie } from '../actions/Actions'
import {Link} from 'react-router-dom'
 

export class MovieContainer extends Component {

    state = {
        input: '',
        star: 0,
        edit: ''
    }


    handleDesc =()=>{
     this.props.searchForMovie({ text: '', star:1 });
       
    }


    search = (e) => { e.preventDefault() }
    handleChange = (e) => {
        this.props.searchForMovie({ text: e.target.value, star: this.state.star })
        this.setState({ input: e.target.value } )
       /*  this.props.searchForMovie({ text: e.target.value, star: this.state.star }); */
    }
    totalRating = (e) => {
        this.setState({
            star: e.target.value
        })
        this.props.searchForMovie({ text: this.state.input, star: e.target.value })
    }
    defaultImg = (e) => { e.target.src = 'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-simple-atmosphere-business-gray-background-ppth5-background-image_142920.jpg' }

    addNewMovie = (movieData) => {
        this.props.addMovie(movieData = { ...movieData, id: Math.random(), editMode: false })

    }

    handleRemove = (id) => {
        this.props.removeMovie(id)
    }
    handleEditChange = (e) => {
        this.setState({ edit: e.target.value })
    }
    handleEdit = (movie) => {
        this.props.editMovie(movie = { id: movie, newTitle: this.state.edit.trim() });
        this.setState({ edit: '' })

    }
    render() {
        return (
            <>
                {/*  the header */}
                <form className='searchBar' onSubmit={this.search}>
                    <input type='text' className='search' value={this.state.input} onChange={this.handleChange} />
                    <div className='ratings'>
                        {[...Array(5)].map((star, i) =>
                            <label key={i + 1}>
                                <input type='radio' name='rating' value={i + 1} onClick={this.totalRating} />
                                <span className='star' style={this.state.star >= i + 1 ? { color: 'gold' } : { color: 'silver' }} >&#9733;</span>
                            </label>
                        )}
                    </div>
                </form>
                {/*  movie container below */}
                <div className='moviesContainer'>
                    {this.props.moviesList.map(movie =>
                        <div className='movie' key={movie.id} >
                            {movie.editMode ? <form onSubmit={() => this.handleEdit(movie.id)}><input type='text' placeholder='New Title Here...' onChange={this.handleEditChange} /> </form>
                                : <h2> {movie.name} </h2>}
                            <img src={movie.img} onError={this.defaultImg} alt='movie' />
                            <div className='movieRatings'>
                                {[...Array(5)].map((star, i) =>
                                    <label key={i + 1}>
                                        <input type='radio' name='rating' value={i + 1} />
                                        <span className='star' style={movie.rating >= i + 1 ? { color: 'gold' } : { color: 'silver' }} >&#9733;</span>
                                    </label>
                                )}
                                <div className='remove-edit' >
                                <Link to={'/'+movie.name.replace(/\s/g, '')} onClick={this.handleDesc}   ><span className='info' ><i className='fa fa-info-circle' aria-hidden="true" ></i> </span> </Link>
                                    <span className='remove' onClick={() => this.handleRemove(movie.id)} ><i className="fa fa-trash" aria-hidden="true"></i></span>
                                    <span className='edit' onClick={() => this.handleEdit(movie.id)} ><i className="fa fa-pencil-square-o" aria-hidden="true"></i></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <AM movieData={this.addNewMovie} />
            </>
        )
    }
}



const mapStateToProps = state => {
    return { moviesList: state }
}

const mapDispatchToProps = dispatch => {
    return {
        searchForMovie: (text) => dispatch(searchForMovie(text)),
        addMovie: (movie) => dispatch(addMovie(movie)),
        removeMovie: (movie) => dispatch(removeMovie(movie)),
        editMovie: (movie) => dispatch(editMovie(movie))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)