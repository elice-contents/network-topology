import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import router from "../assets/router.png";

const RouterComponent = ({ routerId, context, defaultPos, checkIsOut }) => {
  const [pos, setPos] = useState([]);
  const [originPos, setOriginPos] = useState([]);
  const [clientPos, setClientPos] = useState([]);
  const {
    state: { mode, currentRouter, endRouter, containerRect },
    actions: { setMode, setCurrentRouter, setEndRouter },
  } = useContext(context);

  useEffect(() => {
    if (mode && mode >= 2) return;

    const initialPos = defaultPos;

    setPos(initialPos);
    setOriginPos(initialPos);
  }, [containerRect, mode, defaultPos]);

  const handleClick = useCallback(
    (e) => {
      if (mode && mode !== 3) return;

      if (currentRouter.id === routerId) {
        setCurrentRouter({ id: 0, pos: [0, 0] });
        return;
      }
      if (checkIsOut(pos)) return;

      const rect = e.target.getBoundingClientRect();

      if (currentRouter.id === 0) {
        setCurrentRouter({
          id: routerId,
          pos: [(rect.left + rect.right) / 2, (rect.top + rect.bottom) / 2],
        });
        setEndRouter({ id: 0, pos: [0, 0] });
      } else if (endRouter.id === 0) {
        setEndRouter({
          id: routerId,
          pos: [(rect.left + rect.right) / 2, (rect.top + rect.bottom) / 2],
        });
      }
    },
    [
      pos,
      mode,
      routerId,
      currentRouter,
      setCurrentRouter,
      endRouter,
      setEndRouter,
      checkIsOut,
    ]
  );

  const handleDragStart = useCallback(
    (e) => {
      if (mode === 1) setMode(2);

      setOriginPos(pos);
      setClientPos([e.clientX, e.clientY]);

      const blankCanvas = document.createElement("canvas");
      blankCanvas.style.visibility = "none";
      blankCanvas.style.opacity = "0";
      blankCanvas.classList.add("canvas");
      e.dataTransfer?.setDragImage(blankCanvas, 0, 0);
      document.body?.appendChild(blankCanvas);
      e.dataTransfer.effectAllowed = "move";
      document.body.style.overflow = "hidden";

      e.target.style.filter = "drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2))";
    },
    [mode, setMode, pos]
  );

  const handleDrag = useCallback(
    (e) => {
      e.preventDefault();
      setPos([
        pos[0] + e.clientX - clientPos[0],
        pos[1] + e.clientY - clientPos[1],
      ]);

      setClientPos([e.clientX, e.clientY]);
    },
    [clientPos, pos]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDragEnd = useCallback(
    (e) => {
      e.target.style.filter = "none";

      const canvases = document.getElementsByClassName("canvas");
      for (let i = 0; i < canvases.length; i++) {
        let canvas = canvases[i];
        canvas.parentNode?.removeChild(canvas);
      }
      document.body.removeAttribute("style");

      if (checkIsOut(pos)) setPos(originPos);
    },
    [originPos, setPos, pos, checkIsOut]
  );

  const eventHandlers = useMemo(() => {
    return [1, 2].includes(mode)
      ? {
          onDragStart: handleDragStart,
          onDrag: handleDrag,
          onDragEnd: handleDragEnd,
          onDragOver: handleDragOver,
        }
      : !mode || mode === 3
      ? {
          onClick: handleClick,
        }
      : {};
  }, [
    mode,
    handleClick,
    handleDragStart,
    handleDrag,
    handleDragEnd,
    handleDragOver,
  ]);

  return (
    <Container draggable {...eventHandlers} pos={pos} mode={mode}>
      <SImg src={router} alt="라우터" />
    </Container>
  );
};

const Container = styled.div.attrs((props) => ({
  style: {
    left: props.pos[0],
    top: props.pos[1],
    pointerEvents: props.mode === 3 ? "auto" : "",
  },
}))`
  position: absolute;
  z-index: 3;

  &:hover {
    cursor: grab;
  }
`;

const SImg = styled.img`
  width: 70px;
`;

export default RouterComponent;
