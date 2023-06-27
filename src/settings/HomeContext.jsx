import { createContext, useCallback, useEffect, useRef, useState } from "react";
import setRandomInitPath from "../utils/setRandomInitPath";
import topologiesList from "./topologiesList";

const HomeContext = createContext({
  state: {
    currentTopology: 0,
    containerRect: { width: 0, height: 0 },
    currentRouter: { id: 0, pos: [0, 0] },
    endRouter: { id: 0, pos: [0, 0] },
    pathList: [],
  },
  actions: {
    setCurrentTopology: () => {},
    setCurrentRouter: () => {},
    setEndRouter: () => {},
    setContainerRect: () => {},
    checkIsCorrect: () => {},
    initPathList: () => {},
    addPathList: () => {},
  },
});

const HomeContextProvider = ({ children }) => {
  const [currentTopology, setCurrentTopology] = useState(0);
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
  const originPathList = useRef([]);

  const checkIsCorrect = useCallback(
    () =>
      JSON.stringify(
        topologiesList[currentTopology - 1].answerPathList
          .map((item) => item.sort())
          .sort()
      ) === JSON.stringify(pathList.map((item) => item.sort()).sort()),
    [pathList, currentTopology]
  );

  const initPathList = useCallback(() => {
    setPathList(originPathList.current);
  }, [originPathList]);

  const addPathList = useCallback(
    (newPath) => {
      setPathList([...pathList, newPath]);
    },
    [pathList]
  );

  useEffect(() => {
    originPathList.current =
      currentTopology > 0
        ? setRandomInitPath(topologiesList[currentTopology - 1].answerPathList)
        : [];

    initPathList();
  }, [currentTopology, initPathList]);

  const value = {
    state: {
      currentTopology,
      containerRect,
      currentRouter,
      endRouter,
      pathList,
    },
    actions: {
      setCurrentTopology,
      setCurrentRouter,
      setEndRouter,
      setContainerRect,
      addPathList,
      initPathList,
      checkIsCorrect,
    },
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

const { Consumer: HomeContextConsumer } = HomeContext;

export { HomeContextProvider, HomeContextConsumer };

export default HomeContext;
