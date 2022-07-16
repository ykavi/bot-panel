import { withIsPanelPage } from '@hocs';

const Group = () => <p>group</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Group;
