import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {connect} from "react-redux";

import emptyPhoto from "assets/img/emptyPhoto.png";
import closeIcon from "assets/icons/closeBlack.svg";
import {closeEditingCardAC, updateGiraffe} from "../../../state/giraffe";
import {setImgAC} from "../../../state/giraffe/actions";
import EditForm from "./EditForm";

const Wrapper = styled.div`
  padding: 15px;
  width: 25%;
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
  max-width: 100%;
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
  width: min-content;
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

const CloseIcon = styled.div`
  background: ${props => `url(${props.icon}) no-repeat center`};
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  right: 0;
  align-self: center;
  cursor: pointer;
`;


const EditableGiraffeCard = ({data, aviary, setCurrentImg, image, updateGiraffe, closeCard}) => {

    const handleSubmit = giraffe => {
        giraffe.aviary = aviary;
        updateGiraffe(giraffe);
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

    const [files, setFiles] = useState();

    useEffect(() => {
        if (files)
            sendFiles();
    }, [files]);

    const sendFiles = async (event) => {
        let formData = new FormData();
        formData.append('file', files[0]);
        const {data} = await axios.post('/uploadImage', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (data.success) {
            setFiles();
            setCurrentImg(files[0].name);
        }
    };

    const handleFileChange = (event) => {
        if (event.target.files.length === 0 || event.target.files == undefined) return;
        setFiles(event.target.files);
    };

    const handleClose = () => {
        closeCard(data.name);
    };

    return (
        <Wrapper>
            <Card>
                <ImgWrapper>
                    <label htmlFor="file">
                        {(data && data.image) || image ? <CardImg img={`/uploads/${data.image || image}`}/> :
                            <CardImg img={emptyPhoto}/>}
                        <input type="file" accept="image/*" name="photo" id="file" hidden
                               onChange={handleFileChange}/>
                    </label>
                    <CloseIcon icon={closeIcon} onClick={handleClose}/>
                </ImgWrapper>
                <EditForm onSubmit={handleSubmit} initialValues={data} image={image || data.image}/>
            </Card>
        </Wrapper>
    );
};

const mapStateToProps = state => ({
    image: state.giraffesPage.currentImg,
});

const mapDispatchToProps = dispatch => ({
    setCurrentImg: (img) => {
        dispatch(setImgAC(img));
    },
    updateGiraffe: (giraffe) => {
        dispatch(updateGiraffe(giraffe));
    },
    closeCard: (giraffeName) => {
        dispatch(closeEditingCardAC(giraffeName));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditableGiraffeCard);
