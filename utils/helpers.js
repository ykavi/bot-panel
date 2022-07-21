import { notification } from 'antd';

export const getFirstLetters = (str) => {
  const firstLetters = str
    .split(' ')
    .map((word) => word[0])
    .join('');

  return firstLetters;
};

export const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};
