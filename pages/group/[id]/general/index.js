import { PanelMenuTypes } from '@components';
import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';

const General = () => {
  const { data, loading, error } = useMenuItemGetFetch('filter/general'); //TODO: Data tipi digerlerinden farklı onurla konusalacak.

  return (
    <>
      {data?.General?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes type={item.type} data={item} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default General;
