import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ItemWrapper = styled.div`
  cursor: pointer;
  margin: 0 0 0 ${({ theme }) => theme.sizes.small};
  display: flex;
  align-items: center;
  position: relative;
`;

export const SubItemWrapper = styled.div`
  position: absolute;
  width: 100%;
  border: ${({ theme }) => theme.sizes.base} solid ${({ theme }) => theme.colors.grey_v5};
  border-radius: ${({ theme }) => theme.radius.normal};
  padding: ${({ theme }) => theme.sizes.small};
  top: 32px;
  background-color: ${({ theme }) => theme.colors.white};
`;
