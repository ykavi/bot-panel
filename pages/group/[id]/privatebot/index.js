import { withIsPanelPage } from '@hocs';

const Privatebot = () => <p>Privatebot</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Privatebot;
