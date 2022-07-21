import { withIsPanelPage } from '@hocs';
import { useGetFetch } from '@hooks';
import { openNotificationWithIcon } from '@helpers';
import { Input, Button, Col } from 'antd';
import { MenuItemCard, SelectBox, Switch } from '@components';
import { useState } from 'react';

const handleOnSelect = (value) => {
  console.log(`selected ${value}`);
};

const handleOnChange = (value) => {
  console.log(`changed ${value}`);
};

const Settings = () => {
  const [inputValues, setInputValues] = useState({});
  const { data, loading, error } = useGetFetch('group/-1001799280304/settings');
  console.log(data);

  const onChangeInputHandle = (e, name) => {
    const { value } = e.target;
    const newValues = { ...inputValues, [name]: value };
    setInputValues(newValues);
  };

  const onClickHandle = (inputName) => {
    const savedInputValue = inputValues[inputName];
    openNotificationWithIcon('success', 'Başarılı', 'Değişiklik Uygulandı');
    console.log('onClickHandle', savedInputValue);
  };

  const isSelectBoxType = ({ displayName, description, options, value }) => (
    <>
      <MenuItemCard title={displayName} description={description}>
        <SelectBox handleOnSelect={handleOnSelect} label={displayName} options={options} value={value} />
      </MenuItemCard>
    </>
  );

  const isSwitchType = ({ displayName, description, value }) => (
    <>
      <MenuItemCard title={displayName} description={description}>
        <Switch handleOnChange={handleOnChange} label={description} value={value} />
      </MenuItemCard>
    </>
  );

  const isTextBoxType = ({ displayName, description, value, name }) => (
    <>
      <MenuItemCard title={displayName} description={description}>
        <Col lg={12}>
          <Input.Group compact>
            <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="https://ant.design" onChange={(e) => onChangeInputHandle(e, name)} />
            <Button type="primary" onClick={() => onClickHandle(name)} disabled={!inputValues[name]}>
              Kaydet
            </Button>
          </Input.Group>
        </Col>
      </MenuItemCard>
    </>
  );

  return (
    <>
      {data?.GruopSettings?.map((item) => (
        <>
          {item.type === 'Listbox' && isSelectBoxType(item)}
          {item.type === 'Switch Button' && isSwitchType(item)}
          {item.type === 'Textbox' && isTextBoxType(item)}
        </>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Settings;
