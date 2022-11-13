import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { grid } from "../styles/theme";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  column-gap: ${grid.desktop.gutter};
  row-gap: ${grid.desktop.gutter};
  background-color: yellow;
  width: 100vw;
  height: 100vh;
`;

const HomePage = ({}) => {
  return (
    <>
      <Container>Home</Container>
    </>
  );
};

export default HomePage;
