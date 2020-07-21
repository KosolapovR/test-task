import React, {forwardRef} from 'react';
import styled from "styled-components";

import closeIcon from "assets/icons/closeBlack.svg";
import Table from "./Table";

const Blanket = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(100, 100, 100, .4);
`;

const Wrapper = styled.div`
position: absolute;
  top: 50%;  
  left: 50%; 
  transform: translate(-50%, -50%); /
  transform: translate(-50%);
  width: 506px;
  height: 287px;
  background: #FFFFFF;
  box-shadow: 0px 4px 15px #869CB0;
  border-radius: 28px;
  padding: 20px 30px;
  overflow: hidden;
`;

const Head = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #435F40;
  display:flex;
  justify-content:space-between;
  border-bottom: 2px solid #D9D9D9;
  padding-bottom: 6px;
`;

const CloseIcon = styled.div`
  background: ${props => `url(${props.icon}) no-repeat center`};
  width: 16px;
  height: 21px;
  cursor: pointer;
`;

const Updates = forwardRef(({handleClose}, ref) => {
    return (
        <Blanket>
            <Wrapper ref={ref}>
                <Head>
                    Обновления
                    <CloseIcon icon={closeIcon} onClick={handleClose}/>
                </Head>
                <Table/>
            </Wrapper>
        </Blanket>
    );
});

export default Updates;
