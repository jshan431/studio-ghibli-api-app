import React, { useReducer } from 'react';
import axios from 'axios';
import PeopleContext from './peopleContext';
import PeopleReducer from './peopleReducer';

import {
  GET_PEOPLE,
  SET_LOADING
} from '../types';

const PeopleState = props => {

  const initalState = {
    people: [],
    loading: false
  }

  const [state, dispatch] = useReducer(PeopleReducer, initalState);

  const getPeople = async () => {

    setLoading();
    
    const res = await axios.get('https://ghibliapi.herokuapp.com/people');

    dispatch({
      type: GET_PEOPLE,
      payload: res.data
    });
  }

  const setLoading = () => dispatch({ type: SET_LOADING });

  return <PeopleContext.Provider
    value={{
      people: state.people,
      getPeople
    }}
  >
    {props.children}
  </PeopleContext.Provider>

}

export default PeopleState;