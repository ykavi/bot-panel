import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: ${({ theme }) => theme.sizes.base} solid ${({ theme }) => theme.colors.grey_v2};
  height: 6rem;

  @media (max-width: ${({ theme }) => theme.flexboxgrid.breakpoints.sm}em) {
    display: block;
  }
`;

export const LogoWrapper = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
`;
