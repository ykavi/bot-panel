import SwitchType from './SwitchType';
import TextBoxType from './TextBoxType';
import SelectBoxType from './SelectBoxType';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const getComponentByType = (type, data, listBoxAction, switchAction, textBoxAction) => {
  switch (type) {
    case 'Listbox':
      return <SelectBoxType {...data} action={listBoxAction} />;
    case 'Switch Button':
      return <SwitchType {...data} action={switchAction} />;
    case 'Root Switch': //TODO: bu tipe bakılacak.
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
          <div key={subIndex}>{PanelMenuTypes(subItem.type, subItem, listBoxAction, switchAction, textBoxAction)}</div>
        ))}
      </Panel>
    </Collapse>
  );
};

const PanelMenuTypes = (type, data, listBoxAction, switchAction, textBoxAction) => {
  const menuItem = getComponentByType(type, data, listBoxAction, switchAction, textBoxAction);

  return data.isSub ? collapsedMenu(data, listBoxAction, switchAction, textBoxAction) : menuItem;
};

export default PanelMenuTypes;
