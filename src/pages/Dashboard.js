import React, { useState } from "react";
import BarChart from "../components/BarChart";
import { Map } from "../components/Map";
import styled from "styled-components";

const StyledTitle = styled.div`
  background: white;
  color: black;
  font-weight: 900;
  font-size: 1.3rem;
  padding: 1rem;
  margin: 0.5rem auto;
  display: flex;
  justify-content: center;
  border: 1px solid #bfbfbf;
  box-shadow: 3px 3px #ccc;
  border-radius: 0.5rem;
`;

const Dashboard = () => {
  const [material, setMaterial] = useState(null);
  return (
    <>
      <StyledTitle>Welcome to your dashboard</StyledTitle>
      <Map material={material} />
      <BarChart setMaterial={setMaterial} />
    </>
  );
};

export default Dashboard;
