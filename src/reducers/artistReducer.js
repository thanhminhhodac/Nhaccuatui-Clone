// type
import {
  ARTIST_LOAD_FAILED,
  ARTIST_LOAD_SUCCESS,
  ARTIST_LOAD,
} from '../actions/type';

const initialState = {
  artist: null,
  isLoading: false,
  isError: false,
};

const artistReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ARTIST_LOAD_SUCCESS: {
      const newartist = payload.data;
      return {
        ...state,
        artist: newartist,
        isLoading: false,
        isError: false,
      };
    }
    case ARTIST_LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ARTIST_LOAD_FAILED:
      return {
        ...state,
        artist: null,
        isLoading: false,
        isError: true,
      };
    default:
      return { state };
  }
};

export default artistReducer;
