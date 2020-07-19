import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import optionsIcon from "../../../../../public/assets/icons/options.svg";
import scaleIcon from "../../../../../public/assets/icons/scale.svg";
import rulerIcon from "../../../../../public/assets/icons/ruler.svg";
import venusIcon from "../../../../../public/assets/icons/venus-mars.svg";
import InfoPopUp from "./InfoPopUp";

const Wrapper = styled.div`
  padding: 15px;
  max-width: 33%;
`;

const ImgWrapper = styled.div`
  display: grid;
  place-items: center;
  position: relative;
`;

const CardImg = styled.img.attrs(props => ({
  src: props.img
}))`
  border-radius: 100px;
`;

const Card = styled.div`
  background: #f3dbc7;
  border-radius: 28px;
  box-shadow: 0px 4px 15px #869cb0;
  padding: 24px;
`;

const Dots = styled.div`
  background: ${props => `url(${props.icon}) no-repeat center`};
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  right: 0;
  align-self: center;
  cursor: pointer;
`;

const Icon = styled.div`
  background: ${props => `url(${props.icon}) no-repeat center`};
  width: 29px;
  height: 29px;
  align-self: center;
`;

const GiraffName = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  line-height: 26px;
  color: #435f40;
  margin: 24px 0;
`;

const OptionIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 13px;
`;

const HighlitghBlock = styled.div`
  display: flex;
  justify-content: space-between;
  background: #dcb18b;
  border-radius: 258px;
  padding: 8px 15px;
  color: #333333;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

const Params = styled.div`
  color: #484848;
  div {
    padding: 0 5px;
    margin: 20px 0;
  }
  div span {
    font-size: 15px;
    line-height: 18px;
    font-weight: bold;
    color: #435f40;
  }
`;

export default function GiraffeCard({ img, data }) {
  const [infoPopUp, setInfoPopUp] = useState(false);

  const handleInfoClick = () => {
    setInfoPopUp(true);
  };

  const infoPopUpRef = useRef(null);

  useEffect(() => {
    //скыритие popUp по клику вне его;
    function handleClickOutside(event) {
      if (
        infoPopUpRef.current &&
        !infoPopUpRef.current.contains(event.target)
      ) {
        setInfoPopUp(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [infoPopUpRef]);

  return (
    <Wrapper>
      <Card>
        <ImgWrapper>
          <CardImg img={img} />
          <Dots icon={optionsIcon} onClick={handleInfoClick} />
          {infoPopUp && <InfoPopUp giraffeId={data._id} ref={infoPopUpRef} />}
        </ImgWrapper>
        <GiraffName>{data.name}</GiraffName>
        <OptionIcons>
          <Icon icon={venusIcon} />
          <Icon icon={scaleIcon} />
          <Icon icon={rulerIcon} />
        </OptionIcons>
        <HighlitghBlock>
          <span>{data.male}</span>
          <span>{data.weight}</span>
          <span>{data.height}</span>
        </HighlitghBlock>
        <Params>
          <div>
            <span>Цвет:</span> {data.color}
          </div>
          <div>
            <span>Диета:</span> {data.diet}
          </div>
          <div>
            <span>Характер:</span> {data.type}
          </div>
        </Params>
      </Card>
    </Wrapper>
  );
}
