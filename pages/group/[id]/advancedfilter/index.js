import { PanelMenuTypes } from '@components';
import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';

const listBoxAction = (value) => {
  console.log(`listBoxAction ${value}`);
};

const switchAction = (value) => {
  console.log(`switchAction ${value}`);
};

const rootSwitchAction = (value) => {
  console.log(`rootSwitchAction ${value}`);
};

const textBoxAction = (inputName) => {
  openNotificationWithIcon('success', 'Başarılı', 'Değişiklik Uygulandı');
  console.log('textBoxAction', inputName);
};

const AdvancedFilter = () => {
  const { data, loading, error } = useMenuItemGetFetch('filter/advancedfilter'); //TODO: data tipinda ufak bi kırılım var içeri girmek gerekecek.

  return (
    <>
      {data?.AdvancedFilter?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes
            type={item.type}
            data={item}
            listBoxAction={listBoxAction}
            switchAction={switchAction}
            textBoxAction={textBoxAction}
            rootSwitchAction={rootSwitchAction}
          />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default AdvancedFilter;
