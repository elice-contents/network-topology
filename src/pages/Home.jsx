import { useContext } from "react";
import styled from "styled-components";
import BusComponent from "../components/BusComponent";
import DragContainer from "../components/DragContainer";
import GridBox from "../components/GridBox";
import HomeButtonsContainer from "../components/HomeButtonsContainer";
import RouterComponent from "../components/RouterComponent";
import TopologyImage from "../components/TopologyImage";
import TopologySelect from "../components/TopologySelect";
import HomeContext from "../settings/HomeContext";
import topologiesList from "../settings/topologiesList";

const Home = () => {
  const {
    state: { currentTopology, containerRect },
  } = useContext(HomeContext);

  return (
    <>
      <TopologySelect context={HomeContext} />
      <DragContainer
        context={HomeContext}
        canvasSize={{ width: 700, height: 500 }}
      >
        {currentTopology > 0 &&
          [1, 2, 3, 4, 5, 6].map((i) => (
            <RouterComponent
              key={i}
              routerId={i}
              context={HomeContext}
              defaultPos={topologiesList[currentTopology - 1].routerPos[i - 1]}
              checkIsOut={(pos) =>
                !(
                  0 <= pos[0] &&
                  pos[0] <= containerRect.width &&
                  0 <= pos[1] &&
                  pos[1] <= containerRect.height
                )
              }
            />
          ))}
        <GridBoxContainer>
          <GridBox>
            <TopologyImage context={HomeContext} />
          </GridBox>
        </GridBoxContainer>
        {currentTopology === 7 && <BusComponent context={HomeContext} />}
      </DragContainer>
      <HomeButtonsContainer />
    </>
  );
};

const GridBoxContainer = styled.div`
  width: 180px;

  position: absolute;
  top: 0;
  left: 0;
`;

export default Home;
