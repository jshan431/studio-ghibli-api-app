import { GET_FILMS, SET_LOADING, GET_FILM } from '../types';

export default (state, action) => {
  switch(action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload,
        loading: false
      };
    case GET_FILM:
      return {
        ...state,
        film: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}