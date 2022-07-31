import { withIsPanelPage } from '@hocs';
import { useMenuItemGetFetch } from '@hooks';
import { PanelMenuTypes } from '@components';

const Settings = () => {
  const { data, loading, error } = useMenuItemGetFetch(`settings`);

  return (
    <>
      {data?.Settings?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes type={item.type} data={item} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Settings;
