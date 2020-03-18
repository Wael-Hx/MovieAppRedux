import { SEARCH, ADD_MOVIE, EDIT_MOVIE, REMOVE_MOVIE } from '../const/actionTypes';

const movieAppReducer = (state = movies, action) => {
    switch (action.type) {
        case SEARCH:
            let term = action.text.text.toLowerCase().trim();
            console.log(action.text.star)
            return movies.filter(function (movie) { return movie.name.toLowerCase().includes(term) & movie.rating >= action.text.star });

        case ADD_MOVIE:
            return movies = movies.concat(action.movie)
        case REMOVE_MOVIE:
            return movies = movies.filter(movie => movie.id !== action.movie)
        case EDIT_MOVIE:
            if (action.movie.newTitle) { return state.map(movie => movie.id === action.movie.id ? { ...movie, name: action.movie.newTitle, editMode: !movie.editMode } : { ...movie }) }
            else { return state.map(movie => movie.id === action.movie.id ? { ...movie, editMode: !movie.editMode } : { ...movie }) }

        default:
            return state
    }
}



export default movieAppReducer

export let movies = [{
    name: 'Inception', img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg', rating: 5, id: Math.random(), editMode: false,
    synopsis: 'Inception is a 2010 psychological science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.'
},
{
    name: 'The Shawshank Redemption', img: 'https://images-na.ssl-images-amazon.com/images/I/51zUbui%2BgbL.jpg', rating: 4, id: Math.random(), editMode: false,
    synopsis: 'The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis "Red" Redding (Morgan Freeman), and becomes instrumental in a money-laundering operation led by the prison warden Samuel Norton (Bob Gunton). William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles.'
},
{
    name: 'Interstellar', img: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg', rating: 5, id: Math.random(), editMode: false,
    synopsis: "DescriptionIn Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home."
},
{
    name: 'The Dark Knight', img: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg', rating: 4, id: Math.random(), editMode: false,
    synopsis: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism."
},
{
    name: 'The Big Lebowski', img: 'https://uvmbored.com/wp-content/uploads/2018/05/biglebowski-poster-3b44f87f597e68af6da589ba9fe83518.jpg', rating: 4, id: Math.random(), editMode: false,
    synopsis: "The Big Lebowski is a 1998 crime comedy film written, produced, and directed by Joel and Ethan Coen. It stars Jeff Bridges as Jeffrey 'The Dude' Lebowski, a Los Angeles slacker and avid bowler. He is assaulted as a result of mistaken identity, after which The Dude learns that a millionaire (also named Jeffrey Lebowski) was the intended victim. The millionaire Lebowski's trophy wife is kidnapped, and he commissions The Dude to deliver the ransom to secure her release; the plan goes awry when the Dude's friend Walter Sobchak (John Goodman) schemes to keep the ransom money. Julianne Moore, Steve Buscemi, David Huddleston, John Turturro and Philip Seymour Hoffman also appear, in supporting roles."
},
{
    name: 'The Wolf Of Wall Street', img: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg', rating: 3, id: Math.random(), editMode: false,
    synopsis: "The Wolf of Wall Street is a 2013 American biographical black comedy crime film directed by Martin Scorsese and written by Terence Winter, based on the memoir of the same name by Jordan Belfort. It recounts Belfort's perspective on his career as a stockbroker in New York City and how his firm, Stratton Oakmont, engaged in rampant corruption and fraud on Wall Street, which ultimately led to his downfall."
},
{
    name: 'Avengers Infinity War', img: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg', rating: 2, id: Math.random(), editMode: false,
    synopsis: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan."
}];