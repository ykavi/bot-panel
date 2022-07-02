import styled, { css } from 'styled-components';

export const StyledButton = styled.a``;

export const Container = styled.div`
  border-radius: 0.4rem;
  color: ${({ theme, color }) => theme.colors[color]};
  padding: ${({ theme }) => theme.sizes.xxsmall};
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ margin }) => margin && `margin: ${margin}`};

  background: ${({ theme, backGroundColor }) => theme.colors[backGroundColor]};

  ${({ hasBorder }) =>
    hasBorder &&
    css`
      border: ${({ theme }) => theme.colors.brand_color} 1px solid;
    `}
`;
