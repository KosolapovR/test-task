import React from "react";
import styled from "styled-components";
import GiraffCard from "./GiraffCard";
import giraffImg1 from '../../../../../public/assets/img/giro1.png'
import giraffImg2 from '../../../../../public/assets/img/giro2.png'
import giraffImg3 from '../../../../../public/assets/img/giro3.png'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(236px, 1fr));
`;

export default function GiraffList() {
  return (
    <Wrapper>
      <GiraffCard img={giraffImg1} />
      <GiraffCard img={giraffImg2} />
      <GiraffCard img={giraffImg3} />
    </Wrapper>
  );
}
