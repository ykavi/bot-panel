import { Card, Col } from 'antd';
import React from 'react';
import { URL } from '@enums';
import { useEffect } from 'react';
const { Meta } = Card;

const Groups = () => {
  useEffect(() => {
    fetch(`${URL}/groups`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Col lg={5}>
      <Card hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </Col>
  );
};

export default Groups;
