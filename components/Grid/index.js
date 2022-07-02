import styled from 'styled-components';

const Grid = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  display: block;

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    width: 100%;
  }
`;

export default Grid;
