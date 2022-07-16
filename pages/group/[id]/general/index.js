import { withIsPanelPage } from '@hocs';

const General = () => <p>general</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default General;
