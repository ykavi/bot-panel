const withIsPanelPage = (gssp) => async (context) => {
  const props = typeof gssp === 'function' ? await gssp(context) : {};

  const isPanelPage = !!context?.params?.id;

  return {
    props: { isPanelPage, ...props },
  };
};

export default withIsPanelPage;
