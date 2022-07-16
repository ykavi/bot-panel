import { withIsPanelPage } from '@hocs';

const UnFilteredMessages = () => <p>unfilteredmessages</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default UnFilteredMessages;
