import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.1875rem;
  border-radius: ${({ theme }) => theme.radius.normal};
  padding: ${({ theme }) => theme.sizes.xsmall};
  background-color: ${({ theme }) => theme.colors.discord};
  cursor: pointer;
`;
