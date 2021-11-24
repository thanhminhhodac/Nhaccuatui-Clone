import { ARTIST_LOAD, ARTIST_LOAD_SUCCESS } from './type';

import { weeklyArtistList } from '../dataSources/Home/WeeklyArtist';

const loadArtistSuccesAction = () => async (dispatch) => {
  dispatch({
    type: ARTIST_LOAD_SUCCESS,
    payload: {
      data: weeklyArtistList,
    },
  });
};
export const loadArtistAction = () => async (dispatch) => {
  setTimeout(() => dispatch(loadArtistSuccesAction()), 1000);
  dispatch({ type: ARTIST_LOAD });
};
