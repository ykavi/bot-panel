import { useMenuItemGetFetch } from '@hooks';
import { PanelMenuTypes } from '@components';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';

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

const ChannelRecords = () => {
  const { data, loading, error } = useMenuItemGetFetch('channelrecords');
  console.log('*****', data);

  return (
    <>
      {data?.GruopChannelRecords?.map((item, index) => (
        <div key={index}>{PanelMenuTypes(item.type, item, listBoxAction, switchAction, textBoxAction)}</div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default ChannelRecords;
