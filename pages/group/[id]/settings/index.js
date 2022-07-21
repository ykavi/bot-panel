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

const textBoxAction = (inputName) => {
  openNotificationWithIcon('success', 'Başarılı', 'Değişiklik Uygulandı');
  console.log('textBoxAction', inputName);
};

const Settings = () => {
  const { data, loading, error } = useMenuItemGetFetch(`settings`);

  return (
    <>
      {data?.GruopSettings?.map((item, index) => (
        <div key={index}>{PanelMenuTypes(item.type, item, listBoxAction, switchAction, textBoxAction)}</div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Settings;
