import { Col, Row } from 'antd';
import { Text } from '@components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/main';
import {} from '@mock';
import {} from '@enums';
import {} from '@helpers';
import TelegramLoginButton from 'react-telegram-login';

const Home = () => {
  const handleTelegramResponse = (response) => {
    console.log(response);
  };

  return (
    <>
      <Row align="center">
        <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="deneme_bot" />
      </Row>
    </>
  );
};

export default Home;
