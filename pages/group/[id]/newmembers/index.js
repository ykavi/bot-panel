import { withIsPanelPage } from '@hocs';

const NewMembers = () => <p>newmembers</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default NewMembers;
