import { PanelMenuTypes } from '@components';
import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';

const AdvancedSettings = () => {
  const { data, loading, error } = useMenuItemGetFetch('newmembers/advancedsettings');

  return (
    <>
      {data?.AdvancedSettings?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes type={item.type} data={item} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default AdvancedSettings;
