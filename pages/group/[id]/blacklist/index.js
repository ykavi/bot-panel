import { withIsPanelPage } from '@hocs';

const BlackList = () => <p>blacklist</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default BlackList;
