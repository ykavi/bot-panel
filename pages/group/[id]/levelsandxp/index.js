import { PanelMenuTypes } from '@components';
import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';

const LevelSandXp = () => {
  const { data, loading, error } = useMenuItemGetFetch('fun/levelsandxp'); //TODO: data tipi kırılımlı buna bakılacak

  return (
    <>
      {data?.LevelsAndXp?.map((item, index) => (
        <div key={index}>
          <PanelMenuTypes type={item.type} data={item} />
        </div>
      ))}
    </>
  );
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default LevelSandXp;
