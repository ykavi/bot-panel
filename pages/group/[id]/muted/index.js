import { withIsPanelPage } from '@hocs';

const Muted = () => <p>muted</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Muted;
