import React, { useReducer } from 'react';
import axios from 'axios';
import FilmsContext from './filmsContext';
import FilmsReducer from './filmsReducer';

import {
  GET_FILMS,
  SET_LOADING,
  GET_FILM
} from '../types';

const FilmsState = props => {

  const initalState = {
    films: [],
    film: {},
    loading: false
  }

  const [state, dispatch] = useReducer(FilmsReducer, initalState);

  const getFilms = async () => {

    setLoading();
    
    const res = await axios.get('https://ghibliapi.herokuapp.com/films');

    dispatch({
      type: GET_FILMS,
      payload: res.data
    });
  }

  const getFilm = async (id) => {

    setLoading();
    
    const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);

    dispatch({
      type: GET_FILM,
      payload: res.data
    });
  }

  const setLoading = () => dispatch({ type: SET_LOADING });

  return <FilmsContext.Provider
    value={{
      films: state.films,
      film: state.film,
      loading: state.loading,
      getFilms,
      getFilm
    }}
  >
    {props.children}
  </FilmsContext.Provider>

}

export default FilmsState;