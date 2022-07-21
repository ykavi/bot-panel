import * as t from '../types';

export const setGroupSetting = (data) => (dispatch) => {
  dispatch({
    type: t.SET_GROUP_SETTING,
    payload: data,
  });
};
export const setGroupId = (data) => (dispatch) => {
  dispatch({
    type: t.SET_GROUP_ID,
    payload: data,
  });
};
