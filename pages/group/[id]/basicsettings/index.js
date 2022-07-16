import { withIsPanelPage } from '@hocs';

const BasicSettings = () => <p>BasicSettings</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default BasicSettings;
