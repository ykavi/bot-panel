import SwitchType from './SwitchType';
import TextBoxType from './TextBoxType';
import SelectBoxType from './SelectBoxType';

const PanelMenuTypes = (type, data, listBoxAction, switchAction, textBoxAction) => {
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

export default PanelMenuTypes;
