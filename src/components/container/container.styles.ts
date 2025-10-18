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
  min-height: 100vh;
  overflow-y: auto;

  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const StepContainer = styled.div`
  gap: 0.88rem;
  display: flex;
  flex-direction: column;
`;
