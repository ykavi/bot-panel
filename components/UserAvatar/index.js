import { UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';
import { Container } from './style';

const { Title } = Typography;

const UserAvatar = () => {
  return (
    <Container>
      <Avatar shape="circle" size="large" icon={<UserOutlined />} />
      <Title level={5}>Yunus Emre Kavi</Title>
      <CaretDownOutlined style={{ fontSize: '16px', color: '#ffffff' }} />
    </Container>
  );
};

export default UserAvatar;
