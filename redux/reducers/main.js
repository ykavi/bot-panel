import * as t from '../types';

const main = (
  state = {
    groupSetting: null,
    groupId: null,
  },
  action,
) => {
  switch (action.type) {
    case t.SET_GROUP_SETTING:
      return {
        ...state,
        groupSetting: action.payload,
      };
    case t.SET_GROUP_ID:
      return {
        ...state,
        groupId: action.payload,
      };

    default:
      return { ...state };
  }
};

export default main;
