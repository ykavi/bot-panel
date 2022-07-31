import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { PanelMenuTypes } from '@components';
import { openNotificationWithIcon } from '@helpers';

const Privatebot = () => {
  const { data, loading, error } = useMenuItemGetFetch('privatebot');

  return (
    <>
      {data?.PrivateBot?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes type={item.type} data={item} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Privatebot;
