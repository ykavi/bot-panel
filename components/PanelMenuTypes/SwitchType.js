import { MenuItemCard, Switch } from '@components';

const SwitchType = ({ displayName, description, value, action }) => (
  <>
    <MenuItemCard title={displayName} description={description}>
      <Switch handleOnChange={action} label={description} value={value} />
    </MenuItemCard>
  </>
);

export default SwitchType;
