import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  h5 {
    margin: 0 12px 0 12px;
    color: #ffffff;
  }
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 52px;
  right: 0;
  z-index: 1;
`;
