import { withIsPanelPage } from '@hocs';

const NewMembersMentions = () => <p>newmembersmentions</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default NewMembersMentions;
