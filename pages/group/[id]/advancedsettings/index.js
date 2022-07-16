import { withIsPanelPage } from '@hocs';

const AdvancedSettings = () => <p>advancedsettings</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default AdvancedSettings;
