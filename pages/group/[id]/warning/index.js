import { withIsPanelPage } from '@hocs';

const Warning = () => <p>warning</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Warning;
