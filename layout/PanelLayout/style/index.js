import styled from 'styled-components';

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: ${({ isMobile }) => (isMobile ? 'space-between' : 'flex-end')};
  padding: ${({ isMobile }) => (isMobile ? '0 8px' : '0 40px')};
  height: 100%;
  align-items: center;
`;

export const DrawerWrapper = styled.div``;
