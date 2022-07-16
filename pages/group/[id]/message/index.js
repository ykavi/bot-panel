import { withIsPanelPage } from '@hocs';

const Message = () => <p>message</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Message;
