import { useContext } from "react";
import styled from "styled-components";
import BusComponent from "../components/BusComponent";
import FreeButtonsContainer from "../components/FreeButtonsContainer";
import DragContainer from "../components/DragContainer";
import GridBox from "../components/GridBox";
import RouterComponent from "../components/RouterComponent";
import TopologyImage from "../components/TopologyImage";
import TopologySelect from "../components/TopologySelect";
import FreeContext from "../settings/FreeContext";

const Free = () => {
  const {
    state: { containerRect, currentTopology },
  } = useContext(FreeContext);

  return (
    <>
      <TopologySelect context={FreeContext} />
      <DragContainer
        context={FreeContext}
        canvasSize={{ width: 700, height: 375 }}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <RouterComponent
            key={i}
            routerId={i}
            context={FreeContext}
            defaultPos={[
              14 + containerRect.width * 0.12 * (i - 1),
              containerRect.height * 0.05,
            ]}
            checkIsOut={(pos) =>
              !(
                0 <= pos[0] &&
                pos[0] <= containerRect.width &&
                125 <= pos[1] &&
                pos[1] <= containerRect.height
              )
            }
          />
        ))}
        <Grid>
          <GridBox></GridBox>
          <GridBox>
            <TopologyImage context={FreeContext} />
          </GridBox>
        </Grid>
        {currentTopology === 7 && <BusComponent context={FreeContext} />}
      </DragContainer>
      <FreeButtonsContainer />
    </>
  );
};

const Grid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
`;

export default Free;
