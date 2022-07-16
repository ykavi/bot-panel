import { withIsPanelPage } from '@hocs';

const Principles = () => <p>Principles</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Principles;
