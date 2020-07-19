import React, {useEffect, useRef, useState} from 'react';
import styled, {keyframes} from "styled-components";
import closeIcon from "../../../../../public/assets/icons/close.svg";
import Updates from "../updates/Updates";

const show = keyframes`
  from {
    height: 0px;
  }

  to {
    height: 150px;
  }
`;

const Wrapper = styled.div`
  width: 506px;
  height: 150px;
  background: #668663;
  border-top-right-radius: 28px;
  border-top-left-radius: 28px;
  position: absolute;
  bottom: -10px;
  right: 100px;
  padding: 20px 20px 20px 30px;
  animation: ${show} .5s linear;
  > div{
    position: relative;
  }
`;

const CloseIcon = styled.div`
  background: ${props => `url(${props.icon}) no-repeat center`};
  width: 16px;
  height: 21px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`;

const Fullness = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #FFFFFF;
  padding: 10px 0;

  span{
  font-weight: normal;
  font-size: 50px;
  line-height: 59px;
  margin-right: 15px;
  }
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProgressBar = styled.div`
  width: 323px;
  height: 31px;
  background: #435F40;
  border-radius: 35px;
  padding: 5px;
`;

const ProgressLine = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background: #F3DBC7;
  border-radius: 35px;
`;

const InfoButton = styled.div`
  width: min-content;
  height: 31px;
  background: #435F40;
  border-radius: 35px;
  padding: 8px 18px;
  color: #FFF;
  font-size: 12px;
  line-height: 14px;
  cursor: pointer;
  &:hover{
    background: #516c51;
  }
`;

function CapacityTab({percent}) {

    const [visibleInfoTab, setVisibleInfoTab] = useState(true);
    const [visibleUpdatesModal, setVisibleUpdatesModal] = useState(false);

    const handleCloseTab = () => {
        setVisibleInfoTab(false);
    };

    const openModal = () => {
        setVisibleUpdatesModal(true);
    };

    const closeModal = () => {
        setVisibleUpdatesModal(false);
    };


    const updatesModalRef = useRef(null);

    useEffect(() => {
        //сокрытие popUp по клику вне его;
        function handleClickOutside(event) {
            if (
                updatesModalRef.current &&
                !updatesModalRef.current.contains(event.target)
            ) {
                closeModal();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [updatesModalRef]);

    return (
        <>
            {visibleInfoTab &&
            <Wrapper hide={true}>
                <div>
                    <CloseIcon icon={closeIcon} onClick={handleCloseTab}/>
                    <Fullness>
                        <span>{percent}%</span>
                        Заполнение вольера
                    </Fullness>
                    <ProgressBarWrapper>
                        <ProgressBar>
                            <ProgressLine value={percent}/>
                        </ProgressBar>
                        <InfoButton onClick={openModal}>Информация</InfoButton>
                    </ProgressBarWrapper>
                </div>
            </Wrapper>
            }
            {visibleUpdatesModal && <Updates ref={updatesModalRef} handleClose={closeModal}/>}
        </>
    );
}

export default CapacityTab;
