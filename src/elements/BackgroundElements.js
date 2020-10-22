import styled from "styled-components"

export const BackgroundWrapper = styled.div`
  z-index: 0;
  overflow: overlay;
  background-color: transparent;
  position: absolute;
  padding-top: 60px;
  margin-bottom: 40px;
  display: flex;
  opacity: 1;

  @media (max-width: 768px) {

    padding-top: 90px;
  }
`
