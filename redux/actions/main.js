import * as t from '../types';

export const setGroupSetting = (data) => (dispatch) => {
  dispatch({
    type: t.SET_GROUP_SETTING,
    payload: data,
  });
};
export const setActiveMenuName = (data) => (dispatch) => {
  dispatch({
    type: t.SET_ACTIVE_MENU_NAME,
    payload: data,
  });
};
