import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const Switch = () => {
  const homeMatch = useMatch("/");
  const freeMatch = useMatch("/free");

  return (
    <SwitchGrid>
      <SLink to="" isMatch={!!homeMatch}>
        실습해보기
      </SLink>
      <SLink to="free" isMatch={!!freeMatch}>
        자유롭게 구성하기
      </SLink>
    </SwitchGrid>
  );
};

const SwitchGrid = styled.div`
  display: flex;

  position: absolute;
  left: 0;

  transform: translateY(-140%);
`;

const SLink = styled(Link)`
  background-color: white;
  padding: 10px;
  border-radius: 5px 5px 0 0;

  color: black;
  text-decoration: none;

  font-size: 15px;

  ${(props) =>
    !props.isMatch && "box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2) inset;"}
  transition: box-shadow .1s ease-in-out;
`;

export default Switch;
