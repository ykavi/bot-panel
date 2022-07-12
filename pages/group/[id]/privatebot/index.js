const Privatebot = () => <p>Privatebot</p>;

export async function getServerSideProps(context) {
  return {
    props: { isPanelPage: true },
  };
}

export default Privatebot;
