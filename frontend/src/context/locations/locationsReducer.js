import { GET_LOCATIONS } from '../types';

export default (state, action) => {
  switch(action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
        loading: false
      };
    default:
      return state;
  }
}