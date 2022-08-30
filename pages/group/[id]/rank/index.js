import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { Avatar, Card, Row, Col, Progress, Typography } from 'antd';
import { getFirstLetters } from '@helpers';
import { ItemWrapper } from '@components';
import { Container } from './style';

const { Title } = Typography;

const Rank = () => {
  const { data, loading, error } = useMenuItemGetFetch('rank');

  const getCoverContent = (item) => (
    <ItemWrapper margin="24px 0 0 0" center>
      <Avatar shape="square" size={140}>
        {getFirstLetters(item?.userName)}
      </Avatar>
    </ItemWrapper>
  );

  return (
    <Container>
      <Row>
        {data?.UsersRank?.map((item, index) => (
          <Col xl={6} lg={6} md={24} sm={24} key={index}>
            <Card hoverable cover={getCoverContent(item)}>
              <ItemWrapper>
                <Title level={4}>{`Level: ${item?.level}`}</Title>

                <ItemWrapper margin="24px 0 0 0">
                  <Progress
                    type="circle"
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                    percent={item?.xp}
                  />
                </ItemWrapper>
              </ItemWrapper>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Rank;
