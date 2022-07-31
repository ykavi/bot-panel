import { withIsPanelPage } from '@hocs';
import { useMenuItemGetFetch, useMenuItemPostFetch } from '@hooks';
import { openNotificationWithIcon } from '@helpers';
import { PanelMenuTypes } from '@components';
import { useState } from 'react';

const rootSwitchAction = (value) => {
  console.log(`rootSwitchAction ${value}`);
};

const Settings = () => {
  const [body, setBody] = useState(null);
  const { data, loading, error } = useMenuItemGetFetch(`settings`);
  const { isSuccess, loading: postLoading, error: postErr } = useMenuItemPostFetch(`settings`, body);

  const listBoxAction = (value, key) => {
    console.log(`listBoxAction ${value} ${key}`);
    setBody({ [key]: value });
  };

  const switchAction = (value, key) => {
    console.log(`switchAction ${value} ${key}`);
    setBody({ [key]: value });
  };

  const textBoxAction = (value, key) => {
    openNotificationWithIcon('success', 'Başarılı', 'Değişiklik Uygulandı');
    console.log(`textBoxAction ${value} ${key}`);
    setBody({ [key]: value });
  };

  return (
    <>
      {data?.Settings?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes
            type={item.type}
            data={item}
            listBoxAction={(e) => listBoxAction(e, item?.name)}
            switchAction={(e) => switchAction(e, item?.name)}
            textBoxAction={(e) => textBoxAction(e, item?.name)}
            rootSwitchAction={rootSwitchAction}
          />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Settings;
