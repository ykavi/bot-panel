import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.1875rem;
  border-radius: 1.25rem;
  padding: ${({ theme }) => theme.sizes.xsmall};
  background-color: ${({ theme }) => theme.colors.discord};
  cursor: pointer;
  height: 2.5rem;
`;
