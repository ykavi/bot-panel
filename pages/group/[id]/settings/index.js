import { withIsPanelPage } from '@hocs';
import { useGetFetch } from '@hooks';
import { MenuItemCard, SelectBox, Switch } from '@components';

const handleOnSelect = (value) => {
  console.log(`selected ${value}`);
};

const handleOnChange = (value) => {
  console.log(`changed ${value}`);
};

const Settings = () => {
  const { data, loading, error } = useGetFetch('group/-1001799280304/settings');
  console.log(data);

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

  return (
    <>
      {data?.GruopSettings?.map((item) => (
        <>
          {item.type === 'Listbox' && isSelectBoxType(item)}
          {item.type === 'Switch Button' && isSwitchType(item)}
        </>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Settings;
