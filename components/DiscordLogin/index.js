import { Discord } from '@Icons';
import { Text } from '@components';
import { Container } from './style';

const onClickHandle = () => {
  window.location.href =
    'https://discord.com/api/oauth2/authorize?client_id=993283305988440184&redirect_uri=https%3A%2F%2Fbot-panel-orcin.vercel.app%2F&response_type=code&scope=identify';
};

const DiscordLogin = () => (
  <Container onClick={onClickHandle}>
    <Discord color="white" width={30} />
    <Text margin="0 0 0 8px" color="white" weight="medium">
      Log In With Discord
    </Text>
  </Container>
);

export default DiscordLogin;
