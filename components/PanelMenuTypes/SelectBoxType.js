import { MenuItemCard, SelectBox } from '@components';

const SelectBoxType = ({ displayName, description, options, value, action }) => (
  <>
    <MenuItemCard title={displayName} description={description}>
      <SelectBox handleOnSelect={action} label={displayName} options={options} value={value} />
    </MenuItemCard>
  </>
);

export default SelectBoxType;
