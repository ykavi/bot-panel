import { PanelMenuTypes } from '@components';
import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';

const TriggersV2Setting = () => {
  const { data, loading, error } = useMenuItemGetFetch('triggersv2setting');
  console.log(data);
  return (
    <>
      {data?.TriggersV2Setting?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes type={item.type} data={item} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default TriggersV2Setting;
