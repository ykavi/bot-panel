import { PanelMenuTypes } from '@components';
import { useMenuItemGetFetch } from '@hooks';
import { withIsPanelPage } from '@hocs';
import { openNotificationWithIcon } from '@helpers';

const Stats = () => {
  const { data, loading, error } = useMenuItemGetFetch('stats');
  console.log(data);
  return <></>;
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Stats;
