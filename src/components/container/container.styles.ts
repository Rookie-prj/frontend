import styled from '@emotion/styled';
export const BaseContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export const BaseContainerWithSpaceBetween = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;
`;
