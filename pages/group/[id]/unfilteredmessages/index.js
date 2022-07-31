import { PanelMenuTypes } from '@components';
import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';

const UnFilteredMessages = () => {
  const { data, loading, error } = useMenuItemGetFetch('filter/unfilteredmessages');
  console.log(data);
  return (
    <>
      {data?.UnfilteredMessages?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes type={item.type} data={item} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default UnFilteredMessages;
