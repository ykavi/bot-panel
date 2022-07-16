import { withIsPanelPage } from '@hocs';

const RateLimiter = () => <p>ratelimiter</p>;

export const getServerSideProps = withIsPanelPage((context) => {});

export default RateLimiter;
