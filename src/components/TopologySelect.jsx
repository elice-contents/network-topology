import { useContext } from "react";
import styled from "styled-components";
import topologiesList from "../settings/topologiesList";

const TopologySelect = ({ context }) => {
  const {
    state: { currentTopology },
    actions: { setCurrentTopology },
  } = useContext(context);

  return (
    <SSelect
      value={currentTopology}
      onChange={(e) => setCurrentTopology(parseInt(e.target.value))}
    >
      <option value={0}>구성할 토폴로지</option>
      {topologiesList.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </SSelect>
  );
};

const SSelect = styled.select`
  width: 100%;

  padding: 7px 5px;

  background-color: transparent;
  border: none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);

  font-family: "Noto Sans KR", sans-serif;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

export default TopologySelect;
