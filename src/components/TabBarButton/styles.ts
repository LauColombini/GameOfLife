import styled from "styled-components/native";

export const ContainerItem = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding-bottom: 8px;
  height: 100%;
`;

type NameProps = {
  current: boolean;
};

export const Name = styled.Text<NameProps>`
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: ${(props) => (props.current ? "white" : "#94a3b8")};
  margin-top: 5px;
`;
