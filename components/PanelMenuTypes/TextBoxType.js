import { MenuItemCard, ItemWrapper } from '@components';
import { Button, Col, Input } from 'antd';
import { useState } from 'react';

const TextBoxType = ({ displayName, description, value, name, action }) => {
  const [inputValues, setInputValues] = useState({});

  const onChangeInputHandle = (e, name) => {
    const { value } = e.target;
    const newValues = { ...inputValues, [name]: value };
    setInputValues(newValues);
  };

  return (
    <MenuItemCard title={displayName} description={description}>
      <ItemWrapper margin="16px 0 0 0">
        <Col lg={12}>
          <Input.Group compact>
            <Input style={{ width: 'calc(100% - 200px)' }} defaultValue={value} onChange={(e) => onChangeInputHandle(e, name)} />
            <Button type="primary" onClick={() => action(inputValues[name])} disabled={!inputValues[name]}>
              Kaydet
            </Button>
          </Input.Group>
        </Col>
      </ItemWrapper>
    </MenuItemCard>
  );
};

export default TextBoxType;
