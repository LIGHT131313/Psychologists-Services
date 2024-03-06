import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 0;
  border: 1px solid ${p => p.theme.colors.border};

  > nav {
    display: flex;
  }
`;
