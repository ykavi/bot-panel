import SwitchType from './SwitchType';
import TextBoxType from './TextBoxType';
import SelectBoxType from './SelectBoxType';
import { Collapse, Typography, Switch } from 'antd';
import { ItemWrapper } from '@components';
import { useEffect, useState } from 'react';
import { useMenuItemPostFetch } from '@hooks';
import { useRouter } from 'next/router';

const { Panel } = Collapse;
const { Title } = Typography;

const getComponentByType = (type, data, setDataAction) => {
  switch (type) {
    case 'Listbox':
      return <SelectBoxType {...data} action={setDataAction} />;
    case 'Switch Button':
      return <SwitchType {...data} action={setDataAction} />;
    case 'Textbox':
      return <TextBoxType {...data} action={setDataAction} />;

    default:
      return null;
  }
};

const collapsedMenu = (item, setDataAction) => {
  const collapseTitle = item.value.find((i) => i.type === 'Root Switch')?.displayName;
  const panelData = item.value.filter((i) => i.type !== 'Root Switch');

  return (
    <Collapse style={{ margin: '20px 0' }}>
      <Panel header={collapseTitle} key={item.name}>
        {panelData.map((subItem, subIndex) => (
          <div key={subIndex}>
            <PanelMenuTypes
              type={subItem.type}
              data={subItem}
              listBoxAction={setDataAction}
              switchAction={setDataAction}
              textBoxAction={setDataAction}
            />
          </div>
        ))}
      </Panel>
    </Collapse>
  );
};

const PanelMenuTypes = ({ type, data }) => {
  const router = useRouter();
  const { asPath } = router;
  const [endpoint, setEndpoint] = useState('');
  const [body, setBody] = useState(null);

  const { isSuccess, loading: postLoading, error: postErr } = useMenuItemPostFetch(endpoint, body);

  useEffect(() => {
    const splitAsPath = asPath.split('/');
    const pageEndPoint = splitAsPath[splitAsPath.length - 1];
    setEndpoint(pageEndPoint);
  }, [asPath]);

  const setDataAction = (value) => {
    setBody({ [data.name]: value });
  };

  const menuItem = getComponentByType(type, data, setDataAction);

  const renderedItem =
    type === 'Root Switch' ? (
      <>
        <ItemWrapper flex margin="0 0 26px 0" alignItems="center">
          <Title style={{ margin: 0 }} level={3}>
            {data.displayName}
          </Title>

          <Switch style={{ marginLeft: 12 }} defaultChecked={data.value} onChange={setDataAction} />
        </ItemWrapper>
        {menuItem}
      </>
    ) : (
      menuItem
    );

  return data?.isSub ? collapsedMenu(data, setDataAction) : renderedItem;
};

export default PanelMenuTypes;
