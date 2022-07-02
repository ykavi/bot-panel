import { Col, Row, Button } from 'antd';
import { StyledHeader, LogoWrapper } from './style';
import { HeaderMenuList, Grid, ItemWrapper } from '@components';
import Link from 'next/link';
import { Logo } from '@Icons';

const Header = () => (
  <StyledHeader>
    <Grid>
      <Row>
        <Col xl={5} lg={5} md={4} sm={4} xs={24}>
          <Link href="/">
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </Link>
        </Col>

        <Col xl={16} lg={16} md={17} sm={17} xs={24}>
          <HeaderMenuList />
        </Col>

        <Col xl={3} lg={3} md={3} sm={3} xs={0}>
          <ItemWrapper flex justifyContent="end" alignItems="center">
            <Button type="primary" ghost>
              Log In
            </Button>
          </ItemWrapper>
        </Col>
      </Row>
    </Grid>
  </StyledHeader>
);

export default Header;
