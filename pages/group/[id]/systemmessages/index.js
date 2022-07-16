import { withIsPanelPage } from '@hocs';

const SystemMessages = () => <p>systemmessages</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default SystemMessages;
