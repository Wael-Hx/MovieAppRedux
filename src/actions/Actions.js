import {SEARCH,ADD_MOVIE, EDIT_MOVIE, REMOVE_MOVIE} from '../const/actionTypes';





export const searchForMovie=(text)=>{
    return {type:SEARCH , text }
}
export const addMovie=(movie)=>{
    return {type:ADD_MOVIE , movie }
}
export const editMovie=(movie)=>{
    return {type:EDIT_MOVIE , movie }
}
export const removeMovie=(movie)=>{
    return {type:REMOVE_MOVIE , movie }
}