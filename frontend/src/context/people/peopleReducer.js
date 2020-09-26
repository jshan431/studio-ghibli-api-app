import { GET_PEOPLE } from '../types';

export default (state, action) => {
  switch(action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
        loading: false
      };
    default:
      return state;
  }
}