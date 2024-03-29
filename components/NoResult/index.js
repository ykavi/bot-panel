import { Button, Result } from 'antd';

const NoResult = () => <Result status="500" title="500" subTitle="Sorry, something went wrong." extra={<Button type="primary">Back Home</Button>} />;

export default NoResult;
