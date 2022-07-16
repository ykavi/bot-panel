import { withIsPanelPage } from '@hocs';

const Settings = () => <p>Settings</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default Settings;
