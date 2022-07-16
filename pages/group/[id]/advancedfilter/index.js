import { withIsPanelPage } from '@hocs';

const AdvancedFilter = () => <p>advancedfilter</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default AdvancedFilter;
