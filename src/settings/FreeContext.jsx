import { createContext, useCallback, useEffect, useState } from "react";

const FreeContext = createContext({
  state: {
    currentTopology: 0,
    mode: 0,
    containerRect: { width: 0, height: 0 },
    currentRouter: { id: 0, pos: [0, 0] },
    endRouter: { id: 0, pos: [0, 0] },
    pathList: [],
  },
  actions: {
    setCurrentTopology: () => {},
    setMode: () => {},
    setCurrentRouter: () => {},
    setEndRouter: () => {},
    setContainerRect: () => {},
    initPathList: () => {},
    addPathList: () => {},
  },
});

const FreeContextProvider = ({ children }) => {
  const [currentTopology, setCurrentTopology] = useState(0);
  const [mode, setMode] = useState(0); // mode: 0 - 토폴로지 선택 전 / 1 - 라우터 초기화 / 2 - 라우터 이동 / 3 - 선 연결
  const [containerRect, setContainerRect] = useState({
    width: 0,
    height: 0,
  });
  const [currentRouter, setCurrentRouter] = useState({
    id: 0,
    pos: [0, 0],
  });
  const [endRouter, setEndRouter] = useState({
    id: 0,
    pos: [0, 0],
  });
  const [pathList, setPathList] = useState([]);

  const initPathList = useCallback(() => {
    setPathList([]);
  }, []);

  const addPathList = useCallback(
    (newPath) => {
      setPathList([...pathList, newPath]);
    },
    [pathList]
  );

  useEffect(() => {
    currentTopology > 0 ? setMode(1) : setMode(0);
  }, [currentTopology]);

  const value = {
    state: {
      currentTopology,
      mode,
      containerRect,
      currentRouter,
      endRouter,
      pathList,
    },
    actions: {
      setCurrentTopology,
      setMode,
      setCurrentRouter,
      setEndRouter,
      setContainerRect,
      initPathList,
      addPathList,
    },
  };

  return <FreeContext.Provider value={value}>{children}</FreeContext.Provider>;
};

const { Consumer: FreeContextConsumer } = FreeContext;

export { FreeContextProvider, FreeContextConsumer };

export default FreeContext;
