const checkIsTablet = (userAgent) => /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent);

const getUserAgent = (ctx) => {
  console.log('ctx');
  try {
    let isTablet = false;
    const userAgent = ctx?.req?.headers['user-agent'];
    let isMobile = false;
    let isAndroid = false;
    let isiOS = false;
    let mobileOnly = false;
    if (userAgent) {
      isMobile = userAgent.indexOf('Mobile') > -1;
      isAndroid = userAgent.indexOf('Android') > -1;
      isiOS = userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1;

      if (checkIsTablet(userAgent)) {
        isTablet = true;
      }

      mobileOnly = isMobile && !isTablet;
    }

    return { isMobile, isTablet, isAndroid, isiOS, mobileOnly };
  } catch (error) {
    console.error(`
 logFor=${process.env.NEXT_PUBLIC_APP_NAME} component=getUserAgent error=${error}`);
  }
  return {
    isMobile: false,
    isTablet: false,
    isAndroid: false,
    isiOS: false,
  };
};

export default getUserAgent;
