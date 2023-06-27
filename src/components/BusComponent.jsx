import { useCallback, useContext } from "react";
import styled from "styled-components";

const BusComponent = ({ context }) => {
  const {
    state: { mode, currentRouter, endRouter },
    actions: { setEndRouter },
  } = useContext(context);

  const handleClick = useCallback(
    (e) => {
      if (mode && mode !== 3) return;
      if (currentRouter.id === 0 || endRouter.id !== 0) return;

      const { top, bottom } = e.target.getBoundingClientRect();

      setEndRouter({ id: 7, pos: [currentRouter.pos[0], (top + bottom) / 2] });
    },
    [mode, currentRouter, endRouter, setEndRouter]
  );

  return <Container onClick={handleClick} />;
};

const Container = styled.div`
  width: 100%;
  height: 10px;
  z-index: 2;

  position: absolute;
  top: 60%;
  left: 0;

  background-color: black;

  &:hover {
    cursor: grab;
  }
`;

export default BusComponent;
