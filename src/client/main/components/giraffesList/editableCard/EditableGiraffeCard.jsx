import React, {useState, useRef, useEffect} from "react";
import styled from "styled-components";
import optionsIcon from "../../../../../../public/assets/icons/options.svg";
import scaleIcon from "../../../../../../public/assets/icons/scale.svg";
import rulerIcon from "../../../../../../public/assets/icons/ruler.svg";
import venusIcon from "../../../../../../public/assets/icons/venus-mars.svg";
import InfoPopUp from "../InfoPopUp";
import {Field, reduxForm} from "redux-form";
import EditForm from "./editForm";
import {fetchGiraffesInAviary, updateGiraffe} from "../../../state/giraffe";
import {connect} from "react-redux";

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
  
  form button{
  height: 39px;
  background: #567354;
  border-radius: 33px;
  border: 0;
  width: 50%;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  color: #FFFFFF;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  display: block;
  outline: none;
    &:hover{
      background: #435f40;
    }
  }
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

const EditableGiraffeCard = ({img, data, aviary, updateGiraffe}) => {
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

    const handleSubmit = giraffe => {
        giraffe.aviary = aviary;
        updateGiraffe(giraffe);
    };

    return (
        <Wrapper>
            <Card>
                <ImgWrapper>
                    <CardImg img={img}/>
                    {/*<Dots icon={optionsIcon} onClick={handleInfoClick}/>*/}
                    {infoPopUp && <InfoPopUp giraffeId={data._id} ref={infoPopUpRef}/>}
                </ImgWrapper>
                <EditForm onSubmit={handleSubmit} initialValues={data}/>
            </Card>
        </Wrapper>
    );
};

const mapDispatchToProps = dispatch => ({
    updateGiraffe: (giraffe) => {
        dispatch(updateGiraffe(giraffe));
    },
});

export default connect(null, mapDispatchToProps)(EditableGiraffeCard);

