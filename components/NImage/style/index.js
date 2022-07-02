import styled, { css } from 'styled-components';

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.normal};

  ${({ hasBorder }) =>
    hasBorder &&
    css`
      border-color: ${({ theme }) => theme.colors.grey_v2};
    `};
`;
