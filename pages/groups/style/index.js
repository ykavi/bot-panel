import styled from 'styled-components';

const Container = styled.div`
  .ant-card-cover {
    height: 254px;

    @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
      height: 180px;
    }
  }
`;

export default Container;
