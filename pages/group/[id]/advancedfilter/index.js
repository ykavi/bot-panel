import { PanelMenuTypes } from '@components';
import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';

const AdvancedFilter = () => {
  const { data, loading, error } = useMenuItemGetFetch('filter/advancedfilter'); //TODO: data tipinda ufak bi kırılım var içeri girmek gerekecek.

  return (
    <>
      {data?.AdvancedFilter?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes type={item.type} data={item} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default AdvancedFilter;
