import { useState } from 'react';
import { Avatar, Typography, Menu } from 'antd';
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons';
import { getMenuItem } from '@helpers';
import { Container, MenuWrapper } from './style';
import { useRouter } from 'next/router';

const { Title } = Typography;

const items = [
  getMenuItem('Servers', 'groups'),
  getMenuItem('Language', 'language', null, [getMenuItem('Türkçe', 'tr'), getMenuItem('English', 'en')]),
  getMenuItem('Logout', 'logout'),
];

const UserAvatar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  const onSelectHandle = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    console.log(item, key, keyPath, selectedKeys, domEvent);
    //const url = `/${key}`;
    //router.push(url);
  };

  return (
    <Container onClick={() => setMenuVisible(!menuVisible)}>
      <Avatar shape="circle" size="large" icon={<UserOutlined />} />
      <Title level={5}>Yunus Emre Kavi</Title>
      <CaretDownOutlined style={{ fontSize: '16px', color: '#ffffff' }} />

      {menuVisible && (
        <MenuWrapper onClick={(e) => e.stopPropagation()}>
          <Menu
            theme="dark"
            style={{
              width: 200,
            }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[]}
            mode="inline"
            items={items}
            onSelect={onSelectHandle}
          />
        </MenuWrapper>
      )}
    </Container>
  );
};

export default UserAvatar;
