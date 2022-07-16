import { withIsPanelPage } from '@hocs';

const Welcome = () => <p>welcome</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Welcome;
