import { withIsPanelPage } from '@hocs';

const Additional = () => <p>additional</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Additional;
