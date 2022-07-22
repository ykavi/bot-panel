import { useState } from 'react';
import { Avatar, Typography, Menu } from 'antd';
import { UserOutlined, CaretDownOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { getMenuItem } from '@helpers';
import { Container, MenuWrapper } from './style';

const { Title } = Typography;

const items = [getMenuItem('Servers', 'servers'), getMenuItem('Language', 'language'), getMenuItem('Logout', 'logout')];

const onSelectHandle = ({ item, key, keyPath, selectedKeys, domEvent }) => {
  console.log(item, key, keyPath, selectedKeys, domEvent);
};

const UserAvatar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

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
