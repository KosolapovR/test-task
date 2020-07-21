import React, {useEffect} from 'react';
import {Field, reduxForm} from "redux-form";
import venusIcon from "../../../../../../public/assets/icons/venus-mars.svg";
import scaleIcon from "../../../../../../public/assets/icons/scale.svg";
import rulerIcon from "../../../../../../public/assets/icons/ruler.svg";
import styled from "styled-components";

const Icon = styled.div`
  background: ${props => `url(${props.icon}) no-repeat center`};
  width: 29px;
  height: 29px;
  align-self: center;
`;

const GiraffName = styled.div`
  input{
    background: transparent;
    border: 0;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    line-height: 26px;
    color: #435f40;
    margin: 24px 0;
    width: 100%;
  }
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
  
  input{
  width: 32%;
  color: #333333;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  background: transparent;
  border: 0;
  text-align: center;
  }
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
  div input{
  font-size: 15px;
  line-height: 18px;
  color: #435f40;
  background: transparent;
  border: 0;
  display: inline;
  width: calc(100% - 90px);
  }
`;


function EditForm({handleSubmit, initialize, initialValues, image}) {
    const {_id, name, height, weight, sex, color, diet, temper} = initialValues;

    useEffect(() => {
        initialize({
            image,
            name,
            sex,
            height,
            weight,
            color,
            diet,
            temper,
            id: _id
        });
    }, [
        image,
        name,
        sex,
        height,
        weight,
        color,
        diet,
        temper,
        _id]);

    return (
        <form onSubmit={handleSubmit}>
            <GiraffName><Field name="name" placeholder="Имя" component="input" type="text"/></GiraffName>
            <OptionIcons>
                <Icon icon={venusIcon}/>
                <Icon icon={scaleIcon}/>
                <Icon icon={rulerIcon}/>
            </OptionIcons>
            <HighlitghBlock>
                <Field name="sex" placeholder="пол" component="input" type="text"/>
                <Field name="weight" placeholder="вес" component="input" type="number"/>
                <Field name="height" placeholder="рост" component="input" type="number"/>
            </HighlitghBlock>
            <Params>
                <div>
                    <span>Цвет:</span> <Field name="color" placeholder="цвет" component="input" type="text"/>
                </div>
                <div>
                    <span>Диета:</span> <Field name="diet"  placeholder="диета" component="input" type="text"/>
                </div>
                <div>
                    <span>Характер:</span> <Field name="temper" placeholder="характер" component="input" type="text"/>
                </div>
            </Params>
            <Field name='id' component='input' type='hidden'/>
            <button type='submit'>Сохранить</button>
        </form>
    );
}

export default reduxForm({
    form: "editForm"
})(EditForm);
