import { withIsPanelPage } from '@hocs';
import { useMenuItemGetFetch } from '@hooks';
import { openNotificationWithIcon } from '@helpers';
import { PanelMenuTypes } from '@components';

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

const Settings = () => {
  const { data, loading, error } = useMenuItemGetFetch(`settings`);
  console.log(data);
  return (
    <>
      {data?.Settings?.map((item, index) => (
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

export default Settings;
