import * as t from '../types';

export const setProducts = (data) => (dispatch) => {
  dispatch({
    type: t.SET_NAME,
    payload: data,
  });
};
