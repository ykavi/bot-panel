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

const textBoxAction = (inputName) => {
  openNotificationWithIcon('success', 'Başarılı', 'Değişiklik Uygulandı');
  console.log('textBoxAction', inputName);
};

const LevelSandXp = () => {
  const { data, loading, error } = useMenuItemGetFetch('fun/levelsandxp'); //TODO: data tipi kırılımlı buna bakılacak

  return (
    <>
      {data?.LevelsAndXp?.map((item, index) => (
        <>
          <div key={index}>{PanelMenuTypes(item.type, item, listBoxAction, switchAction, textBoxAction)}</div>
          {item.isSub &&
            item.value.map((subItem, subIndex) => (
              <div key={subIndex}>{PanelMenuTypes(subItem.type, subItem, listBoxAction, switchAction, textBoxAction)}</div>
            ))}
        </>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default LevelSandXp;
