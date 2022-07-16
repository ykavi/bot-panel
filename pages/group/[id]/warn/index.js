import { withIsPanelPage } from '@hocs';

const Warn = () => <p>warn</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Warn;
