import { Switch as AntSwitch, Typography, Col } from 'antd';
import { ItemWrapper } from '@components';
import { Container } from './style';

const { Title } = Typography;

const Switch = ({ handleOnChange, label, options, value }) => {
  return (
    <Container>
      <ItemWrapper margin="16px 0 8px 0">
        <Title level={5}>{`Bot ${label}`}</Title>
      </ItemWrapper>

      <Col xl={12} lg={12} md={24} sm={24}>
        <AntSwitch defaultChecked={value} onChange={handleOnChange} />
      </Col>
    </Container>
  );
};

export default Switch;
