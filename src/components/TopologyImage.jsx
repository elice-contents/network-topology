import { useContext } from "react";
import styled from "styled-components";
import topologiesList from "../settings/topologiesList";

const TopologyImage = ({ context }) => {
  const {
    state: { currentTopology },
  } = useContext(context);

  return currentTopology === 0 ? (
    <SSpan>구성할 네트워크 토폴로지를 선택해주세요.</SSpan>
  ) : (
    <SImg
      src={topologiesList[currentTopology - 1].src}
      alt={topologiesList[currentTopology - 1].name}
    />
  );
};

const SImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: scale-down;
`;

const SSpan = styled.span`
  font-size: 15px;
  text-align: center;
`;

export default TopologyImage;
