const Principles = () => <p>Principles</p>;

export async function getServerSideProps(context) {
  return {
    props: { isPanelPage: true },
  };
}

export default Principles;
