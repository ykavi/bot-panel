import { withIsPanelPage } from '@hocs';
import { useMenuItemGetFetch } from '@hooks';

const Announcements = () => {
  const { data, loading, error } = useMenuItemGetFetch('announcements');
  console.log('*****', data);

  return <p>kkk</p>;
};

export const getServerSideProps = withIsPanelPage((context) => {});

export default Announcements;
