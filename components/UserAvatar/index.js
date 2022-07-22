import { UserOutlined, CaretDownOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Typography, Menu } from 'antd';
import { Container, MenuWrapper } from './style';
import { useState } from 'react';

const { Title } = Typography;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

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
              width: 256,
            }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[]}
            mode="inline"
            items={items}
          />
        </MenuWrapper>
      )}
    </Container>
  );
};

export default UserAvatar;
