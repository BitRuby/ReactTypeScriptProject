import styled from "styled-components";

export const CardName = styled.div`
  font-size: 32px;
`;

export const CardDetails = styled.div`
  font-size: 16px;
`;

type CardContainerType = {
  backgroundColor: string;
};

export const CardContainer = styled.div<CardContainerType>`
  width: 525px;
  margin: 20px;
  height: 300px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
