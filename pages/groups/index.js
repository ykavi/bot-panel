import { useEffect } from 'react';
import { Card, Col, Row, Avatar } from 'antd';
import React from 'react';
import { URL } from '@enums';
import { getFirstLetters } from '@helpers';
import { ItemWrapper, NImage } from '@components';
import { Container } from './style';

const { Meta } = Card;

const Groups = () => {
  const groups = [
    {
      id: -1001785919316,
      title: 'bot test 22',
      type: 'supergroup',
      MembersCount: 4,
      invite_link: 'https://t.me/+sDAniuVCmpY0Mzc0',
    },
    {
      id: -1001608308398,
      title: 'deneme',
      type: 'supergroup',
      MembersCount: 6,
      invite_link: 'https://t.me/+ENVHrwhaxZlhYTk0',
    },
    {
      id: -1001799280304,
      title: 'Bot Test',
      type: 'supergroup',
      MembersCount: 9,
      description: 'bot test',
      invite_link: 'https://t.me/+QBCSXIy1SgI3Mjc8',
      photo: {
        small_file_id: 'AQADBAADAb4xGwW4-FEACAIAA1AZHMAW____Yv6Ho2TRHhwpBA',
        small_file_unique_id: 'AQADAb4xGwW4-FEAAQ',
        big_file_id: 'AQADBAADAb4xGwW4-FEACAMAA1AZHMAW____Yv6Ho2TRHhwpBA',
        big_file_unique_id: 'AQADAb4xGwW4-FEB',
      },
    },
    {
      id: -1001717693320,
      title: 'bot test 2',
      type: 'supergroup',
      MembersCount: 6,
      invite_link: 'https://t.me/+KxP01rFYygM5MDU8',
    },
    {
      id: -645427608,
      title: 'Deneme2',
      type: 'group',
      MembersCount: 4,
    },
  ];

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

  const getGroupAvatar = (groupTitle, imageObj) => {
    const avatarText = getFirstLetters(groupTitle);
    const hasImage = !!imageObj;

    return hasImage ? (
      <NImage objectFit="cover" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
    ) : (
      <ItemWrapper center>
        <Avatar size={120}>{avatarText}</Avatar>
      </ItemWrapper>
    );
  };

  const getGroupItem = (group) => (
    <Col span={5} lg={6} md={8} sm={12} xs={12} key={group?.id}>
      <Container>
        <ItemWrapper margin="0 8px 16px 8px">
          <Card hoverable cover={getGroupAvatar(group?.title, group?.photo)}>
            <Meta title={group?.title} description={group?.type} />
          </Card>
        </ItemWrapper>
      </Container>
    </Col>
  );

  return <Row justify="center">{groups?.map(getGroupItem)}</Row>;
};

export default Groups;
