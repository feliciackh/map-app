import React from "react";
import {
  materialsObject,
  materialsCount,
  areaBelow526,
  areaBelow200,
  areaBelow50,
  areaCount,
} from "./calculations";
import styled, { css } from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  max-width: 500px;
  height: 310px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px#ccc;
`;

const Title = styled.div`
  font-size: 1.2rem;
  text-decoration: underline;
  display: flex;
  justify-content: center;
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Chart = css`
  margin-top: 10px;
  width: 56px;
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: 420px) {
    width: 34px;
  }
`;

const Bar = styled.div`
  height: ${(p) => p.height}%;
  background-image: linear-gradient(
    to bottom,
    ${(p) => p.colors[0]},
    ${(p) => p.colors[1]}
  );
  ${Chart};
`;

const Text = styled.span`
  font-size: 1rem;
  text-align: center;
  color: ${(p) => p.color};
`;

const BaseLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
`;

const BarChart = ({ setMaterial }) => {
  return (
    <MainContainer>
      <Container>
        <Title>Number of ramps for each construction material</Title>
        <ChartContainer>
          {materialsCount(materialsObject).map(
            ({ material, colors, name }, i) => {
              return (
                <BarContainer key={i} onClick={() => setMaterial(name)}>
                  <Text color={colors[1]}>{material}</Text>
                  <Text color={colors[1]}>{name}</Text>
                  <Bar height={material} colors={colors} />
                </BarContainer>
              );
            }
          )}
        </ChartContainer>
        <BaseLine />
      </Container>
      <Container>
        <Title>Number of ramps per size category</Title>
        <ChartContainer>
          {areaCount(areaBelow50, areaBelow200, areaBelow526).map(
            ({ area, colors, name }, i) => {
              return (
                <BarContainer key={i}>
                  <Text color={colors[1]}>{area}</Text>
                  <Text color={colors[1]}>{name}</Text>
                  <Bar height={area} colors={colors} />
                </BarContainer>
              );
            }
          )}
        </ChartContainer>
        <BaseLine />
      </Container>
    </MainContainer>
  );
};

export default BarChart;
