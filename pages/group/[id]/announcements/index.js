const Announcements = () => <p>Announcements</p>;

export async function getServerSideProps(context) {
  return {
    props: { isPanelPage: true },
  };
}

export default Announcements;
