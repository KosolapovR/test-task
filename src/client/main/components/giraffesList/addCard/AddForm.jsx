import React, {useEffect} from 'react';
import {Field, reduxForm} from "redux-form";
import styled from "styled-components";

import venusIcon from "assets/icons/venus-mars.svg";
import scaleIcon from "assets/icons/scale.svg";
import rulerIcon from "assets/icons/ruler.svg";

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
    padding: 0 5px;
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
  min-height: 35px;
  border-radius: 258px;
  padding: 8px 15px;
  
  input{
  width: 32%;
  padding: 0 3px;
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
    display: flex;
    justify-content: space-between;
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
  padding: 0 5px;
  color: #435f40;
  background: transparent;
  border: 0;
  display: inline;
  width: 100%;
  }
`;


function AddForm({handleSubmit, initialize, image}) {
    useEffect(() => {
        initialize({
            image
        });
    }, [image]);

    return (
        <form onSubmit={handleSubmit}>
            <GiraffName><Field name="name" placeholder="Кличка" component="input" type="text"/></GiraffName>
            <OptionIcons>
                <Icon icon={venusIcon}/>
                <Icon icon={scaleIcon}/>
                <Icon icon={rulerIcon}/>
            </OptionIcons>
            <HighlitghBlock>
                <Field name="sex" placeholder="пол" component="input" type="text"/>
                <Field name="weight" placeholder="вес" component="input" type="text"/>
                <Field name="height" placeholder="рост" component="input" type="text"/>
            </HighlitghBlock>
            <Params>
                <div>
                    <span>Цвет:</span> <Field name="color" placeholder="цвет" component="input" type="text"/>
                </div>
                <div>
                    <span>Диета:</span> <Field name="diet" placeholder="диета" component="input" type="text"/>
                </div>
                <div>
                    <span>Характер:</span> <Field name="temper" placeholder="характер" component="input" type="text"/>
                </div>
            </Params>
            <button type='submit'>Сохранить</button>
        </form>
    );
}

export default reduxForm({
    form: "addForm"
})(AddForm);
