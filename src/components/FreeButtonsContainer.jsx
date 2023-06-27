import { useContext } from "react";
import styled from "styled-components";
import FreeContext from "../settings/FreeContext";

const FreeButtonsContainer = () => {
  const {
    state: { mode },
    actions: { setMode, setEndRouter, setCurrentRouter },
  } = useContext(FreeContext);

  return (
    <Container>
      <SButton
        onClick={() => {
          if (mode === 2) setMode(3);
          else if (mode === 3) {
            setMode(2);
            setCurrentRouter({ id: 0, pos: [0, 0] });
            setEndRouter({ id: 0, pos: [0, 0] });
          }
        }}
      >
        {mode <= 2 ? "연결하기" : "다시 배치하기"}
      </SButton>
      <SButton onClick={() => setMode(1)}>다시하기</SButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SButton = styled.button`
  border: none;
  border-radius: 15px;
  padding: 10px 20px;

  background-color: #c6b3ff;

  font-size: 20px;
  font-weight: 500;

  font-family: "Noto Sans KR", sans-serif;

  &:hover {
    cursor: pointer;
  }
`;

export default FreeButtonsContainer;
