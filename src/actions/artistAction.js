import { ARTIST_LOAD, ARTIST_LOAD_SUCCESS, ARTIST_LOAD_FAILED } from './type';

import { weeklyArtistList } from '../dataSources/Home/WeeklyArtist';

const loadArtistSuccesAction = () => async (dispatch) => {
  dispatch({
    type: ARTIST_LOAD_SUCCESS,
    payload: {
      data: weeklyArtistList,
    },
  });
};

const loadArtistFailAction = () => async (dispatch) => {
  dispatch({
    type: ARTIST_LOAD_FAILED,
    payload: {
      data: weeklyArtistList,
    },
  });
};
export const loadArtistAction = (params) => async (dispatch) => {
  setTimeout(() => {
    if (params) {
      dispatch(loadArtistSuccesAction());
    } else {
      dispatch(loadArtistFailAction());
    }
  }, 1000);
  dispatch({ type: ARTIST_LOAD });
};
