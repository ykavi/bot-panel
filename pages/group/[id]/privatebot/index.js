import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { PanelMenuTypes } from '@components';
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

const Privatebot = () => {
  const { data, loading, error } = useMenuItemGetFetch('privatebot');

  return (
    <>
      {data?.PrivateBot?.map((item, index) => (
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

export default Privatebot;
