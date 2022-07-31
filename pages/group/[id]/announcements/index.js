import { withIsPanelPage } from '@hocs';
import { useMenuItemGetFetch } from '@hooks';
import { PanelMenuTypes } from '@components';
import { openNotificationWithIcon } from '@helpers';

const Announcements = () => {
  const { data, loading, error } = useMenuItemGetFetch('announcements');

  return (
    <>
      {data?.Announcements?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes type={item.type} data={item} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Announcements;
