import { withIsPanelPage } from '@hocs';

const Crypto = () => <p>crypto</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Crypto;
