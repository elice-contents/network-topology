import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Switch from "../components/Switch";

const Root = () => {
  return (
    <Container>
      <RootContainer>
        <Switch />
        <Outlet />
      </RootContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: gray;
`;

const RootContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 15px;
  position: relative;

  background-color: white;
`;

export default Root;
