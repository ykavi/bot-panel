import { Card, Space, Typography } from 'antd';
import React from 'react';
const { Text } = Typography;

const MenuItemCard = ({ children, title, description }) => (
  <Space
    direction="vertical"
    size="middle"
    style={{
      display: 'flex',
      margin: '0 0 16px 0',
    }}
  >
    <Card title={title} size="large">
      <Text type="secondary">{description}</Text>
      {children}
    </Card>
  </Space>
);

export default MenuItemCard;
