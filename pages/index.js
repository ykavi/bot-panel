import { Col, Row } from 'antd';
import { DiscordLogin } from '@components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/main';
import {} from '@mock';
import {} from '@enums';
import {} from '@helpers';
import TelegramLoginButton from 'react-telegram-login';

const Home = () => {
  const router = useRouter();
  const splitToken = router.asPath.split('&');
  const token = splitToken[1]?.replace('access_token=', '');

  useEffect(() => {
    fetch(`https://discordapp.com/api/users/@me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  const handleTelegramResponse = (response) => {
    console.log(response);
    alert('Login Success');
  };

  return (
    <>
      <Row align="center">
        <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="deneme9595_bot" />
      </Row>

      <Row align="center">
        <DiscordLogin />
      </Row>
    </>
  );
};

export default Home;
