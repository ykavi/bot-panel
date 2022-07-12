const Settings = () => <p>Settings</p>;

export async function getServerSideProps(context) {
  return {
    props: { isPanelPage: true },
  };
}

export default Settings;
