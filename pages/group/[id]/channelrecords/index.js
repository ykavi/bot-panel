import { useMenuItemGetFetch } from '@hooks';
import { PanelMenuTypes } from '@components';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';

const ChannelRecords = () => {
  const { data, loading, error } = useMenuItemGetFetch('channelrecords');

  return (
    <>
      {data?.ChannelRecords?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes type={item.type} data={item} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default ChannelRecords;
