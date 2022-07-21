import { Header, Footer, Grid } from '@components';
import { Main } from './style';

const MainLayout = ({ children }) => {
  if (typeof window !== 'undefined') document.body.style.overflowY = 'auto';

  return (
    <>
      <Header />
      <Grid>
        <Main>{children}</Main>
      </Grid>
      <Footer />
    </>
  );
};

export default MainLayout;
