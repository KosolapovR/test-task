import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {createGiraffe, fetchGiraffesInAviary, updateGiraffe} from "../../../state/giraffe";
import {connect} from "react-redux";
import AddForm from "./AddForm";
import emptyPhoto from "../../../../../../public/assets/img/emptyPhoto.png";
import axios from "axios";
import {setImgAC} from "../../../state/giraffe/actions";

const Wrapper = styled.div`
  padding: 15px;
  min-width: 25%;
  max-width: 326px;
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

const AddGiraffeCard = ({aviary, setCurrentImg, image, createGiraffe}) => {

    const [files, setFiles] = useState();

    const handleSubmit = giraffe => {
        giraffe.aviary = aviary;
        createGiraffe(giraffe);
    };
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
            setFiles()
            setCurrentImg(files[0].name);
        }
    }

    const handleFileChange = (event) => {
        if (event.target.files.length === 0 || event.target.files == undefined) return;
        setFiles(event.target.files);
    }

    return (
        <Wrapper>
            <Card>
                <ImgWrapper>
                    <label htmlFor="file">
                        {image ? <CardImg img={`/uploads/${image}`}/> : <CardImg img={emptyPhoto}/>}
                        <input type="file" accept="image/*" name="photo" id="file" hidden
                               onChange={handleFileChange}/>
                    </label>
                </ImgWrapper>
                <AddForm onSubmit={handleSubmit} image={image}/>
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
    createGiraffe: (giraffe) => {
        dispatch(createGiraffe(giraffe));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGiraffeCard);

