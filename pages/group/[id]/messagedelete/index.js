import { withIsPanelPage } from '@hocs';

const MessageDelete = () => <p>messagedelete</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default MessageDelete;
