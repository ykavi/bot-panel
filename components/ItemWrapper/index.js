import styled, { css } from 'styled-components';

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemWrapper = styled.div`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  height: 100%;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
    `}

  ${({ columnGap }) =>
    columnGap &&
    css`
      column-gap: ${columnGap};
    `}

  ${(props) => props.center && center}
`;

export default ItemWrapper;
