import { withIsPanelPage } from '@hocs';

const Announcements = () => <p>Announcements</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Announcements;
