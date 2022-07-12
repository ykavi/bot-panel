const Group = () => <p>group</p>;

export async function getServerSideProps(context) {
  return {
    props: { isPanelPage: true },
  };
}

export default Group;
