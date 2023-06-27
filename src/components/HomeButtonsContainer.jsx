import { useContext } from "react";
import styled from "styled-components";
import HomeContext from "../settings/HomeContext";

const HomeButtonsContainer = () => {
  const {
    actions: { checkIsCorrect, initPathList },
  } = useContext(HomeContext);

  return (
    <Container>
      <SButton
        onClick={() =>
          checkIsCorrect()
            ? alert("정답입니다.")
            : alert("틀렸습니다. 다시 연결해보세요.")
        }
      >
        정답 확인하기
      </SButton>
      <SButton onClick={() => initPathList()}>다시하기</SButton>
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

export default HomeButtonsContainer;
