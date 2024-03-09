import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: ${p => p.theme.colors.backDrop};
  z-index: 1200;
  justify-content: center;
  align-items: center;
  inset: 0;
`;

export const ModalBody = styled.div`
  right: auto;
  bottom: auto;
  border-radius: 30px;
  padding: 64px;
  max-width: 566px;
  background-color: ${p => p.theme.colors.homeBackground};
  overflow: hidden;
  position: relative;
`;

export const CloseBtn = styled.button`
  position: absolute;
  margin-left: auto;
  background-color: transparent;
  width: 32px;
  height: 32px;
  right: 20px;
  top: 20px;
  transition: 250ms ${p => p.theme.transition};

  &:is(:hover, :focus) {
    transform: scale(1.05);
  }
`;

export const CloseBtnSvg = styled.svg`
  width: 100%;
  height: 100%;
  stroke: ${p => p.theme.colors.logo};
`;
