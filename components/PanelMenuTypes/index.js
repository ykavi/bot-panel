import SwitchType from './SwitchType';
import TextBoxType from './TextBoxType';
import SelectBoxType from './SelectBoxType';
import { Collapse, Typography, Switch } from 'antd';
import { ItemWrapper } from '@components';

const { Panel } = Collapse;
const { Title } = Typography;

const getComponentByType = (type, data, listBoxAction, switchAction, textBoxAction) => {
  switch (type) {
    case 'Listbox':
      return <SelectBoxType {...data} action={listBoxAction} />;
    case 'Switch Button':
      return <SwitchType {...data} action={switchAction} />;
    case 'Textbox':
      return <TextBoxType {...data} action={textBoxAction} />;

    default:
      return null;
  }
};

const collapsedMenu = (item, listBoxAction, switchAction, textBoxAction) => {
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
              listBoxAction={listBoxAction}
              switchAction={switchAction}
              textBoxAction={textBoxAction}
            />
          </div>
        ))}
      </Panel>
    </Collapse>
  );
};

const PanelMenuTypes = ({ type, data, listBoxAction, switchAction, textBoxAction, rootSwitchAction }) => {
  const menuItem = getComponentByType(type, data, listBoxAction, switchAction, textBoxAction);

  const renderedItem =
    type === 'Root Switch' ? (
      <>
        <ItemWrapper flex margin="0 0 26px 0" alignItems="center">
          <Title style={{ margin: 0 }} level={3}>
            {data.displayName}
          </Title>

          <Switch style={{ marginLeft: 12 }} defaultChecked={data.value} onChange={rootSwitchAction} />
        </ItemWrapper>
        {menuItem}
      </>
    ) : (
      menuItem
    );

  return data?.isSub ? collapsedMenu(data, listBoxAction, switchAction, textBoxAction) : renderedItem;
};

export default PanelMenuTypes;
