// type
import {
  ARTIST_LOAD_FAILED,
  ARTIST_LOAD_SUCCESS,
  ARTIST_LOAD,
} from '../actions/type';

const initialState = {
  artist: null,
  isLoading: false,
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
      };
    }
    case ARTIST_LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case ARTIST_LOAD_FAILED:
      return {
        ...state,
        artist: null,
      };
    default:
      return { state };
  }
};

export default artistReducer;
