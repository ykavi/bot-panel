import { Header, Footer, Grid } from '@components';
import { Main } from './style';
import { useEffect } from 'react';

const MainLayout = ({ children }) => {
  useEffect(() => {
    document.body.style.overflowY = 'auto';
    return () => (document.body.style.overflowY = 'hidden');
  }, []);

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
