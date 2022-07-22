import { getUserAgent } from '@utils';

const withIsPanelPage = (gssp) => async (context) => {
  const isPanelPage = !!context?.params?.id;
  const userAgent = getUserAgent(context);
  const props = typeof gssp === 'function' ? await gssp(context) : {};

  return {
    props: { isPanelPage, ...userAgent, ...props },
  };
};

export default withIsPanelPage;
