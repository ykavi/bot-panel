import { withIsPanelPage } from '@hocs';

const Block = () => <p>block</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Block;
