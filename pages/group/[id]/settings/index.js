import { withIsPanelPage } from '@hocs';
import { useGetFetch } from '@hooks';
import { MenuItemCard, SelectBox } from '@components';
import { useEffect } from 'react';

const handleOnSelect = (value) => {
  console.log(`selected ${value}`);
};

const Settings = () => {
  useEffect(() => {}, []);

  const { data, loading, error } = useGetFetch('group/-1001799280304/settings');
  console.log(data);

  const isSelectBoxType = (displayName, description) => (
    <>
      <MenuItemCard title={displayName} description={description}>
        <SelectBox handleOnSelect={handleOnSelect} label={displayName} />
      </MenuItemCard>
      <MenuItemCard title={displayName} description={description}>
        <SelectBox handleOnSelect={handleOnSelect} label={displayName} />
      </MenuItemCard>
      <MenuItemCard title={displayName} description={description}>
        <SelectBox handleOnSelect={handleOnSelect} label={displayName} />
      </MenuItemCard>
    </>
  );

  return <>{data?.GruopSettings?.map((item) => item.type === 'Listbox' && isSelectBoxType(item.displayName, item.description))}</>;
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Settings;
