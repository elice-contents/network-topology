import { useCallback, useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const DragContainer = ({ children, context, canvasSize }) => {
  const {
    state: { mode, currentRouter, endRouter, currentTopology, pathList },
    actions: {
      setCurrentRouter,
      setEndRouter,
      setContainerRect,
      addPathList,
      initPathList,
    },
  } = useContext(context);
  const ref = useRef();

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [ctx, setCtx] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 2.5;
    contextRef.current = context;

    setCtx(context);

    const handleResize = () => {
      const rect = ref.current.getBoundingClientRect();
      setContainerRect({
        width: rect.width,
        height: rect.height,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setContainerRect]);

  useEffect(() => {
    if (mode !== 3) {
      initPathList();
    }
  }, [mode, currentTopology, initPathList]);

  const setPath = useCallback(() => {
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    pathList.forEach(([start, end]) => {
      ctx.beginPath();
      ctx.moveTo(...start);
      ctx.lineTo(...end);
      ctx.stroke();
      ctx.closePath();
    });
  }, [pathList, ctx]);

  useEffect(() => {
    setPath();
  }, [pathList, setPath]);

  const handleMouseMove = useCallback(
    (e) => {
      if (!ctx) return;
      if ((mode && mode !== 3) || currentRouter.id === 0) {
        setPath();
        return;
      }

      const rect = canvasRef.current.getBoundingClientRect();
      if (currentRouter.id !== 0 && endRouter.id === 0) {
        setPath();
        ctx.beginPath();
        ctx.moveTo(
          currentRouter.pos[0] - rect.left,
          currentRouter.pos[1] - rect.top
        );
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
        ctx.closePath();
      } else if (endRouter.id !== 0) {
        addPathList([
          [currentRouter.pos[0] - rect.left, currentRouter.pos[1] - rect.top],
          [endRouter.pos[0] - rect.left, endRouter.pos[1] - rect.top],
        ]);

        setCurrentRouter({ id: 0, pos: [0, 0] });
        setEndRouter({ id: 0, pos: [0, 0] });
      }
    },
    [
      currentRouter,
      endRouter,
      ctx,
      mode,
      setCurrentRouter,
      setEndRouter,
      setPath,
      addPathList,
    ]
  );

  return (
    <Container ref={ref} onMouseMove={handleMouseMove}>
      {children}
      <canvas {...canvasSize} style={{ zIndex: 1 }} ref={canvasRef}></canvas>
    </Container>
  );
};

const Container = styled.section`
  width: 700px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

export default DragContainer;
