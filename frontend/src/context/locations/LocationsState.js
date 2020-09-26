import React, { useReducer } from 'react';
import axios from 'axios';
import LocationsContext from './locationsContext';
import LocationsReducer from './locationsReducer';

import {
  GET_LOCATIONS,
  SET_LOADING
} from '../types';

const LocationsState = props => {

  const initalState = {
    locations: [],
    loading: false
  }

  const [state, dispatch] = useReducer(LocationsReducer, initalState);

  const getLocations = async () => {

    setLoading();
    
    const res = await axios.get('https://ghibliapi.herokuapp.com/locations');

    dispatch({
      type: GET_LOCATIONS,
      payload: res.data
    });
  }

  const setLoading = () => dispatch({ type: SET_LOADING });

  return <LocationsContext.Provider
    value={{
      locations: state.locations,
      getLocations
    }}
  >
    {props.children}
  </LocationsContext.Provider>

}

export default LocationsState;