import { withIsPanelPage } from '@hocs';

const Reputation = () => <p>reputation</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Reputation;
