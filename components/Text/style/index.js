import styled, { css } from 'styled-components';

const centered = css`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${({ center }) => center && centered};
  ${({ margin }) => margin && `margin: ${margin}`};
`;

export const StyledText = styled.p`
  font-size: ${({ theme, size }) => theme.sizes[size]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme, weight }) => theme.weight[weight]};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ ellipsis }) => ellipsis};
  -webkit-box-orient: vertical;

  ${({ strikeout }) =>
    strikeout &&
    css`
      text-decoration: line-through;
    `};

  &:hover {
    color: ${({ theme, hoverColor }) => theme.colors[hoverColor]};
  }
`;
