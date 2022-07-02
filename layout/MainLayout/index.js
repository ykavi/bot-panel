import { Header, Footer, Grid } from '@components';
import { Main } from './style';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Grid>
      <Main>{children}</Main>
    </Grid>
    <Footer />
  </>
);

export default MainLayout;
