import { Select, Typography, Col } from 'antd';
import { ItemWrapper } from '@components';
import { Container } from './style';

const { Option } = Select;
const { Title } = Typography;

const SelectBox = ({ handleOnSelect, label }) => {
  return (
    <Container>
      <ItemWrapper margin="16px 0 8px 0">
        <Title level={5}>{`Bot ${label}`}</Title>
      </ItemWrapper>

      <Col xl={12} lg={12} md={24} sm={24}>
        <Select onSelect={handleOnSelect} defaultValue="lucy">
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Col>
    </Container>
  );
};

export default SelectBox;
