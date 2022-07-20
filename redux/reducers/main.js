import * as t from '../types';

const main = (
  state = {
    groupSetting: null,
    activeMenuName: null,
  },
  action,
) => {
  switch (action.type) {
    case t.SET_GROUP_SETTING:
      return {
        ...state,
        groupSetting: action.payload,
      };
    case t.SET_ACTIVE_MENU_NAME:
      return {
        ...state,
        activeMenuName: action.payload,
      };

    default:
      return { ...state };
  }
};

export default main;
